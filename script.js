const app = document.getElementById('app');
const backBtn = document.getElementById('backBtn');
const topbarCode = document.getElementById('topbarCode');
const topbarName = document.getElementById('topbarName');
const tbProject = document.getElementById('tbProject');
const tbSheet = document.getElementById('tbSheet');

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  modalOverlay.hidden = true;
  modalBody.innerHTML = '';
}

/* ──────────────────────────── DOCUMENT VIEWER ──────────────────────────── */
function openDoc(doc, kind) {
  const entry = kind === 'sample' ? doc.sample : doc.workflow;
  if (!entry) return;
  const label = kind === 'sample' ? 'Sample Document' : 'Workflow Document';
  const fileName = entry.file.split('/').pop();
  const docTitle = `${doc.ref ? doc.ref + ' · ' : ''}${doc.title}`;
  modalTitle.textContent = `${docTitle} — ${label}`;
  modalBody.innerHTML = '';

  const viewUrl = entry.view || entry.file;
  const isDocx = entry.type === 'docx';
  const isXlsx = entry.type === 'xlsx';
  const badgeClass = isDocx ? 'docx-badge' : isXlsx ? 'xlsx-badge' : 'docx-badge';
  const badgeText = (entry.type || 'FILE').toUpperCase();

  const wrapper = document.createElement('div');
  wrapper.className = 'doc-viewer';
  wrapper.innerHTML = `
    <div class="viewer-toolbar">
      <div class="viewer-meta">
        <span class="viewer-type-badge ${badgeClass}">${badgeText}</span>
        <span class="viewer-filename">${fileName}</span>
      </div>
      <div class="viewer-actions">
        <button class="viewer-open-tab fancy-action-btn" title="Open full executive document in a separate tab">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-3M9 2h5m0 0v5m0-5L8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>Open in new tab</span>
        </button>
        <a href="${entry.file}" download="${fileName}" class="viewer-download-btn fancy-download-btn">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M8 1.5v9m0 0l-3.5-3.5m3.5 3.5l3.5-3.5M2 14h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>Download Original</span>
        </a>
      </div>
    </div>
    <div class="viewer-frame-container">
      <iframe src="${viewUrl}" class="doc-viewer-iframe" title="${docTitle}"></iframe>
    </div>
  `;

  wrapper.querySelector('.viewer-open-tab').addEventListener('click', () => {
    window.open(viewUrl, '_blank');
  });

  modalBody.appendChild(wrapper);
  modalOverlay.hidden = false;
}

/* ── Priority badge helper ── */
function priorityClass(p) {
  if (!p) return '';
  const lc = p.toLowerCase();
  if (lc === 'critical') return 'priority-critical';
  if (lc === 'high') return 'priority-high';
  return 'priority-standard';
}

/* ── Flatten all docs from a team ── */
function getAllDocs(team) {
  if (team.sections) {
    return team.sections.flatMap(s => s.documents);
  }
  return team.documents || [];
}

/* ── Smooth page transition ── */
function transitionTo(renderFn) {
  app.style.opacity = '0';
  app.style.transform = 'translateY(12px)';
  setTimeout(() => {
    renderFn();
    app.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    app.style.opacity = '1';
    app.style.transform = 'translateY(0)';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 150);
}

/* ──────────────────────────── HOME ──────────────────────────── */
function renderHome() {
  backBtn.hidden = true;
  topbarCode.textContent = 'IDX';
  topbarName.textContent = COMPANY.name;
  tbProject.textContent = 'Process Overview';
  tbSheet.textContent = 'IDX–00';

  app.innerHTML = `
    <section class="hero">
      <div class="hero-eyebrow">Company process overview</div>
      <h1>${COMPANY.tagline}</h1>
      <p>Three teams, one seamless workflow. Select a team to explore its full deliverable registers with executive previews and sample attachments.</p>
    </section>
    <div class="team-grid"></div>
  `;

  const grid = app.querySelector('.team-grid');
  TEAMS.forEach((team) => {
    const allDocs = getAllDocs(team);
    const withSamples = allDocs.filter(d => d.sample || d.workflow).length;
    const card = document.createElement('button');
    card.className = 'team-card';
    card.setAttribute('data-code', team.code);
    card.innerHTML = `
      <h2>${team.name}</h2>
      <p>${team.blurb}</p>
      <div class="card-stats">
        <span class="count">${team.documentCount} documents</span>
        ${withSamples > 0 ? `<span class="count count-samples">● ${withSamples} sample${withSamples > 1 ? 's' : ''} attached</span>` : ''}
      </div>
    `;
    card.addEventListener('click', () => transitionTo(() => renderTeam(team.id)));
    grid.appendChild(card);
  });
}

/* ──────────────────────────── TEAM VIEW ──────────────────────────── */
function renderTeam(teamId) {
  const team = TEAMS.find((t) => t.id === teamId);
  if (!team) return renderHome();

  backBtn.hidden = false;
  topbarCode.textContent = team.code;
  topbarName.textContent = `${COMPANY.name} — ${team.name}`;
  tbProject.textContent = team.name;
  tbSheet.textContent = `${team.code}–01`;

  const allDocs = getAllDocs(team);
  const sectionCount = team.sections ? team.sections.length : 0;

  app.innerHTML = `
    <div class="team-head">
      <div class="hero-eyebrow">${team.code} · Document register</div>
      <h1>${team.name}</h1>
      <p>${team.blurb} Showing all ${allDocs.length} of ${team.documentCount} deliverables${sectionCount > 0 ? ` across ${sectionCount} strategic sections` : ''}.</p>
    </div>
    <div class="search-bar">
      <svg class="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 10.5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      <input type="text" id="docSearch" placeholder="Search documents by reference, deliverable title, owner, or priority…" autocomplete="off" />
    </div>
    <div class="doc-register" id="docRegister"></div>
  `;

  const register = document.getElementById('docRegister');

  let rowIndex = 0;
  function renderDocs(filter) {
    register.innerHTML = '';
    rowIndex = 0;
    const lowerFilter = (filter || '').toLowerCase();

    if (team.sections) {
      team.sections.forEach((section) => {
        const filteredDocs = section.documents.filter(doc => {
          if (!lowerFilter) return true;
          return (doc.ref && doc.ref.toLowerCase().includes(lowerFilter)) ||
                 doc.title.toLowerCase().includes(lowerFilter) ||
                 (doc.owner && doc.owner.toLowerCase().includes(lowerFilter)) ||
                 (doc.priority && doc.priority.toLowerCase().includes(lowerFilter));
        });
        if (filteredDocs.length === 0) return;

        const sectionEl = document.createElement('div');
        sectionEl.className = 'doc-section';
        sectionEl.innerHTML = `<div class="section-header"><span class="section-title">${section.title}</span><span class="section-count">${filteredDocs.length} deliverable${filteredDocs.length !== 1 ? 's' : ''}</span></div>`;
        register.appendChild(sectionEl);

        filteredDocs.forEach(doc => {
          register.appendChild(createDocRow(doc));
        });
      });
    } else {
      const docs = (team.documents || []).filter(doc => {
        if (!lowerFilter) return true;
        return doc.title.toLowerCase().includes(lowerFilter);
      });
      docs.forEach(doc => register.appendChild(createDocRow(doc)));
    }

    if (register.children.length === 0) {
      register.innerHTML = '<div class="no-results">No documents match your search query.</div>';
    }
  }

  function createDocRow(doc) {
    const hasSample = !!doc.sample;
    const hasWorkflow = !!doc.workflow;
    const row = document.createElement('div');
    row.className = 'doc-row clickable' + (hasSample || hasWorkflow ? ' has-file' : '');
    const delay = Math.min(rowIndex * 0.02, 0.6);
    row.style.animationDelay = delay + 's';
    rowIndex++;
    row.innerHTML = `
      <span class="doc-no">${doc.ref || ''}</span>
      <span class="doc-title">${doc.title}</span>
      <span class="doc-meta">
        ${doc.owner ? `<span class="tag tag-owner">${doc.owner}</span>` : ''}
        ${doc.priority ? `<span class="tag tag-priority ${priorityClass(doc.priority)}">${doc.priority}</span>` : ''}
      </span>
      <span class="doc-tags">
        ${hasSample ? '<span class="tag tag-sample">● Sample</span>' : ''}
        ${hasWorkflow ? '<span class="tag tag-workflow">● Workflow</span>' : ''}
        ${!hasSample && !hasWorkflow ? '<span class="tag tag-info">Info</span>' : ''}
      </span>
    `;
    if (hasSample) {
      row.addEventListener('click', () => openDoc(doc, 'sample'));
    } else if (hasWorkflow) {
      row.addEventListener('click', () => openDoc(doc, 'workflow'));
    } else {
      row.addEventListener('click', () => openInfo(doc));
    }
    return row;
  }

  renderDocs('');

  const searchInput = document.getElementById('docSearch');
  searchInput.addEventListener('input', () => renderDocs(searchInput.value));
}

/* ── Info modal for documents without attached files ── */
function openInfo(doc) {
  modalTitle.textContent = `${doc.ref ? doc.ref + ' · ' : ''}${doc.title}`;
  modalBody.innerHTML = '';

  const div = document.createElement('div');
  div.className = 'info-modal';

  const fields = [];
  if (doc.ref) fields.push({ label: 'Reference Code', value: doc.ref });
  if (doc.owner) fields.push({ label: 'Responsible Lead', value: doc.owner });
  if (doc.priority) fields.push({ label: 'Commercial Priority', value: `<span class="tag tag-priority ${priorityClass(doc.priority)}">${doc.priority}</span>` });

  div.innerHTML = `
    <div class="info-icon">📋</div>
    <h3 class="info-title">${doc.title}</h3>
    ${fields.length > 0 ? `
      <div class="info-fields">
        ${fields.map(f => `
          <div class="info-field">
            <span class="info-label">${f.label}</span>
            <span class="info-value">${f.value}</span>
          </div>
        `).join('')}
      </div>
    ` : ''}
    <div class="info-status">
      <span class="info-status-dot"></span>
      Document registered in master baseline — sample template pending issue.
    </div>
  `;

  modalBody.appendChild(div);
  modalOverlay.hidden = false;
}

backBtn.addEventListener('click', () => transitionTo(renderHome));

renderHome();
