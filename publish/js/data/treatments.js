// BEHANDLINGSKATALOG
// Oppdater navn, kategori, varighet og beskrivelse her. Priser vises kun i Timma.
// Sett active: false for å skjule en behandling.

export const treatmentCategories = [
  { id: "ansikt", name: "Ansikt", intro: "Klassiske og avanserte behandlinger tilpasset hudens behov.", image: "assets/images/behandlinger/ansiktsbehandling.jpg", alt: "Ansiktsbehandling i rolige omgivelser" },
  { id: "konsultasjon", name: "Konsultasjon", intro: "Et trygt første steg før valg av behandling.", image: "assets/images/behandlinger/konsultasjon.png", alt: "Personlig hudkonsultasjon i lyse klinikkomgivelser" },
  { id: "vipper-bryn", name: "Vipper og bryn", intro: "Farge, forming, laminering og vippeløft.", image: "assets/images/behandlinger/vipper-og-bryn.png", alt: "Profesjonell behandling av vipper og bryn" },
  { id: "harfjerning", name: "Hårfjerning", intro: "Voksbehandlinger for kvinner, enkeltområder og pakker.", image: "assets/images/behandlinger/harfjerning.png", alt: "Profesjonell hårfjerning med voks på leggen" },
  { id: "kropp", name: "Kropp", intro: "Peelinger og dyprensende behandlinger for kroppen.", image: "assets/images/behandlinger/kroppsbehandling.png", alt: "Eksfolierende kroppsbehandling på ryggen" },
  { id: "fot", name: "Fotbehandling", intro: "Fotpleie og spa-pedikyr for friske føtter.", image: "assets/images/behandlinger/fotbehandling.png", alt: "Profesjonell fotbehandling i lyse omgivelser" },
  { id: "massasje", name: "Massasje", intro: "Avslappende hodebunnsmassasje for kvinner.", image: "assets/images/behandlinger/hodebunnsmassasje.png", alt: "Avslappende hodebunnsmassasje" }
];

export const treatments = [
  {
    "id": "voksing-av-armhuler",
    "category": "harfjerning",
    "name": "Voksing av armhuler",
    "duration": "15 min",
    "description": "Skånsom hårfjerning med voks i armhulene.",
    "active": true
  },
  {
    "id": "voksing-av-armer",
    "category": "harfjerning",
    "name": "Voksing av armer",
    "duration": "20 min",
    "description": "Skånsom hårfjerning med voks på armene.",
    "active": true
  },
  {
    "id": "voksing-av-nakke",
    "category": "harfjerning",
    "name": "Voksing av nakke",
    "duration": "10 min",
    "description": "",
    "active": true
  },
  {
    "id": "voksing-av-bikinilinje",
    "category": "harfjerning",
    "name": "Voksing av bikinilinje",
    "duration": "15 min",
    "description": "Skånsom hårfjerning med voks langs bikinilinjen.",
    "active": true
  },
  {
    "id": "voksing-av-legger",
    "category": "harfjerning",
    "name": "Voksing av legger",
    "duration": "20 min",
    "description": "Skånsom hårfjerning med voks på leggene.",
    "active": true
  },
  {
    "id": "voksing-av-lar",
    "category": "harfjerning",
    "name": "Voksing av lår",
    "duration": "20 min",
    "description": "Skånsom hårfjerning med voks på lårene.",
    "active": true
  },
  {
    "id": "voksing-av-legger-og-lar",
    "category": "harfjerning",
    "name": "Voksing av legger og lår",
    "duration": "35 min",
    "description": "Voksing av legger og lår.",
    "active": true
  },
  {
    "id": "brasiliansk-voksning-kvinner-regelmessig",
    "category": "harfjerning",
    "name": "Brasiliansk voksning (kvinner) regelmessig",
    "duration": "30 min",
    "description": "For regelmessig voksing med maksimalt fem uker mellom behandlingene.",
    "active": true
  },
  {
    "id": "brasiliansk-voksing-kvinner",
    "category": "harfjerning",
    "name": "Brasiliansk voksing (kvinner)",
    "duration": "35 min",
    "description": "Brasiliansk voksing for kvinner.",
    "active": true
  },
  {
    "id": "voksing-av-rumpe",
    "category": "harfjerning",
    "name": "Voksing av rumpe",
    "duration": "20 min",
    "description": "",
    "active": true
  },
  {
    "id": "voksing-av-mage",
    "category": "harfjerning",
    "name": "Voksing av mage",
    "duration": "20 min",
    "description": "",
    "active": true
  },
  {
    "id": "voksing-av-skuldre",
    "category": "harfjerning",
    "name": "Voksing av skuldre",
    "duration": "20 min",
    "description": "",
    "active": true
  },
  {
    "id": "voks-rygg-med-skuldre",
    "category": "harfjerning",
    "name": "Voks rygg med skuldre",
    "duration": "40 min",
    "description": "",
    "active": true
  },
  {
    "id": "voksing-av-rygg-uten-skulder",
    "category": "harfjerning",
    "name": "Voksing av rygg uten skulder",
    "duration": "25 min",
    "description": "",
    "active": true
  },
  {
    "id": "vokspakke-bikinilinje-armhuler-legger",
    "category": "harfjerning",
    "name": "Vokspakke (bikinilinje+armhuler+legger)",
    "duration": "45 min",
    "description": "Voksing av bikinilinje, armhuler og legger.",
    "active": true
  },
  {
    "id": "vokspakke-bikinilinje-armhuler-lar",
    "category": "harfjerning",
    "name": "Vokspakke (bikinilinje+ armhuler+ lår)",
    "duration": "1 t",
    "description": "Voksing av bikinilinje, armhuler og lår.",
    "active": true
  },
  {
    "id": "vokspakke-bikinilinje-armhuler-lar-legger",
    "category": "harfjerning",
    "name": "Vokspakke (bikinilinje+ armhuler+ lår+ legger)",
    "duration": "1 t",
    "description": "",
    "active": true
  },
  {
    "id": "vokspakke-brasiliansk-armhuler-legger",
    "category": "harfjerning",
    "name": "Vokspakke (brasiliansk+armhuler+legger)",
    "duration": "1 t",
    "description": "Brasiliansk voksing kombinert med armhuler og legger.",
    "active": true
  },
  {
    "id": "voksing-av-ansikt",
    "category": "harfjerning",
    "name": "Voksing av ansikt",
    "duration": "20 min",
    "description": "Skånsom hårfjerning med voks i ansiktet.",
    "active": true
  },
  {
    "id": "voksing-av-overleppe",
    "category": "harfjerning",
    "name": "Voksing av overleppe",
    "duration": "15 min",
    "description": "Skånsom hårfjerning med voks på overleppen.",
    "active": true
  },
  {
    "id": "voksing-av-hake",
    "category": "harfjerning",
    "name": "Voksing av hake",
    "duration": "15 min",
    "description": "",
    "active": true
  },
  {
    "id": "voksing-av-overleppe-hake",
    "category": "harfjerning",
    "name": "Voksing av overleppe + hake",
    "duration": "20 min",
    "description": "",
    "active": true
  },
  {
    "id": "vokspakke-hake-kinnskjegg",
    "category": "harfjerning",
    "name": "Vokspakke (Hake+ kinnskjegg)",
    "duration": "15 min",
    "description": "",
    "active": true
  },
  {
    "id": "vokspakke-overlepper-hake-kinnskjegg",
    "category": "harfjerning",
    "name": "Vokspakke (Overlepper+ Hake+ Kinnskjegg)",
    "duration": "30 min",
    "description": "",
    "active": true
  },
  {
    "id": "vokspakke-overlepper-kinnskjegg",
    "category": "harfjerning",
    "name": "Vokspakke (Overlepper+ Kinnskjegg)",
    "duration": "15 min",
    "description": "",
    "active": true
  },
  {
    "id": "farge-bryn",
    "category": "vipper-bryn",
    "name": "Farge bryn",
    "duration": "30 min",
    "description": "Farging av bryn med hybridfarge.",
    "active": true
  },
  {
    "id": "forming-av-bryn-regelmessig",
    "category": "vipper-bryn",
    "name": "Forming av bryn- regelmessig",
    "duration": "30 min",
    "description": "Napping og voksing av bryn, med maksimalt fem uker mellom behandlingene.",
    "active": true
  },
  {
    "id": "forming-av-bryn",
    "category": "vipper-bryn",
    "name": "Forming av bryn",
    "duration": "30 min",
    "description": "Forming av bryn med napping og voksing.",
    "active": true
  },
  {
    "id": "farge-og-forming-av-bryn",
    "category": "vipper-bryn",
    "name": "Farge og forming av bryn",
    "duration": "45 min",
    "description": "Voksing, napping og farging av bryn.",
    "active": true
  },
  {
    "id": "brynslaminering-med-farging-av-bryn",
    "category": "vipper-bryn",
    "name": "Brynslaminering med farging av bryn",
    "duration": "1 t",
    "description": "Laminering av bryn med farging, voksing og forming.",
    "active": true
  },
  {
    "id": "divine-beauty-signature-brows",
    "category": "vipper-bryn",
    "name": "DIVINE BEAUTY SIGNATURE BROWS",
    "duration": "1 t",
    "description": "Brynspa med farging, forming, keratinpleie og fuktmaske.",
    "active": true
  },
  {
    "id": "farging-av-vipper",
    "category": "vipper-bryn",
    "name": "Farging av vipper",
    "duration": "30 min",
    "description": "Farging av øyevipper med InLei-farge.",
    "active": true
  },
  {
    "id": "permanent-vippeloft-med-farge-og-keratin-behandling-brynslaminering-med-farging-av-bryn",
    "category": "vipper-bryn",
    "name": "Permanent vippeløft med farge og keratin behandling+ Brynslaminering med farging av bryn",
    "duration": "1 t 30 min",
    "description": "Vippeløft med farge og keratinpleie, kombinert med brynslaminering.",
    "active": true
  },
  {
    "id": "farging-av-vipper-og-bryn-samt-forming-av-bryn",
    "category": "vipper-bryn",
    "name": "Farging av vipper og bryn, samt forming av bryn",
    "duration": "45 min",
    "description": "Farging av vipper og bryn, med forming og styling av bryn.",
    "active": true
  },
  {
    "id": "korean-lash-lift-treatment-inkl-farge-og-pleiende-behandling",
    "category": "vipper-bryn",
    "name": "Korean Lash Lift + Treatment (inkl. farge og pleiende behandling)",
    "duration": "1 t 15 min",
    "description": "Skreddersydd vippeløft med farge, keratinfiller og nærende pleie.",
    "active": true
  },
  {
    "id": "permanent-vippeloft-og-farging-av-vipper",
    "category": "vipper-bryn",
    "name": "Permanent vippeløft og farging av vipper",
    "duration": "1 t 15 min",
    "description": "Løft og farging av naturlige vipper med InLei-produkter.",
    "active": true
  },
  {
    "id": "korean-lash-lift-treatment-inkl-farge-og-pleiende-behandling-og-brynslaminering-med-farging-av-vipper",
    "category": "vipper-bryn",
    "name": "Korean Lash Lift + Treatment (inkl. farge og pleiende behandling) og Brynslaminering med farging av vipper",
    "duration": "1 t 30 min",
    "description": "Koreansk vippeløft med pleie, kombinert med brynslaminering og farge.",
    "active": true
  },
  {
    "id": "ansiktsbehandling",
    "category": "ansikt",
    "name": "Ansiktsbehandling",
    "duration": "1 t",
    "description": "Rens, peeling, damp, utklemming, massasje og maske tilpasset huden.",
    "active": true
  },
  {
    "id": "clear-up-mekanisk-peeling-60-min",
    "category": "ansikt",
    "name": "Clear up/mekanisk peeling, 60 min",
    "duration": "1 t",
    "description": "Dyprens med ekstra eksfoliering, aktive serum og ansiktsmassasje.",
    "active": true
  },
  {
    "id": "deluxe-ansiktsbehandling",
    "category": "ansikt",
    "name": "Deluxe ansiktsbehandling",
    "duration": "1 t 15 min",
    "description": "Ansiktsbehandling med dyprens, lang massasje og tilpasset maske.",
    "active": true
  },
  {
    "id": "hydra-og-oxygen-ansiktsbehandling",
    "category": "ansikt",
    "name": "Hydra og Oxygen ansiktsbehandling",
    "duration": "1 t 15 min",
    "description": "Dyprens, fukt og oxygenpleie med massasje, maske og LED-lys.",
    "active": true
  },
  {
    "id": "hydra-oksygen-enzym-peeling-dyprens-og-skansom-utklemming",
    "category": "ansikt",
    "name": "Hydra Oksygen + enzym peeling – dyprens og skånsom utklemming",
    "duration": "1 t 15 min",
    "description": "Grundig dyprens med Hydra-teknologi, enzympeeling og utklemming.",
    "active": true
  },
  {
    "id": "hydrafacial-calm-hydrate-skin-therapy",
    "category": "ansikt",
    "name": "Hydrafacial، Calm & Hydrate Skin Therapy",
    "duration": "1 t",
    "description": "Skånsom rens og fuktpleie for sensitiv eller dehydrert hud.",
    "active": true
  },
  {
    "id": "aknebalanse-clear-calm-skin",
    "category": "ansikt",
    "name": "Aknebalanse – Clear & Calm Skin",
    "duration": "50 min",
    "description": "Tilpasset dyprens og beroligende pleie for akneutsatt og hormonell hud.",
    "active": true
  },
  {
    "id": "akne-behandling",
    "category": "ansikt",
    "name": "Akne behandling",
    "duration": "1 t",
    "description": "Hudfornyende behandling for fet, uren eller tilstoppet hud.",
    "active": true
  },
  {
    "id": "pigmentbehandling",
    "category": "ansikt",
    "name": "Pigmentbehandling",
    "duration": "1 t 15 min",
    "description": "Målrettet hudpleie for ujevn hudtone og pigmentflekker.",
    "active": true
  },
  {
    "id": "anti-age-hudfornyelse",
    "category": "ansikt",
    "name": "Anti-age hudfornyelse",
    "duration": "1 t",
    "description": "Tilpasset hudfornyelse med fokus på fine linjer, fukt og spenst.",
    "active": true
  },
  {
    "id": "retinol-renewal-peel-avansert-hudfornyelse",
    "category": "ansikt",
    "name": "Retinol Renewal Peel – avansert hudfornyelse",
    "duration": "45 min",
    "description": "Profesjonell retinolbehandling med fokus på hudtone og hudstruktur.",
    "active": true
  },
  {
    "id": "sensitiv-hud-og-rodhet",
    "category": "ansikt",
    "name": "Sensitiv hud og rødhet",
    "duration": "45 min",
    "description": "Beroligende og fuktgivende pleie tilpasset sensitiv eller reaktiv hud.",
    "active": true
  },
  {
    "id": "green-peel",
    "category": "ansikt",
    "name": "Green peel",
    "duration": "1 t",
    "description": "Urtepeeling med fokus på hudfornyelse, struktur og glød.",
    "active": true
  },
  {
    "id": "microneedling-dermapen-hudfornyelse",
    "category": "ansikt",
    "name": "Microneedling /Dermapen Hudfornyelse",
    "duration": "1 t 15 min",
    "description": "Microneedling med tilpassede serum og beroligende etterpleie.",
    "active": true
  },
  {
    "id": "microneedling-dermapen-ansikt-hals",
    "category": "ansikt",
    "name": "Microneedling/Dermapen (ansikt+hals)",
    "duration": "1 t",
    "description": "",
    "active": true
  },
  {
    "id": "dermapen-regeneration-med-ameela-exosomes",
    "category": "ansikt",
    "name": "Dermapen Regeneration med Ameela Exosomes",
    "duration": "1 t 15 min",
    "description": "Dermapen kombinert med Ameela Exosomes og regenererende etterpleie.",
    "active": true
  },
  {
    "id": "kombo-behandling-microneedling-hydra-og-oxygen-ansiktsbehandling",
    "category": "ansikt",
    "name": "KOMBO BEHANDLING (Microneedling + Hydra og Oxygen ansiktsbehandling)",
    "duration": "1 t 30 min",
    "description": "Microneedling kombinert med Hydra og Oxygen ansiktsbehandling.",
    "active": true
  },
  {
    "id": "vitamin-c-radiance-intensiv-glodbehandling",
    "category": "ansikt",
    "name": "Vitamin C Radiance – intensiv glødbehandling",
    "duration": "1 t",
    "description": "Intensiv vitamin C-pleie med maske, fukt og beskyttelse.",
    "active": true
  },
  {
    "id": "spa-pedikyr",
    "category": "fot",
    "name": "Spa pedikyr",
    "duration": "1 t 30 min",
    "description": "Fotpleie med peeling, maske, parafinbad og massasje på friske føtter.",
    "active": true
  },
  {
    "id": "fotpleie",
    "category": "fot",
    "name": "Fotpleie",
    "duration": "1 t 15 min",
    "description": "Fotbad, fjerning av hard hud, neglepleie og lett massasje.",
    "active": true
  },
  {
    "id": "fotpleie-for-deg-med-ekstra-hard-hud",
    "category": "fot",
    "name": "Fotpleie for deg med ekstra hard hud",
    "duration": "1 t 30 min",
    "description": "Grundig fotpleie med ekstra tid til hard hud, neglepleie og massasje.",
    "active": true
  },
  {
    "id": "hodebunnsmassasje-15-min",
    "category": "massasje",
    "name": "Hodebunnsmassasje",
    "duration": "15 min",
    "description": "",
    "active": true
  },
  {
    "id": "hodebunnsmassasje-30-min",
    "category": "massasje",
    "name": "Hodebunnsmassasje",
    "duration": "30 min",
    "description": "",
    "active": true
  },
  {
    "id": "kjemisk-kroppspeeling-for-ryggen",
    "category": "kropp",
    "name": "Kjemisk kroppspeeling for ryggen",
    "duration": "15 min",
    "description": "Eksfolierende AHA- og BHA-behandling for ryggen.",
    "active": true
  },
  {
    "id": "kjemisk-peeling-for-hele-kroppen-arm-legger-rygg-mage-decollete",
    "category": "kropp",
    "name": "Kjemisk peeling for hele kroppen (arm, legger, rygg, mage, décolleté)",
    "duration": "25 min",
    "description": "Kjemisk peeling av armer, legger, rygg, mage og décolleté.",
    "active": true
  },
  {
    "id": "kjemisk-peeling-for-arm-og-legger",
    "category": "kropp",
    "name": "Kjemisk peeling for arm og legger",
    "duration": "25 min",
    "description": "Eksfolierende AHA- og BHA-behandling for armer og legger.",
    "active": true
  },
  {
    "id": "kjemisk-peeling-for-armene",
    "category": "kropp",
    "name": "Kjemisk peeling for armene",
    "duration": "15 min",
    "description": "Eksfolierende AHA- og BHA-behandling for armene.",
    "active": true
  },
  {
    "id": "peeling-med-korn-og-hydrafacial-for-ryggen",
    "category": "kropp",
    "name": "Peeling med korn og hydrafacial for ryggen",
    "duration": "45 min",
    "description": "Kornpeeling og HydraFacial-dyprens for ryggen, med lett massasje.",
    "active": true
  },
  {
    "id": "peeling-med-korn-hele-kroppen",
    "category": "kropp",
    "name": "Peeling med korn, hele kroppen",
    "duration": "1 t",
    "description": "Eksfoliering med naturlige korn for hele kroppen.",
    "active": true
  },
  {
    "id": "gratis-konsultasjon",
    "category": "konsultasjon",
    "name": "Gratis konsultasjon",
    "duration": "15 min",
    "description": "Personlig veiledning om hud og behandling. Avtal på telefon 908 57 071.",
    "active": true
  }
];

export const activeTreatments = treatments.filter((item) => item.active !== false);
export const getTreatmentById = (id) => activeTreatments.find((item) => item.id === id);
export const getCategoryById = (id) => treatmentCategories.find((item) => item.id === id);
