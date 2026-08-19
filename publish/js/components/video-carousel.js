import { videoMedia } from "../data/media-manifest.js?v=4";
import { filterExistingMedia } from "../utils/media.js?v=4";

const AUTOPLAY_DELAY = 5200;

const mediaType = (src) => src.split("?", 1)[0].toLowerCase().endsWith(".webm") ? "video/webm" : "video/mp4";

const renderSlides = (track, media) => {
  const fragment = document.createDocumentFragment();
  media.forEach((src) => {
    const slide = document.createElement("article");
    const video = document.createElement("video");
    const source = document.createElement("source");
    slide.className = "video-card";
    slide.dataset.videoSlide = "";
    slide.setAttribute("aria-hidden", "true");
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", "Video fra Divine Beauty");
    source.src = src;
    source.type = mediaType(src);
    video.append(source, "Nettleseren din støtter ikke videoavspilling.");
    video.addEventListener("error", () => {
      slide.remove();
      track.dispatchEvent(new CustomEvent("mediachange", { bubbles: true }));
    });
    slide.append(video);
    fragment.append(slide);
  });
  track.replaceChildren(fragment);
};

export const initVideoCarousels = () => {
  document.querySelectorAll("[data-video-carousel]").forEach(async (carousel) => {
    const track = carousel.querySelector("[data-video-media-track]");
    const previous = carousel.querySelector("[data-video-prev]");
    const next = carousel.querySelector("[data-video-next]");
    const status = carousel.querySelector("[data-video-status]");
    if (!track || !previous || !next || !status) return;
    const availableMedia = await filterExistingMedia(videoMedia);
    renderSlides(track, availableMedia);

    let slides = [...track.querySelectorAll("[data-video-slide]")];
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
        if (!active) slide.querySelector("video")?.pause();
      });
      status.textContent = `${current + 1} / ${slides.length}`;
    };
    const start = () => {
      stop();
      if (!reducedMotion && slides.length > 1) timer = window.setInterval(() => show(current + 1), AUTOPLAY_DELAY);
    };
    const attachVideoEvents = () => {
      slides.forEach((slide) => {
        const video = slide.querySelector("video");
        if (!video || video.dataset.carouselReady) return;
        video.dataset.carouselReady = "true";
        video.addEventListener("play", stop);
        video.addEventListener("ended", () => { show(current + 1); start(); });
      });
    };
    const refresh = () => {
      slides = [...track.querySelectorAll("[data-video-slide]")];
      carousel.hidden = !slides.length;
      previous.hidden = slides.length < 2;
      next.hidden = slides.length < 2;
      current = Math.min(current, Math.max(0, slides.length - 1));
      attachVideoEvents();
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
    carousel.addEventListener("keydown", (event) => {
      if (event.target !== carousel) return;
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    });
    document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
    refresh();
  });
};
