// BEHANDLINGSKATALOG
// Dette er det eneste stedet du trenger å redigere behandlinger og priser.
// Pris skrives som et helt tall uten "kr". Sett active: false for å skjule en behandling.

export const treatmentCategories = [
  { id: "ansikt", name: "Ansikt", intro: "Klassiske og avanserte behandlinger tilpasset hudens behov.", image: "assets/images/behandlinger/ansiktsbehandling.jpg", alt: "Ansiktsbehandling i rolige omgivelser" },
  { id: "signature", name: "Signature", intro: "Eksklusive signaturbehandlinger med Dr. Dennis Gross.", image: "assets/images/behandlinger/microneedling.jpg", alt: "Profesjonell hudbehandling" },
  { id: "konsultasjon", name: "Konsultasjon", intro: "Et trygt første steg før valg av behandling.", image: "assets/images/behandlinger/konsultasjon.jpg", alt: "Hudpleieprodukter klargjort for konsultasjon" },
  { id: "vipper-bryn", name: "Vipper og bryn", intro: "Farge, forming, laminering og vippeløft.", image: "assets/images/behandlinger/sensitiv.jpg", alt: "Produkter til skjønnhetsbehandling" },
  { id: "harfjerning", name: "Hårfjerning", intro: "Voksbehandlinger for kvinner, enkeltområder og pakker.", image: "assets/images/behandlinger/fuktighet.jpg", alt: "Produkter brukt ved skånsom behandling" },
  { id: "kropp", name: "Kropp", intro: "Peelinger og dyprensende behandlinger for kroppen.", image: "assets/images/behandlinger/peeling.jpg", alt: "Produkter klargjort for peeling" },
  { id: "fot", name: "Fotbehandling", intro: "Fotpleie og spa-pedikyr for friske føtter.", image: "assets/images/behandlinger/fotbehandling.png", alt: "Profesjonell fotbehandling i lyse omgivelser" },
  { id: "massasje", name: "Massasje", intro: "Avslappende hodebunnsmassasje for kvinner.", image: "assets/images/behandlinger/hodebunnsmassasje.png", alt: "Avslappende hodebunnsmassasje" }
];

const treatment = (id, category, name, price, description, options = {}) => ({
  id, category, name, price, description, active: true, ...options
});

export const treatments = [
  treatment("ansiktsbehandling", "ansikt", "Ansiktsbehandling", 1150, "Rengjøring, peeling, damp, utklemming, massasje og maske. Behandlingen tilpasses hudens behov."),
  treatment("deluxe-ansiktsbehandling", "ansikt", "Deluxe ansiktsbehandling", 1350, "Rengjøring, peeling, damp, utklemming, lang massasje og maske, tilpasset hudens behov.", { duration: "80 min" }),
  treatment("hydrafacial-calm-hydrate", "ansikt", "HydraFacial Calm & Hydrate Skin Therapy", 1190, "En skånsom behandling for sensitiv, irritert eller dehydrert hud. HydraFacial-rens og hydrering kombineres med beroligende serum, tilpasset maske og LED-lys uten syrer eller peeling."),
  treatment("hydra-oxygen", "ansikt", "Hydra og Oxygen ansiktsbehandling", 1950, "Stimulerende og fuktgivende apparatbehandling som bidrar til jevnere hudtone og bedre fuktbalanse. Inkluderer ansikts- og nakkemassasje med beroligende serum."),
  treatment("microneedling-ansikt", "ansikt", "Microneedling / Dermapen hudfornyelse", 1650, "Avansert microneedling som stimulerer hudens naturlige kollagenproduksjon og cellefornyelse. Kan bidra ved store porer, ujevn tekstur, lett pigmentering, overfladiske aknearr og fine linjer."),
  treatment("microneedling-ansikt-hals", "ansikt", "Microneedling / Dermapen - ansikt og hals", 2099, "Microneedling tilpasset ansikt og hals. Behandlingen avsluttes med beroligende pleie."),
  treatment("dermapen-ameela-exosomes", "ansikt", "Dermapen Regeneration med Ameela Exosomes", 3290, "Avansert Dermapen-behandling kombinert med Ameela Exosomes for intensiv hudfornyelse. Avsluttes med regenererende hudpleie, LED-lys og kjølende behandling."),
  treatment("aknebalanse", "ansikt", "Aknebalanse - Clear & Calm Skin", 1190, "Skånsom behandling for akneutsatt og hormonell hud, med fokus på dyprens, balansert talgproduksjon, ro og styrket hudbarriere. Første behandling inkluderer hudanalyse og hjemmeprogram."),
  treatment("green-peel", "ansikt", "Green Peel", 1600, "Urtepeeling med naturlige ingredienser som stimulerer hudens regenerasjon og cellefornyelse. Kan bidra til jevnere hudstruktur, glød, uren hud og pigmentflekker."),
  treatment("clear-up", "ansikt", "Clear Up / mekanisk peeling", 1100, "Dyprens med ekstra eksfoliering, aktive serum, utrensing og ansiktsmassasje for en mykere og mer glødende hud.", { duration: "60 min" }),
  treatment("kombo-microneedling-hydra", "ansikt", "Kombobehandling: Microneedling + Hydra og Oxygen", 2490, "Kombinerer Dermapen/microneedling med Hydra og Oxygen ansiktsbehandling."),
  treatment("kombo-peeling-microneedling", "ansikt", "Kombobehandling: Kjemisk peeling + Microneedling", 2200, "Kombinerer kjemisk peeling med Dermapen/microneedling."),

  treatment("red-carpet", "signature", "The Doctor's Red Carpet Treatment", 1650, "En luksuriøs behandling med peel, akupressur og dobbel maskebehandling. Inkluderer hudforbedring på hals og har fokus på glød, jevn struktur, fine linjer og spenst.", { badge: "Signature" }),
  treatment("maximum-glow", "signature", "Dr. Gross Maximum GLOW", 1450, "Superpeel og C+ Collagen-pleie som frisker opp gusten hud og har fokus på glød, lysning og spenst.", { badge: "Signature" }),

  treatment("gratis-konsultasjon", "konsultasjon", "Gratis konsultasjon", 0, "Gratis vurdering før behandling. Kom gjerne uten sminke slik at huden kan vurderes tydelig. Avbestilling må skje senest 24 timer før timen.", { priceLabel: "Gratis", note: "Gebyr på 300 kr ved uteblivelse eller for sen avbestilling." }),

  treatment("farge-bryn", "vipper-bryn", "Farge bryn", 300, "Farging av øyebryn med hybridfarge. Fargen kan sitte i opptil 2-3 uker."),
  treatment("forming-bryn", "vipper-bryn", "Forming av bryn", 350, "Forming av bryn med napping og voksing."),
  treatment("farge-forming-bryn", "vipper-bryn", "Farge og forming av bryn", 599, "Voksing, napping og farging av bryn."),
  treatment("brynslaminering", "vipper-bryn", "Brynslaminering med farge", 900, "Brynslaminering med InLei-produkter, inkludert farging, voksing og forming. Effekten varer vanligvis 4-6 uker."),
  treatment("signature-brows", "vipper-bryn", "Divine Beauty Signature Brows", 999, "Spa-behandling for bryn med rens, enzymskrubb, farging, forming, keratinbehandling og fuktighetsgivende maske.", { badge: "Signature" }),
  treatment("farging-vipper", "vipper-bryn", "Farging av vipper", 300, "Farging av øyevipper med InLei-farge. Møt uten øyesminke, maskara og kontaktlinser.", { note: "Fjerning av maskara koster 100 kr." }),
  treatment("vippeloft-brynslaminering", "vipper-bryn", "Vippeløft + brynslaminering", 1600, "Permanent vippeløft med farge og keratinbehandling kombinert med brynslaminering og farging."),
  treatment("farge-vipper-bryn-forming", "vipper-bryn", "Farging av vipper og bryn + forming", 750, "Farging av vipper og bryn samt voksing, napping og styling av bryn. Resultatet kan vare i opptil 2-3 uker."),
  treatment("korean-lash-lift", "vipper-bryn", "Korean Lash Lift + Treatment", 990, "Skreddersydd vippeløft med farge, keratinbasert filler og nærende behandling for sterkere, mer glansfulle vipper."),
  treatment("permanent-vippeloft", "vipper-bryn", "Permanent vippeløft og farging", 900, "Skånsomt løft og farging av naturlige vipper med InLei-produkter. Løftet varer normalt 6-8 uker."),

  treatment("bedovelse-voks", "harfjerning", "Bedøvelse ved brasiliansk eller bikinilinje", 150, "Tilleggsbehandling for én brasiliansk- eller bikinilinjevoksing.", { duration: "+20 min", badge: "Tillegg" }),
  treatment("voks-armhuler", "harfjerning", "Voksing av armhuler", 300, "Skånsom og effektiv hårfjerning med voks."),
  treatment("voks-armer", "harfjerning", "Voksing av armer", 400, "Skånsom og effektiv hårfjerning med voks."),
  treatment("voks-bikinilinje", "harfjerning", "Voksing av bikinilinje", 400, "Skånsom og effektiv hårfjerning med voks."),
  treatment("voks-legger", "harfjerning", "Voksing av legger", 400, "Skånsom og effektiv hårfjerning med voks."),
  treatment("voks-lar", "harfjerning", "Voksing av lår", 400, "Skånsom og effektiv hårfjerning med voks."),
  treatment("voks-ben", "harfjerning", "Voksing av legger og lår", 650, "Voksing av hele ben."),
  treatment("vokspakke-bikini-armhuler-legger", "harfjerning", "Vokspakke: bikinilinje + armhuler + legger", 800, "Pakke med voksing av bikinilinje, armhuler og legger."),
  treatment("vokspakke-bikini-armhuler-ben", "harfjerning", "Vokspakke: bikinilinje + armhuler + lår + legger", 1100, "Pakke med voksing av bikinilinje, armhuler og hele ben."),
  treatment("voks-rygg-skuldre", "harfjerning", "Voksing av rygg med skuldre", 730, "Voksing av rygg og skuldre."),
  treatment("voks-overleppe", "harfjerning", "Voksing av overleppe", 150, "Skånsom hårfjerning på overleppen."),
  treatment("voks-hake", "harfjerning", "Voksing av hake", 150, "Skånsom hårfjerning på haken."),
  treatment("voks-overleppe-hake", "harfjerning", "Voksing av overleppe + hake", 250, "Pakke med voksing av overleppe og hake."),
  treatment("vokspakke-ansiktsomrader", "harfjerning", "Vokspakke: overleppe + hake + kinnskjegg", 450, "Pakke med voksing av tre ansiktsområder."),
  treatment("vokspakke-overleppe-kinn", "harfjerning", "Vokspakke: overleppe + kinnskjegg", 300, "Pakke med voksing av overleppe og kinnskjegg."),
  treatment("vokspakke-hake-kinn", "harfjerning", "Vokspakke: hake + kinnskjegg", 300, "Pakke med voksing av hake og kinnskjegg."),
  treatment("voks-ansikt", "harfjerning", "Voksing av ansikt", 550, "Skånsom hårfjerning i ansiktet."),
  treatment("brasiliansk", "harfjerning", "Brasiliansk voksing - kvinner", 600, "Skånsom og effektiv brasiliansk voksing for kvinner."),
  treatment("vokspakke-brasiliansk", "harfjerning", "Vokspakke: brasiliansk + armhuler + legger", 1150, "Pakke med brasiliansk voksing, armhuler og legger."),
  treatment("voks-mage", "harfjerning", "Voksing av mage", 300, "Voksing av mage."),
  treatment("voks-nakke", "harfjerning", "Voksing av nakke", 250, "Voksing av nakke."),
  treatment("voks-skuldre", "harfjerning", "Voksing av skuldre", 300, "Voksing av skuldre."),
  treatment("voks-rumpe", "harfjerning", "Voksing av rumpe", 400, "Voksing av rumpe."),
  treatment("voks-rygg", "harfjerning", "Voksing av rygg uten skuldre", 400, "Voksing av rygg uten skuldre."),

  treatment("kroppspeeling-rygg", "kropp", "Kjemisk kroppspeeling for ryggen", 350, "AHA- og BHA-peeling som fjerner døde hudceller og stimulerer cellefornyelsen."),
  treatment("kroppspeeling-hele", "kropp", "Kjemisk peeling for hele kroppen", 900, "Kjemisk peeling av armer, legger, rygg, mage og décolleté med AHA og BHA."),
  treatment("kroppspeeling-armer-legger", "kropp", "Kjemisk peeling for armer og legger", 550, "AHA- og BHA-peeling som bidrar til mykere og jevnere hud."),
  treatment("kroppspeeling-armer", "kropp", "Kjemisk peeling for armene", 350, "AHA- og BHA-peeling som bidrar til mykere og jevnere hud."),
  treatment("hydrafacial-rygg", "kropp", "Kornpeeling og HydraFacial for ryggen", 899, "Dyprensende ryggbehandling med rens, vakuum og serum, damp, kornpeeling, komedonfjerning og lett massasje."),
  treatment("kornpeeling-kropp", "kropp", "Peeling med korn - hele kroppen", 1400, "Eksfoliering med naturlige korn som fjerner døde hudceller og bidrar til en jevnere hudtekstur."),

  treatment("spa-pedikyr", "fot", "Spa-pedikyr", 1490, "Fotbad, fjerning av hard hud, negleforming, neglebåndsrens, peeling, maske, parafinbad og ti minutters massasje. Utføres på friske føtter."),
  treatment("fotpleie", "fot", "Fotpleie", 990, "Fotbad, fjerning av hard hud, negleforming, neglebåndsrens og lett massasje. Utføres på friske føtter.", { duration: "60-75 min" }),

  treatment("hodebunnsmassasje-1", "massasje", "Hodebunnsmassasje", 350, "Avslappende hodebunnsmassasje for kvinner.", { note: "Varighet og forskjell fra alternativet til 500 kr må bekreftes." }),
  treatment("hodebunnsmassasje-2", "massasje", "Hodebunnsmassasje - utvidet", 500, "Avslappende hodebunnsmassasje for kvinner.", { note: "Varighet og behandlingsinnhold må bekreftes." })
];

export const activeTreatments = treatments.filter((item) => item.active !== false);
export const getTreatmentById = (id) => activeTreatments.find((item) => item.id === id);
export const getCategoryById = (id) => treatmentCategories.find((item) => item.id === id);

export const formatPrice = (item) => {
  if (item.priceLabel) return item.priceLabel;
  const value = new Intl.NumberFormat("nb-NO").format(item.price);
  return `${item.fromPrice ? "Fra " : ""}${value} kr`;
};
