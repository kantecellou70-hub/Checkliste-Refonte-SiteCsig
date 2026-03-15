'use strict';

const STORAGE_KEY = 'csig-checklist-v2';

// ── DATA PAR DEFAUT ───────────────────────────────────────────────────────────
const defaultData = [
  {
    id: 's1', title: '1. Page d\'accueil', collapsed: false,
    items: [
      { id: 'i1_1',  text: 'Header : Adapter le design au wireframe initial', checked: true },
      { id: 'i1_2',  text: 'Header : Réduire la taille de la barre de recherche', checked: true },
      { id: 'i1_3',  text: 'Header : Corriger les icônes du bouton profil pour qu\'elles soient conformes', checked: true },
      { id: 'i1_4',  text: 'Contenus : Harmoniser la hauteur des rev-slides et réduire leur taille', checked: true },
      { id: 'i1_5',  text: 'Contenus : Respecter la charte graphique (dominante jaune et dégradés non conformes)', checked: true },
      { id: 'i1_6',  text: 'Contenus : Supprimer les boutons inutiles (ex. « Lire la suite »)', checked: true },
      { id: 'i1_7',  text: 'Contenus : Mettre les images en avant-plan et les rendre cliquables', checked: true },
      { id: 'i1_8',  text: 'Contenus : Ajouter les statistiques manquantes sur la page d\'accueil', checked: true },
      { id: 'i1_9',  text: 'Contenus : Réduire la barre « Nos partenaires » et la rendre dynamique (logos défilants)', checked: true },
      { id: 'i1_10', text: 'Contenus : Supprimer les sections non nécessaires (Nos Valeurs, Notre Équipe, Chiffres clés et Réalisations)', checked: true },
      { id: 'i1_11', text: 'Footer : Réduire la taille du footer et de la barre Newsletter', checked: true },
      { id: 'i1_12', text: 'Footer : Revoir le texte et inverser les boutons « S\'inscrire » / « Se désinscrire »', checked: true },
      { id: 'i1_13', text: 'Footer : Adapter le bouton « Retour en haut »', checked: true },
    ]
  },
  {
    id: 's2', title: '2. Page "La Cité – Présentation"', collapsed: false,
    items: [
      { id: 'i2_1', text: 'Réduire la taille du rev-slide et l\'adapter', checked: true },
      { id: 'i2_2', text: 'Revoir la disposition des blocs (éviter 1/2 – 1/2 si non ergonomique)', checked: true },
      { id: 'i2_3', text: 'Ajouter les éléments manquants : « Missions et Objectifs », « Vision et Valeurs », « Nos Partenaires »', checked: true },
      { id: 'i2_4', text: 'Représenter les 8 quartiers de la CSIG correctement', checked: true },
      { id: 'i2_5', text: 'Corriger les couleurs et dégradés pour respecter la charte', checked: true },
      { id: 'i2_6', text: 'Adapter le footer', checked: true },
      { id: 'i2_7', text: 'Vision et valeurs', checked: true },
    ]
  },
  {
    id: 's3', title: '3. Page "La Cité – L\'Équipe"', collapsed: false,
    items: [
      { id: 'i3_1', text: 'Corriger le lien de redirection de l\'onglet Équipe', checked: true },
      { id: 'i3_2', text: 'Ajuster la taille des rev-slides et harmoniser les couleurs secondaires', checked: true },
      { id: 'i3_3', text: 'Adapter le footer', checked: true },
    ]
  },
  {
    id: 's4', title: '4.1 Pages Programme', collapsed: false,
    items: [
      { id: 'i4_1', text: 'Supprimer le filtre inutile', checked: true },
      { id: 'i4_2', text: 'Réduire la barre « Commencez votre voyage scientifique » et corriger ses couleurs', checked: true },
      { id: 'i4_3', text: 'Adapter le footer', checked: true },
      { id: 'i4_4', text: 'Corriger le contenu des programmes (actuellement non lié à la formation)', checked: true },
      { id: 'i4_5', text: 'Ajouter les fiches des programmes en mode lecture', checked: true },
    ]
  },
  {
    id: 's5', title: '4.2 Page Projet', collapsed: false,
    items: [
      { id: 'i5_1', text: 'Réduire la slide-bar', checked: true },
      { id: 'i5_2', text: 'Revoir le contenu du filtre', checked: true },
      { id: 'i5_3', text: 'Harmoniser couleurs et footer', checked: true },
    ]
  },
  {
    id: 's6', title: '5. Page Actualité', collapsed: false,
    items: [
      { id: 'i6_1', text: 'Compléter le cadran des statistiques', checked: true },
      { id: 'i6_2', text: 'Revoir la présentation des articles à la une (barre horizontale au-dessus des autres articles)', checked: true },
      { id: 'i6_3', text: 'Ajouter un cadre « Articles similaires » dans la page des articles', checked: true },
    ]
  },
  {
    id: 's7', title: '6. Page Événement', collapsed: false,
    items: [
      { id: 'i7_1', text: 'Réduire et alléger le rev-slide', checked: true },
      { id: 'i7_2', text: 'Revoir la hiérarchie des blocs et leur taille', checked: true },
      { id: 'i7_3', text: 'Ajouter des séparations visuelles pour plus de lisibilité', checked: true },
      { id: 'i7_4', text: 'Ajouter un bouton d\'inscription aux événements', checked: false },
      { id: 'i7_5', text: 'Ajouter un mode d\'inscription gratuit et payant selon l\'événement (validation et génération des cartes d\'accès avec QR code)', checked: false },
      { id: 'i7_6', text: 'Ajouter un template de diffusion en ligne pour les différents événements afin de permettre aux gens de suivre en live', checked: false },
    ]
  },
  {
    id: 's8', title: '7. Page Contact', collapsed: false,
    items: [
      { id: 'i8_1', text: 'Supprimer la barre « Prêt à commencer votre voyage scientifique »', checked: true },
      { id: 'i8_2', text: 'Remplacer la FAQ par un chatbot interactif', checked: true },
    ]
  },
  {
    id: 's9', title: 'Pages Extraits & Pages retravaillées', collapsed: false,
    items: [
      { id: 'i9_1', text: 'Conditions d\'utilisation', checked: true },
      { id: 'i9_2', text: 'Accessibilité (CSS du footer endommagé)', checked: true },
      { id: 'i9_3', text: 'Politique de confidentialité', checked: true },
      { id: 'i9_4', text: 'Mentions légales', checked: true },
      { id: 'i9_5', text: 'Plan du site', checked: true },
      { id: 'i9_6', text: 'Recherche', checked: true },
      { id: 'i9_7', text: 'Innovation', checked: true },
      { id: 'i9_8', text: 'Formation', checked: true },
    ]
  },
  {
    id: 's10', title: 'Backend', collapsed: false,
    items: [
      { id: 'i10_1',  text: 'Ajouter la gestion de la page Accueil', checked: false },
      { id: 'i10_2',  text: 'Améliorer la gestion de la page Présentation en détails', checked: false },
      { id: 'i10_3',  text: 'Ajouter la gestion de la page Équipe (Hero et CTA)', checked: false },
      { id: 'i10_4',  text: 'Faire fonctionner correctement la gestion de la newsletter du site dans le CMS', checked: true },
      { id: 'i10_5',  text: 'Faire fonctionner correctement la messagerie de la page Contact dans le CMS', checked: true },
      { id: 'i10_6',  text: 'Corrections de bugs existants dans les fonctionnalités du CMS', checked: true },
      { id: 'i10_7',  text: 'Les modifications dans Paramètres ne s\'appliquent pas dans Contacts', checked: false },
      { id: 'i10_8',  text: 'Ajouter la gestion de la page Programme (Hero et CTA)', checked: false },
      { id: 'i10_9',  text: 'Ajouter la gestion de la page Projet (Hero et CTA)', checked: false },
      { id: 'i10_10', text: 'Ajouter la gestion de la page Actualité (Hero et CTA)', checked: false },
      { id: 'i10_11', text: 'Ajouter la gestion de la page Événements (Hero et CTA)', checked: false },
      { id: 'i10_12', text: 'Ajouter la gestion de la page Contact (Hero et CTA)', checked: false },
      { id: 'i10_13', text: 'Gérer les éléments de « Salles & Espaces » du CMS', checked: false },
    ]
  },
  {
    id: 's11', title: 'Finitions', collapsed: false,
    items: [
      { id: 'i11_1', text: 'Gestion du menu dans la responsive (Téléphone)', checked: true },
      { id: 'i11_2', text: 'Faire disparaître le message « Cliquez sur les blocs ou faites glisser pour feuilleter » sur téléphone', checked: true },
      { id: 'i11_3', text: 'Réduire l\'espace entre la section bibliothèque et le filtre de la page Actualité', checked: true },
      { id: 'i11_4', text: 'Afficher les détails de l\'article à la une du Slide 2 du Hero de la page Accueil', checked: true },
      { id: 'i11_5', text: 'Gestion du chatbot de la page Contact dans la responsive (Téléphone)', checked: true },
      { id: 'i11_6', text: 'Gestion des pages du pied de page', checked: false },
      { id: 'i11_7', text: 'Update du QCM du chatbot de la page Contact', checked: false },
    ]
  },
];

// ── PERSISTANCE ───────────────────────────────────────────────────────────────
let data;

function loadData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(defaultData));
  } catch {
    return JSON.parse(JSON.stringify(defaultData));
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ── UTILITAIRES ───────────────────────────────────────────────────────────────
function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function pct(items) {
  if (!items.length) return 0;
  return Math.round(items.filter(i => i.checked).length / items.length * 100);
}

function globalPct() {
  const all = data.flatMap(s => s.items);
  if (!all.length) return 0;
  return Math.round(all.filter(i => i.checked).length / all.length * 100);
}

// ── RENDU ─────────────────────────────────────────────────────────────────────
function render() {
  renderSections();
  renderGlobalProgress();
}

function renderGlobalProgress() {
  const p = globalPct();
  const all = data.flatMap(s => s.items);
  const done = all.filter(i => i.checked).length;
  document.getElementById('global-progress-fill').style.width = p + '%';
  document.getElementById('global-progress-value').textContent = p + '%';
  document.getElementById('global-stats').textContent = `${done} / ${all.length} tâches`;
}

function renderSections() {
  const container = document.getElementById('sections-container');
  container.innerHTML = '';
  data.forEach(section => container.appendChild(buildSectionEl(section)));
}

function buildSectionEl(section) {
  const p = pct(section.items);
  const done = p === 100 && section.items.length > 0;
  const collapsed = section.collapsed;

  const card = document.createElement('div');
  card.className = 'section-card';
  card.dataset.sid = section.id;

  card.innerHTML = `
    <div class="section-header">
      <span class="section-toggle${collapsed ? ' is-collapsed' : ''}">&#9660;</span>
      <span class="section-title-text">
        ${esc(section.title)}
        ${done ? '<span class="badge-done">&#10003; Terminé</span>' : ''}
      </span>
      <div class="section-progress-mini">
        <div class="mini-track"><div class="mini-fill" style="width:${p}%"></div></div>
        <span class="mini-percent">${p}%</span>
      </div>
      <div class="section-actions">
        <button class="btn-icon" data-action="edit-section" title="Renommer la section">&#9998;</button>
        <button class="btn-icon danger" data-action="delete-section" title="Supprimer la section">&#10005;</button>
      </div>
    </div>
    <div class="section-body${collapsed ? ' is-collapsed' : ''}">
      <div class="task-list">
        ${section.items.map(buildTaskHTML).join('')}
      </div>
      <div class="add-task-row">
        <button class="btn-add-task" data-action="add-task">+ Ajouter une tâche</button>
      </div>
    </div>
  `;
  return card;
}

function buildTaskHTML(item) {
  return `
    <div class="task-item" data-tid="${item.id}">
      <input type="checkbox" class="task-checkbox" data-action="toggle" ${item.checked ? 'checked' : ''}>
      <span class="task-text${item.checked ? ' is-checked' : ''}">${esc(item.text)}</span>
      <div class="task-item-actions">
        <button class="btn-icon" data-action="edit-task" title="Modifier">&#9998;</button>
        <button class="btn-icon danger" data-action="delete-task" title="Supprimer">&#10005;</button>
      </div>
    </div>
  `;
}

// ── HELPERS CONTEXTE ──────────────────────────────────────────────────────────
function getSid(el) { return el.closest('[data-sid]').dataset.sid; }
function getTid(el) { return el.closest('[data-tid]').dataset.tid; }
function getSection(sid) { return data.find(s => s.id === sid); }
function getTask(sid, tid) { return getSection(sid).items.find(i => i.id === tid); }

// ── MISE A JOUR PARTIELLE (sans re-render complet) ────────────────────────────
function refreshSectionProgress(card, section) {
  const p = pct(section.items);
  card.querySelector('.mini-fill').style.width = p + '%';
  card.querySelector('.mini-percent').textContent = p + '%';
  const titleEl = card.querySelector('.section-title-text');
  const existing = titleEl.querySelector('.badge-done');
  const done = p === 100 && section.items.length > 0;
  if (done && !existing) {
    titleEl.insertAdjacentHTML('beforeend', '<span class="badge-done">&#10003; Terminé</span>');
  } else if (!done && existing) {
    existing.remove();
  }
}

// ── DELEGATION D'EVENEMENTS ───────────────────────────────────────────────────
const container = document.getElementById('sections-container');

container.addEventListener('change', e => {
  if (e.target.dataset.action !== 'toggle') return;
  const sid = getSid(e.target);
  const tid = getTid(e.target);
  const task = getTask(sid, tid);
  task.checked = e.target.checked;
  saveData();
  // Mise à jour visuelle partielle
  e.target.closest('.task-item').querySelector('.task-text').classList.toggle('is-checked', task.checked);
  refreshSectionProgress(e.target.closest('.section-card'), getSection(sid));
  renderGlobalProgress();
});

container.addEventListener('click', e => {
  const actionEl = e.target.closest('[data-action]');
  const action = actionEl?.dataset.action;
  if (!action) {
    // Clic sur l'en-tête pour collapse
    const header = e.target.closest('.section-header');
    if (header && !e.target.closest('.section-actions') && !e.target.closest('.section-progress-mini')) {
      toggleCollapse(getSid(header), header);
    }
    return;
  }
  const sid = getSid(actionEl);
  switch (action) {
    case 'edit-section':  editSection(sid);                         break;
    case 'delete-section': deleteSection(sid);                      break;
    case 'add-task':       addTask(sid);                            break;
    case 'edit-task':      editTask(sid, getTid(actionEl));         break;
    case 'delete-task':    deleteTask(sid, getTid(actionEl));       break;
  }
});

// ── COLLAPSE ──────────────────────────────────────────────────────────────────
function toggleCollapse(sid, header) {
  const section = getSection(sid);
  section.collapsed = !section.collapsed;
  saveData();
  header.querySelector('.section-toggle').classList.toggle('is-collapsed', section.collapsed);
  header.nextElementSibling.classList.toggle('is-collapsed', section.collapsed);
}

// ── SECTIONS ─────────────────────────────────────────────────────────────────
function editSection(sid) {
  const section = getSection(sid);
  showModal('Renommer la section', section.title, newTitle => {
    if (!newTitle.trim()) return;
    section.title = newTitle.trim();
    saveData();
    render();
  });
}

function deleteSection(sid) {
  const section = getSection(sid);
  showConfirm(
    `Supprimer "${section.title}" ?`,
    `Cette section et ses ${section.items.length} tâche(s) seront supprimées définitivement.`,
    () => {
      data = data.filter(s => s.id !== sid);
      saveData();
      render();
    }
  );
}

// ── TÂCHES ────────────────────────────────────────────────────────────────────
function addTask(sid) {
  showModal('Nouvelle tâche', '', text => {
    if (!text.trim()) return;
    getSection(sid).items.push({ id: genId(), text: text.trim(), checked: false });
    saveData();
    render();
  });
}

function editTask(sid, tid) {
  const task = getTask(sid, tid);
  showModal('Modifier la tâche', task.text, newText => {
    if (!newText.trim()) return;
    task.text = newText.trim();
    saveData();
    render();
  });
}

function deleteTask(sid, tid) {
  const section = getSection(sid);
  section.items = section.items.filter(i => i.id !== tid);
  saveData();
  render();
}

// ── AJOUTER UNE SECTION ───────────────────────────────────────────────────────
document.getElementById('btn-add-section').addEventListener('click', () => {
  showModal('Nouvelle section', '', title => {
    if (!title.trim()) return;
    data.push({ id: genId(), title: title.trim(), collapsed: false, items: [] });
    saveData();
    render();
  });
});

// ── MODAL ─────────────────────────────────────────────────────────────────────
let modalCb = null;

function showModal(title, value, cb) {
  modalCb = cb;
  document.getElementById('modal-title').textContent = title;
  const input = document.getElementById('modal-input');
  input.value = value;
  document.getElementById('modal-overlay').classList.remove('hidden');
  setTimeout(() => { input.focus(); input.select(); }, 40);
}

function hideModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  modalCb = null;
}

function confirmModal() {
  if (modalCb) modalCb(document.getElementById('modal-input').value);
  hideModal();
}

document.getElementById('modal-confirm').addEventListener('click', confirmModal);
document.getElementById('modal-cancel').addEventListener('click', hideModal);
document.getElementById('modal-close').addEventListener('click', hideModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) hideModal();
});
document.getElementById('modal-input').addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); confirmModal(); }
  if (e.key === 'Escape') hideModal();
});

// ── CONFIRM DIALOG ────────────────────────────────────────────────────────────
let confirmCb = null;

function showConfirm(title, message, cb) {
  confirmCb = cb;
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-message').textContent = message;
  document.getElementById('confirm-overlay').classList.remove('hidden');
}

function hideConfirm() {
  document.getElementById('confirm-overlay').classList.add('hidden');
  confirmCb = null;
}

document.getElementById('confirm-ok').addEventListener('click', () => {
  if (confirmCb) confirmCb();
  hideConfirm();
});
document.getElementById('confirm-cancel').addEventListener('click', hideConfirm);
document.getElementById('confirm-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('confirm-overlay')) hideConfirm();
});

// ── INIT ──────────────────────────────────────────────────────────────────────
data = loadData();
render();
