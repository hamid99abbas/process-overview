/* ============================================================
   MERIDIAN CONSTRUCTION — Delivery Index JS
   ============================================================ */
(function () {
  'use strict';

  /* ── Department config ── */
  const DEPTS = [
    {
      id: 'Design',
      code: 'DWG',
      num: '01',
      name: 'Design',
      desc: 'Pre-construction document delivery — from development strategy and feasibility through to technical design ready for construction.',
    },
    {
      id: 'Commercial',
      code: 'COM',
      num: '02',
      name: 'Commercial',
      desc: 'The commercial spine that holds the price — tender baseline, contract, cost control, procurement and governance from day one.',
    },
    {
      id: 'Construction',
      code: 'CON',
      num: '03',
      name: 'Construction',
      desc: 'Site execution, inspection and handover — the records that evidence how the build was actually delivered and signed off.',
    },
  ];

  const STAGE_LABELS = {
    'Stage 1': 'Stage 1 — Bid & Tender',
    'Stage 2': 'Stage 2 — Contract Award',
    'Stage 3': 'Stage 3 — Pre-Construction',
  };

  /* ── DOM ── */
  const homeView  = document.getElementById('homeView');
  const regView   = document.getElementById('regView');
  const cardsEl   = document.getElementById('cards');
  const backBtn   = document.getElementById('backBtn');
  const logoBtn   = document.getElementById('logoBtn');
  const regCode   = document.getElementById('regCode');
  const regName   = document.getElementById('regName');
  const stageNav  = document.getElementById('stageNav');
  const regBody   = document.getElementById('regBody');

  let currentDept  = null;
  let currentStage = 'Stage 1';

  /* ────────────────── BUILD HOME CARDS ────────────────── */
  DEPTS.forEach(d => {
    const data  = DOCS_DATA[d.id] || {};
    const total = Object.values(data).reduce((s, arr) => s + arr.length, 0);

    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="card-top">
        <span class="card-code">${d.code}</span>
        <span class="card-num">${d.num}</span>
      </div>
      <h2 class="card-name">${d.name}</h2>
      <p class="card-desc">${d.desc}</p>
      <div class="card-foot">
        <span class="card-count"><strong>${total}</strong> documents</span>
        <span class="card-cta">Open register / →</span>
      </div>
    `;
    card.addEventListener('click', () => openDept(d.id));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openDept(d.id); });
    cardsEl.appendChild(card);
  });

  /* ────────────────── OPEN DEPARTMENT ────────────────── */
  function openDept(deptId) {
    const dept = DEPTS.find(d => d.id === deptId);
    if (!dept) return;

    currentDept  = deptId;
    currentStage = 'Stage 1';

    regCode.textContent = dept.code;
    regName.textContent = dept.name;

    // Reset tabs
    stageNav.querySelectorAll('.s-tab').forEach(t =>
      t.classList.toggle('active', t.dataset.stage === 'Stage 1')
    );

    renderStage('Stage 1');

    homeView.hidden = true;
    regView.hidden  = false;
    window.scrollTo(0, 0);
  }

  /* ────────────────── RENDER STAGE ────────────────── */
  function renderStage(stageKey) {
    currentStage = stageKey;
    regBody.innerHTML = '';

    const docs = (DOCS_DATA[currentDept] && DOCS_DATA[currentDept][stageKey]) || [];

    /* Stage heading */
    const head = document.createElement('div');
    head.className = 'stage-head';
    head.innerHTML = `
      <h3 class="stage-head-title">${STAGE_LABELS[stageKey]}</h3>
      <div class="stage-head-meta">
        <span class="stage-doc-badge">${docs.length} documents</span>
      </div>
    `;
    regBody.appendChild(head);

    if (!docs.length) {
      const empty = document.createElement('p');
      empty.style.cssText = 'color:rgba(232,236,241,0.3);font-size:13px;padding:40px 0;';
      empty.textContent = 'No documents in this stage.';
      regBody.appendChild(empty);
      return;
    }

    /* Document list */
    const list = document.createElement('div');
    list.className = 'doc-list';

    docs.forEach((doc, idx) => {
      const row = document.createElement('div');
      row.className = 'doc-row';
      row.innerHTML = `
        <span class="dr-num">${idx + 1}</span>
        <span class="dr-ref"><span class="ref-tag">${esc(doc.ref)}</span></span>
        <span class="dr-name"><span class="name-hl">${esc(doc.name)}</span></span>
        <span class="dr-type">${doc.type ? `<span class="type-tag">${esc(doc.type)}</span>` : ''}</span>
      `;
      list.appendChild(row);
    });

    regBody.appendChild(list);
  }

  /* ────────────────── TAB SWITCHING ────────────────── */
  stageNav.addEventListener('click', e => {
    const tab = e.target.closest('.s-tab');
    if (!tab || tab.dataset.stage === currentStage) return;
    stageNav.querySelectorAll('.s-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderStage(tab.dataset.stage);
    window.scrollTo(0, 0);
  });

  /* ────────────────── BACK / LOGO ────────────────── */
  function goHome() {
    currentDept = null;
    regView.hidden  = true;
    homeView.hidden = false;
    window.scrollTo(0, 0);
  }
  backBtn.addEventListener('click', goHome);
  logoBtn.addEventListener('click', goHome);

  /* ────────────────── UTIL ────────────────── */
  function esc(s) {
    if (!s) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

})();
