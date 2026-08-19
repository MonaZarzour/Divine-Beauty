import { comparisonPairs } from "../data/media-manifest.js?v=4";
import { filterExistingMedia } from "../utils/media.js?v=4";
import { initBeforeAfterSliders } from "./before-after-slider.js?v=4";

const AUTOPLAY_DELAY = 6500;

const availablePairs = async () => {
  const checks = await Promise.all(comparisonPairs.map(async (pair) => {
    const available = await filterExistingMedia([pair.before, pair.after]);
    return available.length === 2 ? pair : null;
  }));
  return checks.filter(Boolean);
};

const renderSlides = (track, pairs) => {
  const fragment = document.createDocumentFragment();
  pairs.forEach((pair) => {
    const slide = document.createElement("article");
    slide.className = "comparison-carousel__slide";
    slide.dataset.comparisonSlide = "";
    slide.setAttribute("aria-hidden", "true");
    slide.innerHTML = `
      <figure class="comparison" data-comparison>
        <div class="comparison__base"><img src="${pair.after}" loading="lazy" alt="Etter ${pair.label.toLowerCase()}"></div>
        <div class="comparison__before" data-comparison-before><img src="${pair.before}" loading="lazy" alt="Før ${pair.label.toLowerCase()}"></div>
        <input class="comparison__range" type="range" min="0" max="100" value="50" aria-label="Sammenlign før og etter ${pair.label.toLowerCase()}" data-comparison-range>
        <div class="comparison__handle" aria-hidden="true" data-comparison-handle><span>↔</span></div>
        <div class="comparison__labels" aria-hidden="true"><span>Før</span><span>Etter</span></div>
        <figcaption>${pair.label}</figcaption>
      </figure>`;
    slide.querySelectorAll("img").forEach((image) => image.addEventListener("error", () => {
      slide.remove();
      track.dispatchEvent(new CustomEvent("mediachange", { bubbles: true }));
    }, { once: true }));
    fragment.append(slide);
  });
  track.replaceChildren(fragment);
  initBeforeAfterSliders(track);
};

export const initComparisonCarousels = () => {
  document.querySelectorAll("[data-comparison-carousel]").forEach(async (carousel) => {
    const track = carousel.querySelector("[data-comparison-media-track]");
    const previous = carousel.querySelector("[data-comparison-prev]");
    const next = carousel.querySelector("[data-comparison-next]");
    const status = carousel.querySelector("[data-comparison-status]");
    if (!track || !previous || !next || !status) return;
    renderSlides(track, await availablePairs());

    let slides = [...track.querySelectorAll("[data-comparison-slide]")];
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
      slides = [...track.querySelectorAll("[data-comparison-slide]")];
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
    carousel.addEventListener("pointerdown", stop);
    carousel.addEventListener("pointerup", () => {
      if (!carousel.contains(document.activeElement)) start();
    });
    carousel.addEventListener("keydown", (event) => {
      if (event.target !== carousel) return;
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    });
    document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
    refresh();
  });
};
