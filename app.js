// M.LAB utilise les contenus fournis par le porteur. Les idées des autres projets sont fictives pour la maquette.
const projects = [
  {
    id: "mlab-best-soap", name: "Promoteur de M.LAB", initials: "ML", title: "M.LAB / BEST SOAP SERVICES", category: "Commerce et services",
    short: "Importer des produits utiles à prix accessibles et fabriquer localement des produits d'entretien ménager.",
    location: "Cameroun", avatar: "assets/mlab-promoteur-portrait.png", image: "assets/mlab-promoteur-portrait.png",
    imagePosition: "50% 22%", avatarPosition: "50% 22%",
    gallery: "assets/mlab-promoteur-motivation.png",
    long: "Jeune entrepreneur passionné par l'innovation, le commerce international et la transformation locale, le promoteur de M.LAB / BEST SOAP SERVICES associe l'importation de produits et d'équipements depuis la Chine à la fabrication et à la commercialisation de produits d'entretien ménager au Cameroun.",
    problem: "Le projet veut répondre au coût élevé de certains produits courants, à l'accès difficile aux marchandises et équipements abordables, au manque d'emplois et de formation pratique des jeunes à la fabrication de produits ménagers et à l'entrepreneuriat, ainsi qu'à la dépendance aux importations lorsqu'une production locale est possible.",
    solution: "Importer des produits et équipements utiles depuis la Chine tout en développant une production locale de savons liquides, détergents en poudre, eau de Javel, savons de ménage et vinaigre alimentaire. Ces solutions s'adressent aux ménages, commerces, établissements scolaires, restaurants et petites entreprises.",
    goals: "Créer des emplois directs et indirects, former des jeunes aux techniques de fabrication de produits ménagers, accompagner les petits commerçants et proposer des produits de qualité à des prix compétitifs.",
    future: "Construire une entreprise innovante, durable et compétitive, qui répond aux besoins quotidiens, réduit le chômage des jeunes, valorise la production locale et contribue au développement de l'entrepreneuriat camerounais.",
    motto: "Importer intelligemment, produire localement et entreprendre pour transformer le Cameroun."
  },
  {
    id: "agromboa-direct", name: "Ziani Youssouf", initials: "ZY", title: "AgroMboa Direct", category: "Agriculture",
    short: "Un circuit de collecte et de vente directe qui rapproche les petits producteurs des marchés locaux.",
    location: "Cameroun", avatar: "assets/ziani-youssouf.png", image: "assets/ziani-youssouf.png", imagePosition: "50% 38%", avatarPosition: "50% 38%",
    long: "AgroMboa Direct imagine un réseau de collecte de produits agricoles auprès des petits producteurs, avec une mise en relation simple avec les commerces, restaurants et familles. Le projet veut mieux valoriser les récoltes locales et faciliter leur accès aux marchés.",
    problem: "Les producteurs ont parfois du mal à trouver des débouchés réguliers et à acheminer leurs récoltes. Les acheteurs, eux, ne savent pas toujours où trouver des produits locaux en quantité et au bon moment.",
    solution: "Organiser des points de collecte de proximité, regrouper les commandes et partager les disponibilités des producteurs avec les acheteurs locaux.",
    goals: "Lancer trois points de collecte pilotes, accompagner 40 producteurs et tester un premier service de commandes groupées.",
    future: "Étendre le réseau à de nouvelles filières et développer des solutions de conservation adaptées aux récoltes locales."
  },
  {
    id: "savoirs-en-mouvement", name: "Ngo Kigno Judicaël Diane", initials: "ND", title: "Les Savoirs en Mouvement", category: "Éducation",
    short: "Des ateliers mobiles de lecture et de découverte numérique pour les jeunes.",
    location: "Cameroun", avatar: "assets/ngo-kigno-judicael-diane.png", image: "assets/ngo-kigno-judicael-diane.png", imagePosition: "50% 34%", avatarPosition: "50% 34%",
    long: "Les Savoirs en Mouvement propose des ateliers itinérants où les jeunes peuvent lire, découvrir des outils numériques et réaliser des activités créatives. Le programme est conçu pour être accueilli dans des écoles et des espaces associatifs.",
    problem: "Certains jeunes ont peu d'occasions d'accéder à des livres, à des outils numériques et à des activités pratiques en complément des cours.",
    solution: "Mettre à disposition des malles de livres et de matériel numérique, puis organiser des ateliers animés avec les relais éducatifs locaux.",
    goals: "Créer deux kits mobiles, organiser 24 ateliers et accueillir au moins 200 jeunes lors d'une première phase pilote.",
    future: "Former des animateurs locaux et élargir le programme à davantage d'établissements et d'associations."
  },
  {
    id: "restart-mobile", name: "Marius Tchoumi", initials: "MT", title: "ReStart Mobile", category: "Technologie et innovation",
    short: "Réparer et reconditionner des téléphones tout en formant de jeunes techniciens.",
    location: "Cameroun", avatar: "assets/marius-tchoumi.png", image: "assets/marius-tchoumi.png", imagePosition: "50% 32%", avatarPosition: "50% 32%",
    long: "ReStart Mobile veut ouvrir un atelier de réparation et de reconditionnement de téléphones. Le projet associe un service de proximité à une formation pratique pour transmettre les bases du diagnostic, de la réparation et du réemploi électronique.",
    problem: "Les pannes de téléphone coûtent cher, les appareils inutilisés s'accumulent et les jeunes disposent de peu d'espaces pour apprendre la réparation sur du matériel réel.",
    solution: "Un atelier qui propose diagnostic et réparation, récupère les appareils réparables et organise des parcours pratiques avec des techniciens expérimentés.",
    goals: "Équiper un atelier pilote, former 12 jeunes et remettre en circulation les premiers appareils reconditionnés avec un suivi après-vente.",
    future: "Créer un service local de collecte et de réparation, puis proposer des ateliers dans d'autres quartiers."
  },
  {
    id: "agripulse-local", name: "Ketcha Frank Prosper", initials: "KF", title: "AgriPulse Local", category: "Agriculture",
    short: "Des jardins maraîchers productifs grâce à une irrigation économe et à des pratiques agroécologiques.",
    location: "Cameroun", avatar: "assets/ketcha-frank-prosper.png", image: "assets/ketcha-frank-prosper.png", imagePosition: "50% 45%", avatarPosition: "50% 32%",
    long: "AgriPulse Local accompagne de petits jardins maraîchers avec des systèmes d'irrigation économes, des conseils pratiques et une meilleure planification des cultures. L'objectif est de produire toute l'année en utilisant l'eau avec soin.",
    problem: "Les petites exploitations subissent les périodes sèches, les pertes de récoltes et le manque d'équipements simples pour mieux gérer l'eau.",
    solution: "Installer des dispositifs d'irrigation adaptés à petite échelle, former les producteurs à leur entretien et partager des méthodes de culture agroécologiques.",
    goals: "Créer deux parcelles pilotes, accompagner 20 producteurs et suivre la consommation d'eau et les récoltes sur une première saison.",
    future: "Faire connaître ces pratiques dans de nouveaux groupements de producteurs et tester des équipements fabriqués ou assemblés localement."
  },
  {
    id: "naya-racines", name: "Kenfack Natacha Sandrine", initials: "KN", title: "Naya Racines", category: "Entrepreneuriat",
    short: "Une gamme de soins artisanaux qui valorise les huiles et ingrédients végétaux locaux.",
    location: "Cameroun", avatar: "assets/kenfack-natacha-sandrine.png", image: "assets/kenfack-natacha-sandrine.png", imagePosition: "50% 34%", avatarPosition: "50% 34%",
    long: "Naya Racines développe une petite gamme de soins pour la peau et les cheveux à base d'ingrédients végétaux disponibles localement. La démarche associe formulation soignée, production en petits lots et présentation claire de la composition des produits.",
    problem: "Les consommateurs cherchent des soins abordables et transparents, tandis que les petites productrices ont besoin d'accompagnement pour structurer leur fabrication et leur commercialisation.",
    solution: "Prototyper des savons et baumes simples, documenter les recettes et les bonnes pratiques d'hygiène, puis tester les produits auprès de premiers clients.",
    goals: "Développer trois produits pilotes, former une petite équipe aux pratiques de fabrication et tester une première vente locale.",
    future: "Faire évoluer la gamme, nouer des partenariats d'approvisionnement responsable et créer des opportunités pour d'autres jeunes entrepreneuses."
  },
  {
    id: "atelier-ndolo", name: "Estelle Ndom", initials: "EN", title: "Atelier Ndolo", category: "Commerce et services",
    short: "Un atelier de couture circulaire pour réparer, transformer et transmettre.",
    location: "Limbe, Cameroun", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&h=240&q=82",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=82",
    long: "Atelier Ndolo donne une seconde vie aux vêtements grâce à la retouche, à la transformation et à des ateliers pratiques. Les créations sont réalisées à partir de textiles récupérés et de tissus de la région.",
    problem: "Les vêtements peu utilisés s'accumulent, tandis que les services de réparation accessibles et les espaces de transmission manquent.",
    solution: "Un atelier de quartier où l'on peut faire réparer ses vêtements, apprendre à coudre et découvrir des pièces revalorisées.",
    goals: "Former 20 jeunes aux bases de la couture et détourner 400 pièces textiles de la décharge.",
    future: "Créer une collection capsule issue du réemploi et développer des ateliers itinérants."
  },
  {
    id: "solaire-ensemble", name: "Armand Fongang", initials: "AF", title: "Solaire Ensemble", category: "Environnement",
    short: "Des solutions solaires de proximité pensées avec les habitants.",
    location: "Ngaoundéré, Cameroun", avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=240&h=240&q=82",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=82",
    long: "Solaire Ensemble accompagne des petits commerces et des associations pour imaginer des solutions d'énergie solaire adaptées à leurs besoins. Le projet privilégie l'installation locale, l'entretien et le partage des compétences.",
    problem: "Les solutions d'énergie solaire sont parfois difficiles à choisir, installer et entretenir sans accompagnement de proximité.",
    solution: "Un diagnostic simple, des équipements adaptés aux usages et une formation à l'entretien avec des techniciens du territoire.",
    goals: "Réaliser 12 installations pilotes et former un groupe de jeunes techniciens locaux.",
    future: "Étendre le modèle à des centres communautaires et développer un service local de maintenance."
  }
];

const categories = ["Toutes les catégories", "Technologie et innovation", "Agriculture", "Éducation", "Santé", "Environnement", "Entrepreneuriat", "Commerce et services"];
const state = { selectedCategory: categories[0], search: "", sort: "az", visibleCount: 6 };
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const formatNumber = (number) => new Intl.NumberFormat("fr-FR").format(number);
const projectById = (id) => projects.find((project) => project.id === id);
const projectPageUrl = (project) => `projet.html?projet=${encodeURIComponent(project.id)}`;

function iconForCategory(category) {
  const icons = {
    "Toutes les catégories": "✳", "Technologie et innovation": "⌘", Agriculture: "⌁", Éducation: "▤", Santé: "✚", Environnement: "♧", Entrepreneuriat: "↗", "Commerce et services": "◇"
  };
  return icons[category] || "✳";
}

function renderCategories() {
  $("#category-filters").innerHTML = categories.map((category) => `
    <button class="filter-button${state.selectedCategory === category ? " active" : ""}" type="button" data-category="${category}" aria-pressed="${state.selectedCategory === category}"><span aria-hidden="true">${iconForCategory(category)}</span> ${category}</button>`).join("");
}

function filteredProjects() {
  const query = state.search.trim().toLocaleLowerCase("fr");
  let results = projects.filter((project) => {
    const matchesCategory = state.selectedCategory === categories[0] || project.category === state.selectedCategory;
    const matchesQuery = !query || `${project.name} ${project.title} ${project.category} ${project.short}`.toLocaleLowerCase("fr").includes(query);
    return matchesCategory && matchesQuery;
  });
  if (state.sort === "az") results.sort((a, b) => a.title.localeCompare(b.title, "fr"));
  if (state.sort === "za") results.sort((a, b) => b.title.localeCompare(a.title, "fr"));
  if (state.sort === "category") results.sort((a, b) => a.category.localeCompare(b.category, "fr") || a.title.localeCompare(b.title, "fr"));
  return results;
}

function projectCard(project) {
  return `
    <article class="project-card">
      <a class="project-image" href="${projectPageUrl(project)}" aria-label="Découvrir le projet ${project.title}">
        <img src="${project.image}" alt="Aperçu du projet ${project.title}" style="object-position:${project.imagePosition || "center"}" loading="lazy">
        <span class="category-pill"><span aria-hidden="true">${iconForCategory(project.category)}</span>${project.category}</span>
      </a>
      <div class="project-card-body">
        <div class="candidate-line"><img src="${project.avatar}" alt="" style="object-position:${project.avatarPosition || "center"}" loading="lazy"><span>${project.name} <span aria-hidden="true">·</span> ${project.location}</span></div>
        <h3>${project.title}</h3><p>${project.short}</p>
        <div class="project-card-actions"><a class="detail-link" href="${projectPageUrl(project)}">Découvrir le projet <span aria-hidden="true">↗</span></a><button class="vote-button" type="button" data-vote-open="${project.id}">♡ Voter pour ce projet</button></div>
      </div>
    </article>`;
}

function renderProjects() {
  const results = filteredProjects();
  const visible = results.slice(0, state.visibleCount);
  $("#project-grid").innerHTML = visible.length ? visible.map(projectCard).join("") : `<div class="empty-state"><strong>Aucun projet trouvé pour le moment.</strong>Essayez un autre mot-clé ou une autre catégorie.</div>`;
  $("#results-label").textContent = `${results.length} projet${results.length > 1 ? "s" : ""} ${state.selectedCategory !== categories[0] ? `dans « ${state.selectedCategory} »` : "à découvrir"}`;
  $("#load-more").parentElement.hidden = results.length <= state.visibleCount;
  $("#project-count").textContent = String(projects.length).padStart(2, "0");
}

function renderProjectDetailPage() {
  const container = $("#project-detail-content");
  if (!container) return;

  const slug = new URLSearchParams(window.location.search).get("projet");
  const project = projectById(slug);
  if (!project) {
    document.title = "Projet introuvable — ÉLANOVA";
    container.innerHTML = `<section class="project-not-found"><span class="section-kicker">FICHE INTROUVABLE</span><h1>Ce projet n'existe pas.</h1><p>Retournez à la liste pour découvrir les projets participants.</p><a class="button button-dark" href="projets.html#votes">Voir les projets <span aria-hidden="true">↗</span></a></section>`;
    return;
  }

  document.title = `${project.title} — ÉLANOVA`;
  const projectStatusNotice = project.id === "mlab-best-soap" ? "" : `<div class="detail-demo-notice">Projet et description fictifs, créés pour cette maquette de présentation.</div>`;
  container.innerHTML = `
    <div class="project-detail-wrap">
      <a class="project-back" href="projets.html#votes"><span aria-hidden="true">←</span> Retour aux projets</a>
      <section class="project-detail-hero" aria-labelledby="project-page-title">
        <div class="project-detail-copy">
          <div class="section-kicker">PORTRAIT D'UN PROJET · ${project.location.toUpperCase()}</div>
          <span class="category-pill"><span aria-hidden="true">${iconForCategory(project.category)}</span>${project.category}</span>
          <h1 id="project-page-title">${project.title}</h1>
          <div class="project-detail-person"><img src="${project.avatar}" alt="" style="object-position:${project.avatarPosition || "center"}"><span><strong>${project.name}</strong><small>Porteur du projet</small></span></div>
          <p class="project-detail-summary">${project.short}</p>
          <div class="project-detail-actions"><button class="button button-coral vote-button" type="button" data-vote-open="${project.id}">♡ Déposer pour voter</button><span>Minimum 100 FCFA · SoleasPay</span></div>
        </div>
        <figure class="project-detail-photo"><img src="${project.image}" alt="Portrait de ${project.name}, porteur du projet ${project.title}" style="object-position:${project.imagePosition || "center"}"><figcaption><span>${project.name}</span><span>${project.location}</span></figcaption></figure>
      </section>

      <div class="project-detail-layout">
        <div class="project-detail-main">
          ${projectStatusNotice}
          <section class="detail-section"><div class="section-kicker">L'INITIATIVE</div><h2>Une idée, une ambition.</h2><p>${project.long}</p></section>
          ${project.gallery ? `<figure class="project-detail-gallery"><img src="${project.gallery}" alt="Photo de motivation du promoteur de M.LAB"><figcaption><span>La devise du promoteur</span><blockquote>« ${project.motto} »</blockquote></figcaption></figure>` : ""}
          <section class="detail-section"><div class="detail-section-label"><span>01</span><h2>Le problème</h2></div><p>${project.problem}</p></section>
          <section class="detail-section"><div class="detail-section-label"><span>02</span><h2>La solution proposée</h2></div><p>${project.solution}</p></section>
          <section class="detail-section"><div class="detail-section-label"><span>03</span><h2>Les objectifs</h2></div><p>${project.goals}</p></section>
          <section class="detail-section"><div class="detail-section-label"><span>04</span><h2>La vision</h2></div><p>${project.future}</p></section>
        </div>
        <aside class="project-detail-sidebar" aria-label="Soutenir le projet">
          <div class="payment-card" id="soutenir"><span class="payment-icon" aria-hidden="true">＋</span><div class="section-kicker">CONTRIBUTION AU VOTE</div><h2>Soutenir ce projet</h2><p>Choisissez le montant de votre contribution. Le minimum est de 100 FCFA, sans plafond.</p><div class="payment-method-inline"><strong>SoleasPay</strong><span>Mode de paiement</span></div><button class="payment-button" type="button" data-vote-open="${project.id}">Déposer pour voter <span aria-hidden="true">↗</span></button><small class="payment-disabled-note">Paiement en attente de connexion de l'API.</small></div>
          <a class="sidebar-back-link" href="projets.html#votes">← Découvrir les autres projets</a>
        </aside>
      </div>
    </div>`;
}

function openVoteModal(id) {
  const project = projectById(id);
  const dialog = $("#vote-modal");
  if (!project || !dialog) return;
  $("#vote-modal-title", dialog).textContent = `Voter pour ${project.title}`;
  $("#vote-project-name", dialog).textContent = `Votre contribution soutiendra « ${project.title} ».`;
  $("#vote-project-id", dialog).value = project.id;
  $("#vote-amount", dialog).value = "";
  $("#payment-status", dialog).textContent = "";
  if (!dialog.open) dialog.showModal();
  $("#vote-amount", dialog).focus();
}

function setupVoteModal() {
  const dialog = $("#vote-modal");
  const form = $("#vote-form");
  if (!dialog || !form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = $("#vote-amount", form);
    if (!amount.reportValidity()) return;
    const project = projectById($("#vote-project-id", form).value);
    const formattedAmount = formatNumber(amount.valueAsNumber);
    $("#payment-status", form).textContent = `Votre montant de ${formattedAmount} FCFA est prêt. SoleasPay n'est pas encore connecté : aucun paiement ni vote n'a été effectué.`;
    if (project) $("#vote-project-name", form).textContent = `Projet choisi : ${project.title}. Le paiement sera activé après connexion de l'API SoleasPay.`;
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function setupNavigation() {
  const toggle = $(".menu-toggle");
  const nav = $("#primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.setAttribute("aria-label", expanded ? "Ouvrir le menu" : "Fermer le menu");
      nav.classList.toggle("open", !expanded);
    });
    nav.addEventListener("click", (event) => {
      if (!event.target.closest("a")) return;
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Ouvrir le menu");
    });
  }
  document.addEventListener("click", (event) => {
    const voteButton = event.target.closest("[data-vote-open]");
    if (voteButton) {
      openVoteModal(voteButton.dataset.voteOpen);
      return;
    }
    if (event.target.closest("[data-modal-close]")) $("#vote-modal")?.close();
  });
}

function setupFilters() {
  $("#category-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.selectedCategory = button.dataset.category;
    state.visibleCount = 6;
    renderCategories();
    renderProjects();
  });
  $("#project-search").addEventListener("input", (event) => {
    state.search = event.target.value;
    state.visibleCount = 6;
    renderProjects();
  });
  $("#project-sort").addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProjects();
  });
  $("#load-more").addEventListener("click", () => {
    state.visibleCount += 3;
    renderProjects();
  });
}

function init() {
  setupNavigation();
  setupVoteModal();
  if ($("#project-detail-page")) {
    renderProjectDetailPage();
  } else {
    if ($("#category-filters")) renderCategories();
    if ($("#project-grid")) {
      renderProjects();
      setupFilters();
    }
  }
}

init();
