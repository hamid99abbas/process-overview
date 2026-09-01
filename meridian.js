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
      const fileEntry = doc.sample || (doc.file ? { file: doc.file, raw: doc.raw || doc.file } : null);
      const row = document.createElement('div');
      row.className = 'doc-row clickable' + (fileEntry ? ' has-file' : '');
      row.innerHTML = `
        <span class="dr-num">${idx + 1}</span>
        <span class="dr-ref"><span class="ref-tag">${esc(doc.ref)}</span></span>
        <span class="dr-name">
          <span class="name-hl">${esc(doc.name)}</span>
          ${fileEntry ? '<span class="file-badge">● Document Attached</span>' : ''}
        </span>
        <span class="dr-type">${doc.type ? `<span class="type-tag">${esc(doc.type)}</span>` : ''}</span>
      `;

      row.addEventListener('click', () => {
        if (fileEntry) {
          openDoc(doc, fileEntry);
        } else {
          openInfo(doc);
        }
      });

      list.appendChild(row);
    });

    regBody.appendChild(list);
  }

  /* ────────────────── DOCUMENT VIEWER ────────────────── */
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle   = document.getElementById('modalTitle');
  const modalBody    = document.getElementById('modalBody');
  const modalClose   = document.getElementById('modalClose');

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  function closeModal() {
    if (modalOverlay) modalOverlay.hidden = true;
    if (modalBody) modalBody.innerHTML = '';
  }

  function openDoc(doc, entry) {
    const downloadFile = entry.raw || entry.file;
    const fileName     = downloadFile.split('/').pop();
    const docTitle     = `${doc.ref ? doc.ref + ' · ' : ''}${doc.name}`;
    modalTitle.textContent = `${docTitle} — Document Viewer`;
    modalBody.innerHTML = '';

    const viewUrl = entry.file;
    const rawExt  = downloadFile.split('.').pop().toUpperCase();
    const isXlsx  = rawExt === 'XLSX';

    const wrapper = document.createElement('div');
    wrapper.className = 'doc-viewer';

    const toolbar = document.createElement('div');
    toolbar.className = 'viewer-toolbar';
    toolbar.innerHTML = `
      <div class="viewer-meta">
        <span class="viewer-type-badge">${rawExt}</span>
        <span class="viewer-filename">${fileName}</span>
      </div>
      <div class="viewer-actions">
        <button class="viewer-open-tab fancy-action-btn" title="Open in new tab">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-3M9 2h5m0 0v5m0-5L8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>Open in new tab</span>
        </button>
        <a href="${downloadFile}" download="${fileName}" class="viewer-download-btn fancy-download-btn">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M8 1.5v9m0 0l-3.5-3.5m3.5 3.5l3.5-3.5M2 14h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>Download .${rawExt.toLowerCase()}</span>
        </a>
      </div>
    `;
    toolbar.querySelector('.viewer-open-tab').addEventListener('click', () => window.open(viewUrl, '_blank'));
    wrapper.appendChild(toolbar);

    if (isXlsx && typeof XLSX !== 'undefined') {
      const loadingDiv = document.createElement('div');
      loadingDiv.style.cssText = 'padding:40px;text-align:center;color:#F5C518;font-family:monospace;font-size:13px;';
      loadingDiv.textContent = 'Loading spreadsheet…';
      wrapper.appendChild(loadingDiv);

      modalBody.appendChild(wrapper);
      modalOverlay.hidden = false;

      fetch(viewUrl)
        .then(r => {
          if (!r.ok) throw new Error('File not accessible');
          return r.arrayBuffer();
        })
        .then(buf => {
          const workbook = XLSX.read(new Uint8Array(buf), { type: 'array' });
          loadingDiv.remove();

          const tabBar = document.createElement('div');
          tabBar.className = 'sheet-tabs';
          workbook.SheetNames.forEach((name, i) => {
            const btn = document.createElement('button');
            btn.className = 'sheet-tab' + (i === 0 ? ' active' : '');
            btn.textContent = name;
            btn.addEventListener('click', () => {
              tabBar.querySelectorAll('.sheet-tab').forEach(b => b.classList.remove('active'));
              btn.classList.add('active');
              renderSheet(workbook, name, tableWrap);
            });
            tabBar.appendChild(btn);
          });
          wrapper.appendChild(tabBar);

          const tableWrap = document.createElement('div');
          tableWrap.className = 'viewer-canvas-scroll';
          wrapper.appendChild(tableWrap);

          renderSheet(workbook, workbook.SheetNames[0], tableWrap);
        })
        .catch(err => {
          loadingDiv.innerHTML = `<span style="color:#ef4444">⚠ Error loading spreadsheet: ${err.message}</span>`;
        });
    } else {
      const frameContainer = document.createElement('div');
      frameContainer.className = 'viewer-frame-container';
      frameContainer.innerHTML = `<iframe src="${viewUrl}" class="doc-viewer-iframe" title="${docTitle}"></iframe>`;
      wrapper.appendChild(frameContainer);

      modalBody.appendChild(wrapper);
      modalOverlay.hidden = false;
    }
  }

  function renderSheet(workbook, sheetName, container) {
    container.innerHTML = '';
    const ws = workbook.Sheets[sheetName];
    if (!ws || !ws['!ref']) {
      container.innerHTML = '<p style="padding:24px 20px;color:#888;font-family:monospace">Sheet is empty</p>';
      return;
    }
    try {
      const html = XLSX.utils.sheet_to_html(ws, { id: 'xl-table', editable: false });
      const wrap = document.createElement('div');
      wrap.innerHTML = html;
      container.appendChild(wrap);
    } catch (e) {
      container.innerHTML = '<p style="padding:24px;color:#ef4444;font-family:monospace">Error: ' + e.message + '</p>';
    }
  }

  function openInfo(doc) {
    modalTitle.textContent = `${doc.ref ? doc.ref + ' · ' : ''}${doc.name}`;
    modalBody.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'info-modal';

    const fields = [];
    if (doc.ref)     fields.push({ lbl: 'Reference Code', val: doc.ref });
    if (doc.owner)   fields.push({ lbl: 'Lead Owner', val: doc.owner });
    if (doc.purpose) fields.push({ lbl: 'Assurance / Purpose', val: doc.purpose });
    if (doc.type)    fields.push({ lbl: 'Document Type', val: doc.type });

    div.innerHTML = `
      <div class="info-icon">📋</div>
      <h3 class="info-title">${esc(doc.name)}</h3>
      ${fields.length > 0 ? `
        <div class="info-fields">
          ${fields.map(f => `
            <div class="info-field">
              <span class="info-lbl">${f.lbl}</span>
              <span class="info-val">${esc(f.val)}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
      <div class="info-note">
        <span class="info-dot"></span>
        Controlled document registered in master index.
      </div>
    `;

    modalBody.appendChild(div);
    modalOverlay.hidden = false;
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
