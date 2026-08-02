export const initBackToTop = () => {
  const button = document.querySelector("[data-back-to-top]");
  if (!button) return;
  const update = () => button.classList.toggle("is-visible", window.scrollY > 700);
  window.addEventListener("scroll", update, { passive: true });
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  update();
};
