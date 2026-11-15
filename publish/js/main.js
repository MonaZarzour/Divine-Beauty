import { initRouter } from "./core/router.js?v=2";
import { initNavigation } from "./components/navigation.js";
import { initMobileMenu } from "./components/mobile-menu.js";
import { initTabs } from "./components/tabs.js";
import { initModals } from "./components/modal.js?v=3";
import { initTreatmentFilters } from "./components/treatment-filters.js?v=6";
import { initScrollAnimations } from "./components/scroll-animations.js";
import { initActiveSection } from "./components/active-section.js?v=2";
import { initComparisonCarousels } from "./components/comparison-carousel.js?v=6";
import { initResultsCarousels } from "./components/results-carousel.js?v=8";
import { initVideoCarousels } from "./components/video-carousel.js?v=6";
import { initContactLinks } from "./components/contact-links.js?v=2";
import { initReviewsCarousel } from "./components/reviews-carousel.js?v=5";
import { initBackToTop } from "./components/back-to-top.js";
import { initBackgroundAudio } from "./components/background-audio.js?v=4";
import { applyAssetVersions } from "./utils/media.js?v=5";

// Delegate so images added later by the carousels are covered too.
const suppressImageAction = (event) => {
  if (event.target instanceof HTMLImageElement) event.preventDefault();
};
document.addEventListener("contextmenu", suppressImageAction);
document.addEventListener("dragstart", suppressImageAction);

document.addEventListener("DOMContentLoaded", () => {
  applyAssetVersions();
  initRouter();
  initNavigation();
  initMobileMenu();
  initTabs();
  initModals();
  initTreatmentFilters();
  initScrollAnimations();
  initActiveSection();
  initComparisonCarousels();
  initResultsCarousels();
  initVideoCarousels();
  initContactLinks();
  initReviewsCarousel();
  initBackToTop();
  initBackgroundAudio();
});
