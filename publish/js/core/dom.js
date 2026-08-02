export const select = (selector, context = document) => context.querySelector(selector);
export const selectAll = (selector, context = document) => [...context.querySelectorAll(selector)];
export const setLiveMessage = (message) => {
  const region = select("[data-live-region]");
  if (region) region.textContent = message;
};
