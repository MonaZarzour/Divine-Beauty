const AUTOPLAY_DELAY = 4200;

export const initResultsCarousels = () => {
  document.querySelectorAll("[data-results-carousel]").forEach((carousel) => {
    const slides = [...carousel.querySelectorAll("[data-carousel-slide]")];
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const status = carousel.querySelector("[data-carousel-status]");
    if (slides.length < 2 || !previous || !next || !status) return;

    let current = 0;
    let timer;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const show = (index) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === current;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      status.textContent = `${current + 1} / ${slides.length}`;
    };

    const stop = () => window.clearInterval(timer);
    const start = () => {
      stop();
      if (!reducedMotion) timer = window.setInterval(() => show(current + 1), AUTOPLAY_DELAY);
    };
    const move = (direction) => { show(current + direction); start(); };

    previous.addEventListener("click", () => move(-1));
    next.addEventListener("click", () => move(1));
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", (event) => { if (!carousel.contains(event.relatedTarget)) start(); });
    document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
    show(0);
    start();
  });
};
