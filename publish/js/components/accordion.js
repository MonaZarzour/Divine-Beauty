export const initAccordions = () => {
  document.querySelectorAll("[data-accordion]").forEach((accordion) => {
    accordion.addEventListener("click", (event) => {
      const button = event.target.closest("button[aria-controls]");
      if (!button) return;
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const willOpen = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(willOpen));
      if (panel) panel.hidden = !willOpen;
    });
    accordion.addEventListener("keydown", (event) => {
      const buttons = [...accordion.querySelectorAll("button[aria-controls]")];
      const index = buttons.indexOf(document.activeElement);
      if (index < 0 || !["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      if (event.key === "Home") buttons[0].focus();
      else if (event.key === "End") buttons.at(-1).focus();
      else buttons[(index + (event.key === "ArrowDown" ? 1 : -1) + buttons.length) % buttons.length].focus();
    });
  });
};
