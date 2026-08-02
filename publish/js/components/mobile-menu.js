export const initMobileMenu = () => {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-navigation]");
  if (!toggle || !menu) return;
  const close = (returnFocus = false) => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    if (returnFocus) toggle.focus();
  };
  const open = () => {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    menu.querySelector("a")?.focus();
  };
  toggle.addEventListener("click", () => toggle.getAttribute("aria-expanded") === "true" ? close() : open());
  menu.addEventListener("click", (event) => { if (event.target.closest("a")) close(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && menu.classList.contains("is-open")) close(true); });
  document.addEventListener("click", (event) => {
    if (menu.classList.contains("is-open") && !menu.contains(event.target) && !toggle.contains(event.target)) close();
  });
  window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => { if (event.matches) close(); });
};
