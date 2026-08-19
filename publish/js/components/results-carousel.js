import { resultMedia } from "../data/media-manifest.js?v=4";
import { filterExistingMedia } from "../utils/media.js?v=4";

const AUTOPLAY_DELAY = 4200;

const renderSlides = (track, media) => {
  const fragment = document.createDocumentFragment();
  media.forEach((src) => {
    const slide = document.createElement("figure");
    const image = document.createElement("img");
    slide.className = "result-carousel__slide";
    slide.dataset.carouselSlide = "";
    slide.setAttribute("aria-hidden", "true");
    image.src = src;
    image.loading = "lazy";
    image.alt = "Resultat fra Divine Beauty";
    image.addEventListener("error", () => {
      slide.remove();
      track.dispatchEvent(new CustomEvent("mediachange", { bubbles: true }));
    });
    slide.append(image);
    fragment.append(slide);
  });
  track.replaceChildren(fragment);
};

export const initResultsCarousels = () => {
  document.querySelectorAll("[data-results-carousel]").forEach(async (carousel) => {
    const track = carousel.querySelector("[data-result-media-track]");
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const status = carousel.querySelector("[data-carousel-status]");
    if (!track || !previous || !next || !status) return;
    const availableMedia = await filterExistingMedia(resultMedia);
    renderSlides(track, availableMedia);

    let slides = [...track.querySelectorAll("[data-carousel-slide]")];
    let current = 0;
    let timer;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const stop = () => window.clearInterval(timer);
    const show = (index) => {
      if (!slides.length) {
        carousel.hidden = true;
        return;
      }
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === current;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      status.textContent = `${current + 1} / ${slides.length}`;
    };
    const start = () => {
      stop();
      if (!reducedMotion && slides.length > 1) timer = window.setInterval(() => show(current + 1), AUTOPLAY_DELAY);
    };
    const refresh = () => {
      slides = [...track.querySelectorAll("[data-carousel-slide]")];
      carousel.hidden = !slides.length;
      previous.hidden = slides.length < 2;
      next.hidden = slides.length < 2;
      current = Math.min(current, Math.max(0, slides.length - 1));
      show(current);
      start();
    };
    const move = (direction) => { show(current + direction); start(); };

    previous.addEventListener("click", () => move(-1));
    next.addEventListener("click", () => move(1));
    track.addEventListener("mediachange", refresh);
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", (event) => { if (!carousel.contains(event.relatedTarget)) start(); });
    document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
    refresh();
  });
};
