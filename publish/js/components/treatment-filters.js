import { activeTreatments, treatmentCategories } from "../data/treatments.js";
import { versionedAssetPath } from "../utils/media.js?v=4";

const categoryCard = (category) => {
  const items = activeTreatments.filter((item) => item.category === category.id);
  if (!items.length) return "";
  const countLabel = `${items.length} ${items.length === 1 ? "behandling" : "behandlinger"}`;
  return `
    <button class="treatment-category-card${category.image ? "" : " treatment-category-card--plain"}" type="button" data-category-open="${category.id}" aria-label="Vis ${countLabel} i kategorien ${category.name}">
      <span class="treatment-category-card__media">
        ${category.image ? `<img src="${versionedAssetPath(category.image)}" loading="lazy" alt="">` : `<span class="treatment-category-card__monogram" aria-hidden="true">${category.name.charAt(0)}</span>`}
      </span>
      <span class="treatment-category-card__content">
        <span class="eyebrow">${countLabel}</span>
        <strong>${category.name}</strong>
        <span class="treatment-category-card__link">Se alle <span aria-hidden="true">→</span></span>
      </span>
    </button>`;
};

export const initTreatmentFilters = () => {
  const catalog = document.querySelector("[data-treatment-catalog]");
  if (!catalog) return;
  catalog.innerHTML = treatmentCategories.map(categoryCard).join("");
};
