import { routeTitles } from "./config.js";

const validRoutes = new Set(Object.keys(routeTitles));
let routeScrollLocked = false;
let routeScrollTimer;

const getRoute = () => {
  const route = window.location.hash.slice(1);
  return validRoutes.has(route) ? route : "hjem";
};

const updateTitle = (route) => {
  document.title = `${routeTitles[route]} | Divine Beauty`;
};

const updateNavigation = (route) => {
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${route}`;
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
};

const navigateToHash = (shouldScroll = true) => {
  const route = getRoute();
  if (!window.location.hash || !validRoutes.has(window.location.hash.slice(1))) {
    history.replaceState(null, "", `#${route}`);
  }
  updateTitle(route);
  updateNavigation(route);
  if (shouldScroll) {
    const target = document.getElementById(route);
    if (!target) return;
    routeScrollLocked = true;
    window.clearTimeout(routeScrollTimer);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 100 : 1000;
    routeScrollTimer = window.setTimeout(() => {
      routeScrollLocked = false;
      updateTitle(route);
      updateNavigation(route);
    }, delay);
  }
};

export const setActiveRoute = (route) => {
  if (!validRoutes.has(route) || routeScrollLocked) return;
  history.replaceState(null, "", `#${route}`);
  updateTitle(route);
  updateNavigation(route);
};

export const initRouter = () => {
  window.addEventListener("hashchange", () => navigateToHash(true));
  navigateToHash(Boolean(window.location.hash));
};
