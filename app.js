// Données entièrement fictives : cette maquette n'envoie et n'enregistre aucun vote.
const projects = [
  {
    id: "terre-vivante", name: "Aïcha Mballa", initials: "AM", title: "Terre Vivante", category: "Agriculture", votes: 4310,
    short: "Des jardins nourriciers qui rapprochent les villes de ceux qui les nourrissent.",
    location: "Douala, Cameroun", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=240&h=240&q=82",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=82",
    long: "Terre Vivante accompagne de jeunes agriculteurs dans la création de parcelles maraîchères au cœur des quartiers. Le projet met en relation les producteurs et les familles pour faire pousser une alimentation fraîche, locale et accessible.",
    problem: "Les quartiers urbains dépendent de circuits alimentaires longs, tandis que de jeunes agriculteurs peinent à accéder à des terres et à des débouchés stables.",
    solution: "Des micro-fermes de proximité, un accompagnement aux pratiques agroécologiques et des partenariats directs avec les habitants et les commerces.",
    goals: "Créer trois jardins pilotes, former 25 jeunes aux pratiques durables et approvisionner les premiers marchés de quartier.",
    future: "Un réseau de fermes urbaines réplicable dans d'autres villes, avec une offre de paniers et d'ateliers pour les écoles."
  },
  {
    id: "classe-ouverte", name: "Samuel Nguema", initials: "SN", title: "Classe Ouverte", category: "Éducation", votes: 3290,
    short: "Une bibliothèque mobile pour faire voyager les histoires jusque dans les villages.",
    location: "Bafoussam, Cameroun", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&h=240&q=82",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=82",
    long: "Classe Ouverte transforme un véhicule en bibliothèque itinérante, pensée avec les enseignants et les familles. Chaque étape propose des livres, des lectures à voix haute et des ateliers créatifs adaptés aux enfants.",
    problem: "Dans de nombreuses localités, les écoles et les familles ont peu accès aux livres jeunesse et aux activités de lecture en dehors de la classe.",
    solution: "Une bibliothèque mobile en langues locales et en français, avec un calendrier de visites co-organisé avec les écoles.",
    goals: "Mettre en circulation 1 500 livres, visiter 12 écoles et former des relais de lecture dans les communautés partenaires.",
    future: "Équiper un deuxième véhicule et créer un petit programme d'édition de contes écrits par les enfants."
  },
  {
    id: "sante-poche", name: "Mireille Ebanda", initials: "ME", title: "Santé de Poche", category: "Santé", votes: 2860,
    short: "Des rendez-vous de prévention au plus près des communautés rurales.",
    location: "Kribi, Cameroun", avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=240&h=240&q=82",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=82",
    long: "Santé de Poche déploie des journées de prévention avec des professionnels de santé et des associations locales. L'équipe propose des bilans de première intention, des échanges pratiques et une orientation vers les structures adaptées.",
    problem: "Les longues distances et le manque d'information rendent les gestes de prévention difficiles d'accès pour plusieurs communautés.",
    solution: "Des rendez-vous mobiles réguliers, préparés avec les relais locaux et accompagnés d'informations simples et fiables.",
    goals: "Organiser 20 journées de prévention et faciliter l'orientation des personnes vers les services de santé partenaires.",
    future: "Développer une tournée itinérante et des supports de prévention adaptés aux réalités de chaque communauté."
  },
  {
    id: "rebois", name: "David Tchana", initials: "DT", title: "Rebois", category: "Environnement", votes: 2290,
    short: "Du bois récupéré, du mobilier réinventé et des emplois créés localement.",
    location: "Yaoundé, Cameroun", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&h=240&q=82",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=82",
    long: "Rebois collecte des chutes de bois et des meubles délaissés pour leur donner une nouvelle vie dans un atelier de quartier. Le projet forme de jeunes artisans à la fabrication, à la réparation et au réemploi.",
    problem: "Les matériaux réutilisables sont jetés alors que les ateliers manquent de ressources et que des jeunes cherchent à se former à un métier.",
    solution: "Un atelier partagé équipé pour le tri, la transformation du bois et l'apprentissage de techniques artisanales.",
    goals: "Réemployer 5 tonnes de bois la première année et accompagner 15 jeunes dans un parcours de formation.",
    future: "Ouvrir un espace de vente et créer des partenariats avec les chantiers et les menuisiers de la région."
  },
  {
    id: "kmer-tech", name: "Cédric Fotso", initials: "CF", title: "Kmer Tech", category: "Technologie et innovation", votes: 1840,
    short: "Des outils numériques simples pour aider les petites entreprises à grandir.",
    location: "Douala, Cameroun", avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=240&h=240&q=82",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=82",
    long: "Kmer Tech conçoit des outils numériques légers pour aider les très petites entreprises à suivre leurs commandes, présenter leur activité et mieux s'organiser au quotidien.",
    problem: "Les petites structures ont rarement accès à des outils numériques abordables qui correspondent à leurs habitudes et à leurs moyens.",
    solution: "Une suite d'outils en français simple, utilisable sur téléphone et conçue avec les commerçants locaux.",
    goals: "Tester les premiers outils auprès de 50 petites entreprises et proposer des ateliers de prise en main gratuits.",
    future: "Ajouter de nouveaux outils de gestion et ouvrir le service à d'autres villes et secteurs d'activité."
  },
  {
    id: "saveurs-mama", name: "Priscille Mvondo", initials: "PM", title: "Les Saveurs de Mama", category: "Entrepreneuriat", votes: 1510,
    short: "Les recettes du terroir racontées, partagées et mises à l'honneur.",
    location: "Bertoua, Cameroun", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=82",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=82",
    long: "Les Saveurs de Mama valorise les produits et les recettes familiales à travers des ateliers culinaires et une gamme de condiments préparés en petites séries avec des productrices locales.",
    problem: "Les savoir-faire culinaires se transmettent de moins en moins et les productrices peinent à trouver de nouveaux débouchés.",
    solution: "Des ateliers ouverts, des recettes documentées et une petite gamme artisanale produite en partenariat avec les femmes du territoire.",
    goals: "Accompagner 10 productrices, lancer trois ateliers et tester la vente de produits sur les marchés locaux.",
    future: "Faire grandir la gamme, accueillir des visiteurs et partager les recettes avec de nouvelles générations."
  },
  {
    id: "atelier-ndolo", name: "Estelle Ndom", initials: "EN", title: "Atelier Ndolo", category: "Commerce et services", votes: 1220,
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
    id: "solaire-ensemble", name: "Armand Fongang", initials: "AF", title: "Solaire Ensemble", category: "Environnement", votes: 930,
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
const state = { selectedCategory: categories[0], search: "", sort: "popular", visibleCount: 6, voted: new Set(), toastTimer: null };
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const formatNumber = (number) => new Intl.NumberFormat("fr-FR").format(number);
const totalVotes = () => projects.reduce((sum, project) => sum + project.votes, 0);
const projectById = (id) => projects.find((project) => project.id === id);

function iconForCategory(category) {
  const icons = {
    "Toutes les catégories": "✳", "Technologie et innovation": "⌘", Agriculture: "⌁", Éducation: "▤", Santé: "✚", Environnement: "♧", Entrepreneuriat: "↗", "Commerce et services": "◇"
  };
  return icons[category] || "✳";
}

function renderFeatured() {
  const container = $("#featured-grid");
  container.innerHTML = projects.slice(0, 3).map((project) => `
    <article class="featured-card">
      <a class="featured-image" href="#votes" data-details="${project.id}" aria-label="Découvrir le projet ${project.title}">
        <img src="${project.image}" alt="Illustration du projet ${project.title}" loading="lazy">
        <span class="category-pill"><span aria-hidden="true">${iconForCategory(project.category)}</span>${project.category}</span>
      </a>
      <div class="featured-body">
        <div class="candidate-line"><img src="${project.avatar}" alt="" loading="lazy"><span>Porté par <strong>${project.name}</strong></span></div>
        <h3>${project.title}</h3><p>${project.short}</p>
        <div class="featured-bottom"><span class="vote-metric"><span aria-hidden="true">♡</span>${formatNumber(project.votes)} votes</span><a class="card-link" href="#votes" data-details="${project.id}">Voir le projet <span aria-hidden="true">↗</span></a></div>
      </div>
    </article>`).join("");
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
  if (state.sort === "popular") results.sort((a, b) => b.votes - a.votes);
  if (state.sort === "votes-asc") results.sort((a, b) => a.votes - b.votes);
  if (state.sort === "recent") results.sort((a, b) => a.title.localeCompare(b.title, "fr"));
  return results;
}

function projectCard(project) {
  const hasVoted = state.voted.has(project.id);
  return `
    <article class="project-card">
      <a class="project-image" href="#votes" data-details="${project.id}" aria-label="Découvrir le projet ${project.title}">
        <img src="${project.image}" alt="Aperçu du projet ${project.title}" loading="lazy">
        <span class="category-pill"><span aria-hidden="true">${iconForCategory(project.category)}</span>${project.category}</span>
      </a>
      <div class="project-card-body">
        <div class="candidate-line"><img src="${project.avatar}" alt="" loading="lazy"><span>${project.name} <span aria-hidden="true">·</span> ${project.location}</span></div>
        <h3>${project.title}</h3><p>${project.short}</p>
        <div class="project-card-footer"><span class="vote-metric"><span aria-hidden="true">♡</span>${formatNumber(project.votes)} votes</span><span class="vote-metric">Projet sélectionné ✳</span></div>
        <div class="project-card-actions"><button type="button" data-details="${project.id}">Découvrir le projet <span aria-hidden="true">↗</span></button><button class="vote-button" type="button" data-vote="${project.id}" ${hasVoted ? "disabled" : ""}>${hasVoted ? "✓ Vote enregistré" : "♡ Voter pour ce projet"}</button></div>
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
  $("#vote-count").textContent = formatNumber(totalVotes());
}

function renderRanking() {
  const ranked = [...projects].sort((a, b) => b.votes - a.votes);
  $("#ranking-podium").innerHTML = ranked.slice(0, 3).map((project, index) => `
    <article class="podium-card${index === 0 ? " is-first" : ""}">
      ${index === 0 ? '<span class="podium-crown" aria-hidden="true">✳</span>' : ""}
      <div class="podium-number"><span>0${index + 1} / EN TÊTE</span><strong>${index === 0 ? "#01" : `#0${index + 1}`}</strong></div>
      <div class="podium-person"><img src="${project.avatar}" alt="" loading="lazy"><span><strong>${project.name}</strong><small>${project.category}</small></span></div>
      <h3>${project.title}</h3><p>${project.short}</p>
      <div class="podium-votes">${formatNumber(project.votes)} <span>votes de la communauté</span></div>
    </article>`).join("");
  $("#ranking-rest").innerHTML = ranked.slice(3).map((project, index) => `
    <div class="ranking-row"><span class="ranking-rank">0${index + 4}</span><span class="ranking-name"><img src="${project.avatar}" alt="" loading="lazy">${project.name}</span><span class="ranking-project">${project.title}</span><span class="ranking-row-votes">${formatNumber(project.votes)} votes</span></div>`).join("");
}

function openProject(id) {
  const project = projectById(id);
  if (!project) return;
  const hasVoted = state.voted.has(id);
  $("#dialog-content").innerHTML = `
    <button class="dialog-close" type="button" aria-label="Fermer la fiche projet">×</button>
    <div class="dialog-hero"><img src="${project.image}" alt="Illustration du projet ${project.title}"><div class="dialog-person"><img src="${project.avatar}" alt=""><span><strong>${project.name}</strong><small>${project.location}</small></span></div></div>
    <div class="dialog-body"><span class="category-pill"><span aria-hidden="true">${iconForCategory(project.category)}</span>${project.category}</span><h2 id="dialog-title">${project.title}</h2><p class="dialog-lede">${project.long}</p>
      <div class="dialog-details"><section class="dialog-detail"><h3>Le problème</h3><p>${project.problem}</p></section><section class="dialog-detail"><h3>La solution</h3><p>${project.solution}</p></section><section class="dialog-detail"><h3>Les objectifs</h3><p>${project.goals}</p></section><section class="dialog-detail"><h3>Et après&nbsp;?</h3><p>${project.future}</p></section></div>
      <div class="dialog-actions"><span>♡ ${formatNumber(project.votes)} votes fictifs · ${project.category}</span><button class="button button-coral vote-button" type="button" data-vote="${project.id}" ${hasVoted ? "disabled" : ""}>${hasVoted ? "✓ Vote enregistré" : "Soutenir ce projet · Voter"}</button></div>
    </div>`;
  const dialog = $("#project-dialog");
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("dialog-open");
  $(".dialog-close", dialog).focus();
}

function closeProject() {
  const dialog = $("#project-dialog");
  if (dialog.open) dialog.close();
  document.body.classList.remove("dialog-open");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 3600);
}

function castDemoVote(id) {
  const project = projectById(id);
  if (!project || state.voted.has(id)) return;
  state.voted.add(id);
  project.votes += 1;
  renderProjects();
  renderRanking();
  renderFeatured();
  if ($("#project-dialog").open) openProject(id);
  showToast(`Votre soutien à « ${project.title} » est simulé. Aucun vote n'a été enregistré.`);
}

function setupNavigation() {
  const toggle = $(".menu-toggle");
  const nav = $("#primary-nav");
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
  document.addEventListener("click", (event) => {
    const detailLink = event.target.closest("[data-details]");
    if (detailLink) {
      event.preventDefault();
      openProject(detailLink.dataset.details);
      return;
    }
    const voteButton = event.target.closest("[data-vote]");
    if (voteButton) {
      event.preventDefault();
      castDemoVote(voteButton.dataset.vote);
      return;
    }
    if (event.target.closest(".dialog-close")) closeProject();
  });
  const dialog = $("#project-dialog");
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
  dialog.addEventListener("click", (event) => { if (event.target === dialog) closeProject(); });
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
  renderFeatured();
  renderCategories();
  renderProjects();
  renderRanking();
  setupNavigation();
  setupFilters();
}

init();
