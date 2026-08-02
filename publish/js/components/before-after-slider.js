export const initBeforeAfterSliders = () => {
  document.querySelectorAll("[data-comparison]").forEach((component) => {
    const range = component.querySelector("[data-comparison-range]");
    const before = component.querySelector("[data-comparison-before]");
    const handle = component.querySelector("[data-comparison-handle]");
    if (!range || !before || !handle) return;
    const update = () => {
      const value = `${range.value}%`;
      before.style.width = value;
      handle.style.left = value;
      range.setAttribute("aria-valuenow", range.value);
    };
    range.addEventListener("input", update);
    update();
  });
};
