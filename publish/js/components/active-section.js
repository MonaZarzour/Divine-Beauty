import { setActiveRoute } from "../core/router.js";

export const initActiveSection = () => {
  if (!("IntersectionObserver" in window)) return;
  const observed = [...document.querySelectorAll("[data-route-title]")];
  const observer = new IntersectionObserver((entries) => {
    const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (current) setActiveRoute(current.target.id);
  }, { rootMargin: "-28% 0px -58%", threshold: [0, .15, .5] });
  observed.forEach((section) => observer.observe(section));
};
