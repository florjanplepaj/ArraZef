// Translations object with English and Italian translations
const translations = {
  en: {
    bodyText:
      "For over 25 years, Arra Zef has been producing exceptional products in the Langhe area, blending traditional aesthetics with contemporary efficiency. We specialize in new builds, restorations and heritage renovations, ensuring every project reflects quality and innovation. Our commitment to detail and modern technology ensures lasting value and comfort in every home we build.",
    textTitle: "Transforming Tradition with Modern Comfort.",
    statistics: [
      "Years of experience in the construction industry",
      "Employer with over 25 years of experience",
      "Residential premises completed in years.",
      "Million dollar value on investments",
    ],
    services: [
      "We specialize in building durable, energy-efficient homes that combine modern design with traditional craftsmanship.",
      "We preserve the charm of historic buildings while integrating modern technology and comfort, restoring them to their former glory.",
      "Transform your spaces with our innovative renovation solutions, designed to enhance both style and functionality.",
      "We handle everything from start to finish, delivering completed projects with all the details taken care of, so you can step right in.",
      "Our expert team ensures that your property stays in top condition, providing reliable and timely maintenance services.",
    ],
    serviceTitles: [
      "Construction",
      "Restoration",
      "Renovation",
      "Keys on Hand",
      "Maintenance",
    ],
    contactUSTitle: `Contact Info <div class="footer-line"></div>`,
    addressTitle: `Address <div class="footer-line"></div>`,
    companyTitle: `Company <div class="footer-line"></div>`,
    menuButtons: ["Home", "About", "Projects", "Services", "Contact"],
    recentText: ["Recent Projects", "VIEW ALL", "View Project"],
  },
  it: {
    bodyText:
      "Da oltre 25 anni, Arra Zef produce prodotti eccezionali edificinelle Langhe, fondendo l'estetica tradizionale con efficienza contemporanea. Siamo specializzati in nuove costruzioni, restauri e ristrutturazioni del patrimonio, garantendo ogni progetto rifletta qualità e innovazione. Il nostro impegno per i dettagli e la tecnologia moderna garantisce valore duraturo e comfort in ogni casa che costruiamo.",
    textTitle: "Trasformare la Tradizione con il Comfort Moderno",
    statistics: [
      "Anni di esperienza nel settore delle costruzioni",
      "Datore di lavoro con oltre 25 anni di esperienza",
      "Premises residenziali completati in anni.",
      "Valore di milioni di dollari sugli investimenti",
    ],
    services: [
      "Siamo specializzati nella costruzione di case durevoli ed energeticamente efficienti che combinano design moderno con artigianato tradizionale.",
      "Preserviamo il fascino degli edifici storici integrando la tecnologia moderna e il comfort, restaurandoli al loro antico splendore.",
      "Trasforma i tuoi spazi con le nostre innovative soluzioni di ristrutturazione, progettate per migliorare sia lo stile che la funzionalità.",
      "Ci occupiamo di tutto, dalla A alla Z, consegnando progetti completati con ogni dettaglio curato, così puoi entrare senza pensieri.",
      "Il nostro team di esperti garantisce che la tua proprietà rimanga in ottime condizioni, offrendo servizi di manutenzione affidabili e tempestivi.",
    ],
    serviceTitles: [
      "Costruzione",
      "Restauro",
      "Ristrutturazione",
      "Chiavi in mano",
      "Manutenzione",
    ],
    contactUSTitle: `Informazioni di Contatto <div class="footer-line"></div>`,
    addressTitle: `Indirizzo <div class="footer-line"></div>`,
    companyTitle: `Azienda <div class="footer-line"></div>`,
    menuButtons: ["Home", "Chi Siamo", "Progetti", "Servizi", "Contatti"],
    recentText: ["Progetti Recenti", "VEDI TUTTI ", "Vedi Progetto"],
  },
};

// Function to update the language based on the selected language
export function updateLanguage(language) {
  const langData = translations[language];

  if (!langData) return;

  document.querySelector(".js-text-body-info").innerText = langData.bodyText;
  document.querySelector(".js-text-title").innerText = langData.textTitle;

  const statsElements = document.querySelectorAll(".js-statistics-text-text");
  statsElements.forEach((el, index) => {
    el.innerText = langData.statistics[index];
  });

  const servicesElements = document.querySelectorAll(
    ".js-services-kind-up-text-text"
  );
  servicesElements.forEach((el, index) => {
    el.innerText = langData.services[index];
  });

  const serviceTitlesElements = document.querySelectorAll(
    ".js-services-kind-up-text"
  );
  serviceTitlesElements.forEach((el, index) => {
    el.innerText = langData.serviceTitles[index];
  });

  document.querySelector(".footer-center-titile").innerHTML =
    langData.contactUSTitle;

  document.querySelector(".footer-right-titile").innerHTML =
    langData.addressTitle;
  document.querySelector(".footer-right-menu-title").innerHTML =
    langData.companyTitle;

  const menuButtonsElement = document.querySelectorAll(
    ".footer-right-menu-body-text-text"
  );
  menuButtonsElement.forEach((el, index) => {
    el.innerText = langData.menuButtons[index];
  });
  const menuButtonsElementTop = document.querySelectorAll(".js-about-text");
  menuButtonsElementTop.forEach((el, index) => {
    el.innerText = langData.menuButtons[index];
  });

  document.querySelector(".js-title-cover-text").innerText =
    langData.recentText[0];
  document.querySelector(".js-button-view-all-text").innerText =
    langData.recentText[1];
  document.querySelector(".js-recent-project-view-project-button").innerText =
    langData.recentText[2];
}

// Function to handle Italian language selection
export function languageIt() {
  document.querySelector(".js-flag-2").addEventListener("click", () => {
    updateLanguage("it");
  });
}

// Function to handle English language selection (if needed)
export function languageEn() {
  document.querySelector(".js-flag-1").addEventListener("click", () => {
    updateLanguage("en");
    console.log("hello");
  });
}
