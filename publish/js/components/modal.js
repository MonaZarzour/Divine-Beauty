import { activeTreatments, formatPrice, getCategoryById, getTreatmentById } from "../data/treatments.js";
import { specialists } from "../data/specialists.js";
import { clinicConfig } from "../core/config.js";

const legalContent = {
  personvern: ["Personvern", "Dette statiske nettstedet samler ikke inn eller sender personopplysninger. Ikke send helseopplysninger på vanlig e-post. Dersom eksterne tjenester legges til senere, må personvernteksten oppdateres før publisering."],
  informasjonskapsler: ["Informasjonskapsler", "Nettstedet bruker ingen analyse- eller markedsføringskapsler. Nettleserens lokale lagring brukes bare for å huske at personvernmeldingen er lukket."],
  vilkar: ["Generelle vilkår", "Informasjonen er generell og erstatter ikke individuell vurdering. Behandlingens egnethet vurderes individuelt, og resultater varierer fra person til person. Klinikkopplysninger og medisinsk innhold må kvalitetssikres før publisering."],
  tilgjengelighet: ["Tilgjengelighet", "Nettstedet er utviklet med tastaturnavigasjon, synlige fokusmarkeringer, semantisk struktur og støtte for redusert bevegelse. Meld gjerne fra til [E-postadresse] dersom du møter en barriere."]
};

const treatmentMarkup = (item) => {
  const category = getCategoryById(item.category);
  return `<p class="eyebrow">${category?.name || "Behandling"}</p><h2 id="detail-title">${item.name}</h2><div class="modal__meta">${item.duration ? `<span>${item.duration}</span>` : ""}<span>${formatPrice(item)}</span></div><p>${item.description}</p>${item.note ? `<div class="modal__warning"><strong>Viktig informasjon</strong><p>${item.note}</p></div>` : ""}<a class="button button--primary" href="${clinicConfig.bookingUrl}" target="_blank" rel="noopener" data-dialog-action>Bestill time</a>`;
};

const categoryMarkup = (category) => {
  const items = activeTreatments.filter((item) => item.category === category.id);
  const rows = items.map((item) => `<article class="modal-treatment-row"><div><div class="modal-treatment-row__heading"><h3>${item.name}</h3>${item.badge ? `<span>${item.badge}</span>` : ""}</div><p>${item.description}</p>${item.note ? `<small>${item.note}</small>` : ""}</div><div class="modal-treatment-row__meta">${item.duration ? `<span>${item.duration}</span>` : ""}<strong>${formatPrice(item)}</strong></div></article>`).join("");
  return `<p class="eyebrow">Behandlingskategori</p><h2 id="detail-title">${category.name}</h2><p>${category.intro}</p><div class="modal-treatment-list">${rows}</div><a class="button button--primary" href="${clinicConfig.bookingUrl}" target="_blank" rel="noopener" data-dialog-action>Bestill time</a>`;
};
const specialistMarkup = (item) => `<p class="eyebrow">${item.role}</p><h2 id="detail-title">${item.name}</h2><p>«${item.philosophy}»</p><h3>Utdanning</h3><p>${item.education}</p><h3>Sertifiseringer</h3><p>${item.certifications}</p><h3>Kompetanseområder</h3><p>${item.expertise}</p><h3>Språk</h3><p>${item.languages}</p><div class="modal__warning"><strong>Plassholderinformasjon</strong><p>Navn, rolle og kvalifikasjoner må erstattes og dokumenteres før nettstedet publiseres.</p></div><a class="button button--primary" href="#kontakt" data-dialog-action>Kontakt klinikken</a>`;

const openDialog = (dialog, content, markup, trigger) => {
  content.innerHTML = markup;
  dialog.__trigger = trigger;
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("modal-open");
  dialog.querySelector("[data-dialog-close]")?.focus();
};

export const initModals = () => {
  const detailDialog = document.querySelector("[data-detail-dialog]");
  const legalDialog = document.querySelector("[data-legal-dialog]");
  document.addEventListener("click", (event) => {
    const treatmentButton = event.target.closest("[data-treatment-open]");
    const categoryButton = event.target.closest("[data-category-open]");
    const specialistButton = event.target.closest("[data-specialist-open]");
    const legalButton = event.target.closest("[data-legal-open]");
    if (treatmentButton && detailDialog) {
      const treatment = getTreatmentById(treatmentButton.dataset.treatmentOpen);
      if (treatment) openDialog(detailDialog, detailDialog.querySelector("[data-detail-content]"), treatmentMarkup(treatment), treatmentButton);
    }
    if (categoryButton && detailDialog) {
      const category = getCategoryById(categoryButton.dataset.categoryOpen);
      if (category) openDialog(detailDialog, detailDialog.querySelector("[data-detail-content]"), categoryMarkup(category), categoryButton);
    }
    if (specialistButton && detailDialog) openDialog(detailDialog, detailDialog.querySelector("[data-detail-content]"), specialistMarkup(specialists[specialistButton.dataset.specialistOpen]), specialistButton);
    if (legalButton && legalDialog) {
      const [title, body] = legalContent[legalButton.dataset.legalOpen];
      openDialog(legalDialog, legalDialog.querySelector("[data-legal-content]"), `<p class="eyebrow">Juridisk informasjon</p><h2 id="legal-title">${title}</h2><p>${body}</p>`, legalButton);
    }
    const closeButton = event.target.closest("[data-dialog-close], [data-dialog-action]");
    if (closeButton) closeButton.closest("dialog")?.close();
  });
  [detailDialog, legalDialog].filter(Boolean).forEach((dialog) => {
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("close", () => { document.body.classList.remove("modal-open"); dialog.__trigger?.focus(); });
  });
};
