/**
 * BCE Setu Admin Portal — Core Application Logic
 * admin/js/admin.js  (load after data.js)
 */
'use strict';

/* ════════════════════════════════════════════════════
   AUTH GUARD
════════════════════════════════════════════════════ */
(function() {
    if (sessionStorage.getItem('bce-admin-auth') !== 'true') {
        window.location.replace('login.html');
    }
})();

/* ════════════════════════════════════════════════════
   SVG ICON LIBRARY  ← declared FIRST so everything can reference it
════════════════════════════════════════════════════ */
const SVG = {
    check:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"/></svg>`,
    checkCircle:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    x:             `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    xCircle:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    edit:          `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
    trash:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
    plus:          `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    userPlus:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="17" y1="11" x2="23" y2="11"/></svg>`,
    clock:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    calendar:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    calendarPlus:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="12" y1="15" x2="12" y2="19"/><line x1="10" y1="17" x2="14" y2="17"/></svg>`,
    alertTriangle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    info:          `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    download:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    logout:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
};

/* Toast icon map — intentionally AFTER SVG object */
const TOAST_ICON = {
    success: SVG.checkCircle,
    error:   SVG.xCircle,
    info:    SVG.info,
    warn:    SVG.alertTriangle,
};

/* ════════════════════════════════════════════════════
   DOM HELPER
════════════════════════════════════════════════════ */
const el = id => document.getElementById(id);

function setFields(map) {
    Object.entries(map).forEach(([id, val]) => { const n = el(id); if (n) n.value = val || ''; });
}
function getFields(ids) {
    const out = {};
    ids.forEach(id => { const n = el(id); out[id] = n ? n.value.trim() : ''; });
    return out;
}

/* ════════════════════════════════════════════════════
   NAVIGATION
════════════════════════════════════════════════════ */
const NAV_META = {
    overview: { title: 'System Overview',    sub: 'Welcome back. Here is a live snapshot of the portal.' },
    pending:  { title: 'Pending Approvals',  sub: 'Review and act on incoming registration requests.' },
    alumni:   { title: 'Manage Alumni',      sub: 'View, edit, and remove alumni profiles.' },
    events:   { title: 'Events Manager',     sub: 'Create and manage all alumni events.' },
    jobs:     { title: 'Job Board',          sub: 'Manage alumni-posted job listings.' },
    settings: { title: 'Settings',           sub: 'Configure portal preferences and your account.' },
};

function navigate(sectionId) {
    document.querySelectorAll('.nav-link').forEach(a =>
        a.classList.toggle('active', a.dataset.section === sectionId));
    document.querySelectorAll('.admin-section').forEach(s =>
        s.classList.toggle('active', s.id === 'sec-' + sectionId));
    const m = NAV_META[sectionId] || {};
    el('topbarTitle').textContent = m.title || '';
    el('topbarSub').textContent   = m.sub   || '';

    if (sectionId === 'overview') { refreshStats(); renderActivity(); renderBranchChart(); }
    if (sectionId === 'pending')  renderPending();
    if (sectionId === 'alumni')   { renderAlumni(); populateBatchFilter(); }
    if (sectionId === 'events')   renderEvents();
    if (sectionId === 'jobs')     renderJobs();
    if (sectionId === 'settings') loadSettings();
}

/* ════════════════════════════════════════════════════
   STATS & OVERVIEW
════════════════════════════════════════════════════ */
function countTo(id, target) {
    const node = el(id);
    if (!node) return;
    let n = 0;
    const step = Math.max(1, Math.ceil(target / 28));
    const t = setInterval(() => {
        n = Math.min(n + step, target);
        node.textContent = n;
        if (n >= target) clearInterval(t);
    }, 28);
}

function refreshStats() {
    const alumni  = DB.getOrSeed('alumni');
    const pending = DB.getOrSeed('pending');
    const events  = DB.getOrSeed('events');
    const jobs    = DB.getOrSeed('jobs');

    countTo('sv-alumni',  alumni.length);
    countTo('sv-pending', pending.length);
    countTo('sv-events',  events.length);
    countTo('sv-jobs',    jobs.length);

    el('sv-alumni-sub').textContent  = alumni.length + ' registered';
    el('sv-pending-sub').textContent = pending.length > 0 ? pending.length + ' await review' : 'None pending';

    const badge = el('pendingBadge');
    badge.textContent    = pending.length;
    badge.style.display  = pending.length > 0 ? '' : 'none';

    const qaBtn = document.querySelector('#qaReviewPending .qa-count');
    if (qaBtn) qaBtn.textContent = '(' + pending.length + ')';
}

const AC_COLORS = { info: '#3b4fd8', success: '#059669', error: '#dc2626', warn: '#d97706' };

function renderActivity() {
    const acts = DB.get('activity') || [];
    const feed = el('activityFeed');
    if (!feed) return;
    if (!acts.length) {
        feed.innerHTML = `<div class="empty-state" style="padding:2rem;">
            <div class="es-icon">${SVG.clock}</div><p>No recent activity yet.</p></div>`;
        return;
    }
    feed.innerHTML = acts.slice(0, 10).map(a => `
        <div class="ac-item">
            <div class="ac-dot" style="background:${AC_COLORS[a.type] || AC_COLORS.info}"></div>
            <div>
                <div class="ac-text">${a.text}</div>
                <div class="ac-time">${a.time}</div>
            </div>
        </div>`).join('');
}

function renderBranchChart() {
    const alumni = DB.getOrSeed('alumni');
    const counts = {};
    alumni.forEach(a => { counts[a.branch] = (counts[a.branch] || 0) + 1; });
    const max = Math.max(...Object.values(counts), 1);
    const COLORS = ['#3b4fd8','#7c3aed','#059669','#d97706','#0891b2'];
    const wrap = el('branchChartWrap');
    if (!wrap) return;
    wrap.innerHTML = Object.entries(counts).map(([b, c], i) => `
        <div class="bc-row">
            <span class="bc-lbl">${esc(b)}</span>
            <div class="bc-bar-bg"><div class="bc-bar-fill" style="width:${(c/max)*100}%;background:${COLORS[i%COLORS.length]};"></div></div>
            <span class="bc-count">${c}</span>
        </div>`).join('') || '<p class="text-muted fs-sm" style="padding:.5rem 0">No data.</p>';
}

/* ════════════════════════════════════════════════════
   PENDING APPROVALS
════════════════════════════════════════════════════ */
function renderPending() {
    const all    = DB.getOrSeed('pending');
    const search = (el('pSearch')?.value||'').toLowerCase();
    const branch = el('pBranch')?.value||'';
    const rows   = all.filter(p =>
        (!search || (p.name+p.email).toLowerCase().includes(search)) && (!branch||p.branch===branch));

    const tbody = el('pendingTbody'), empty = el('pendingEmpty');
    if (!tbody) return;
    if (!rows.length) { tbody.innerHTML=''; if(empty) empty.style.display=''; return; }
    if (empty) empty.style.display='none';

    tbody.innerHTML = rows.map((p,i) => `
        <tr>
            <td><div class="av-cell">
                <div class="av-circle" style="background:${avatarColor(i)}">${initials(p.name)}</div>
                <div><span class="av-name">${esc(p.name)}</span><span class="av-sub">${esc(p.phone||'')}</span></div>
            </div></td>
            <td>${esc(p.batch)}</td>
            <td><span class="badge b-navy">${esc(p.branch)}</span></td>
            <td class="fs-sm">${esc(p.email)}</td>
            <td class="fs-sm text-muted">${esc(p.appliedOn||'—')}</td>
            <td>
                <button class="btn-act btn-approve" onclick="approvePending(${p.id})">${SVG.check} Approve</button>
                <button class="btn-act btn-reject"  onclick="confirmRejectPending(${p.id})">${SVG.x} Reject</button>
            </td>
        </tr>`).join('');
}

function approvePending(id) {
    let pending = DB.getOrSeed('pending');
    const item  = pending.find(p => p.id === id);
    if (!item) return;
    DB.set('pending', pending.filter(p => p.id !== id));
    const alumni = DB.getOrSeed('alumni');
    alumni.unshift({ id: Date.now(), name: item.name, role: 'BCE Alumni', company: item.currentWork||'—',
        batch: item.batch, branch: item.branch, industry: '—', country: 'India', bio:'', linkedin:'', portfolio:'' });
    DB.set('alumni', alumni);
    logActivity(`<strong>${esc(item.name)}</strong> approved and added to the alumni directory`, 'success');
    showToast(item.name + ' approved', 'success');
    renderPending(); refreshStats();
}

function confirmRejectPending(id) {
    const item = DB.getOrSeed('pending').find(p => p.id === id);
    showConfirm({ title:'Reject Request',
        body: `Remove the request from <strong>${esc(item?.name||'this applicant')}</strong>? This cannot be undone.`,
        icon:'danger', confirmLabel:'Reject',
        onConfirm() {
            DB.set('pending', DB.getOrSeed('pending').filter(p => p.id !== id));
            logActivity(`Request from <strong>${esc(item?.name||'Applicant')}</strong> rejected`, 'error');
            showToast('Request rejected', 'error');
            renderPending(); refreshStats();
        }
    });
}

function approveAll() {
    const pending = DB.getOrSeed('pending');
    if (!pending.length) { showToast('No pending requests', 'info'); return; }
    showConfirm({ title:'Approve All Requests',
        body: pending.length + ' request(s) will be approved and added to the alumni directory.',
        icon:'info', confirmLabel:'Approve All',
        onConfirm() {
            const alumni = DB.getOrSeed('alumni');
            pending.forEach(item => alumni.unshift({ id: Date.now()+Math.random(), name: item.name, role:'BCE Alumni',
                company: item.currentWork||'—', batch: item.batch, branch: item.branch, industry:'—', country:'India', bio:'', linkedin:'', portfolio:'' }));
            DB.set('alumni', alumni); DB.set('pending', []);
            logActivity(`Bulk approved <strong>${pending.length}</strong> pending request(s)`, 'success');
            showToast('All ' + pending.length + ' requests approved', 'success');
            renderPending(); refreshStats();
        }
    });
}

/* ════════════════════════════════════════════════════
   MANAGE ALUMNI
════════════════════════════════════════════════════ */
let _editAlumniId = null;

function populateBatchFilter() {
    const alumni  = DB.getOrSeed('alumni');
    const batches = [...new Set(alumni.map(a => a.batch).filter(Boolean))].sort((a,b)=>b-a);
    const sel = el('aBatch');
    if (!sel) return;
    const cur = sel.value;
    sel.innerHTML = '<option value="">All Batches</option>' + batches.map(b=>`<option value="${b}">${b}</option>`).join('');
    sel.value = cur;
}

function renderAlumni() {
    const alumni  = DB.getOrSeed('alumni');
    const search  = (el('aSearch')?.value||'').toLowerCase();
    const branch  = el('aBranch')?.value||'';
    const batch   = el('aBatch')?.value||'';
    const rows = alumni.filter(a =>
        (!search||(a.name+a.company+a.role).toLowerCase().includes(search)) &&
        (!branch||a.branch===branch) && (!batch||a.batch===batch));

    const tbody = el('alumniTbody'), empty = el('alumniEmpty');
    if (!tbody) return;
    if (!rows.length) { tbody.innerHTML=''; if(empty) empty.style.display=''; return; }
    if (empty) empty.style.display='none';

    tbody.innerHTML = rows.map((a,i) => `
        <tr>
            <td><div class="av-cell">
                <div class="av-circle" style="background:${avatarColor(i)}">${initials(a.name)}</div>
                <div><span class="av-name">${esc(a.name)}</span><span class="av-sub">${esc(a.role)}</span></div>
            </div></td>
            <td>${esc(a.batch)}</td>
            <td><span class="badge b-navy">${esc(a.branch)}</span></td>
            <td class="fs-sm">${esc(a.company)}</td>
            <td><span class="badge b-blue">${esc(a.industry)}</span></td>
            <td>
                <button class="btn-act btn-edit" onclick="openEditAlumni(${a.id})">${SVG.edit} Edit</button>
                <button class="btn-act btn-del"  onclick="confirmDeleteAlumni(${a.id})">${SVG.trash} Delete</button>
            </td>
        </tr>`).join('');
}

function openAddAlumni() {
    _editAlumniId = null;
    el('alumniModalTitle').innerHTML = SVG.userPlus + ' Add Alumni';
    el('alumniForm').reset();
    openModal('alumniModal');
}

function openEditAlumni(id) {
    const a = DB.getOrSeed('alumni').find(x => x.id === id);
    if (!a) return;
    _editAlumniId = id;
    el('alumniModalTitle').innerHTML = SVG.edit + ' Edit Alumni';
    setFields({ af_name:a.name, af_role:a.role, af_company:a.company, af_batch:a.batch,
        af_branch:a.branch, af_industry:a.industry, af_country:a.country,
        af_bio:a.bio, af_linkedin:a.linkedin, af_portfolio:a.portfolio });
    openModal('alumniModal');
}

function saveAlumni(e) {
    e.preventDefault();
    const d = getFields(['af_name','af_role','af_company','af_batch','af_branch','af_industry','af_country','af_bio','af_linkedin','af_portfolio']);
    const payload = { name:d.af_name, role:d.af_role, company:d.af_company, batch:d.af_batch,
        branch:d.af_branch, industry:d.af_industry, country:d.af_country, bio:d.af_bio, linkedin:d.af_linkedin, portfolio:d.af_portfolio };
    const alumni = DB.getOrSeed('alumni');
    if (_editAlumniId) {
        const idx = alumni.findIndex(a => a.id === _editAlumniId);
        if (idx !== -1) alumni[idx] = { ...alumni[idx], ...payload };
        logActivity(`<strong>${esc(payload.name)}</strong> profile updated`, 'success');
        showToast('Alumni updated', 'success');
    } else {
        alumni.unshift({ id: Date.now(), ...payload });
        logActivity(`New alumni <strong>${esc(payload.name)}</strong> added`, 'success');
        showToast('Alumni added', 'success');
    }
    DB.set('alumni', alumni);
    closeModal('alumniModal');
    renderAlumni(); populateBatchFilter(); refreshStats();
}

function confirmDeleteAlumni(id) {
    const a = DB.getOrSeed('alumni').find(x => x.id === id);
    showConfirm({ title:'Delete Alumni Profile',
        body:`<strong>${esc(a?.name)}</strong> will be permanently removed from the directory.`,
        icon:'danger', confirmLabel:'Delete',
        onConfirm() {
            DB.set('alumni', DB.getOrSeed('alumni').filter(x => x.id !== id));
            logActivity(`<strong>${esc(a?.name)}</strong> profile deleted`, 'error');
            showToast('Alumni deleted', 'error');
            renderAlumni(); populateBatchFilter(); refreshStats();
        }
    });
}

/* ════════════════════════════════════════════════════
   EVENTS MANAGER
════════════════════════════════════════════════════ */
let _editEventId = null;

function renderEvents() {
    const events = DB.getOrSeed('events');
    const search = (el('evSearch')?.value||'').toLowerCase();
    const cat    = el('evCat')?.value||'';
    const rows = events.filter(e =>
        (!search||(e.title+e.location).toLowerCase().includes(search)) && (!cat||e.category===cat));

    const tbody = el('eventsTbody'), empty = el('eventsEmpty');
    if (!tbody) return;
    if (!rows.length) { tbody.innerHTML=''; if(empty) empty.style.display=''; return; }
    if (empty) empty.style.display='none';

    tbody.innerHTML = rows.map(ev => `
        <tr>
            <td><div class="av-cell">
                <div class="av-box" style="background:rgba(91,33,182,.1);color:var(--col-purple);">${SVG.calendar}</div>
                <div><span class="av-name">${esc(ev.title)}</span><span class="av-sub">${esc(ev.time||'')}</span></div>
            </div></td>
            <td class="fs-sm">${fmtDate(ev.date)}</td>
            <td class="fs-sm">${esc(ev.location)}</td>
            <td class="fw-700">${ev.rsvpCount||0}</td>
            <td><span class="badge ${ev.category==='Upcoming'?'b-purple':'b-gray'}">${esc(ev.category)}</span></td>
            <td>
                <button class="btn-act btn-edit" onclick="openEditEvent(${ev.id})">${SVG.edit} Edit</button>
                <button class="btn-act btn-del"  onclick="confirmDeleteEvent(${ev.id})">${SVG.trash} Delete</button>
            </td>
        </tr>`).join('');
}

function openAddEvent() {
    _editEventId = null;
    el('eventModalTitle').innerHTML = SVG.calendarPlus + ' Add Event';
    el('eventForm').reset();
    openModal('eventModal');
}

function openEditEvent(id) {
    const ev = DB.getOrSeed('events').find(e => e.id === id);
    if (!ev) return;
    _editEventId = id;
    el('eventModalTitle').innerHTML = SVG.edit + ' Edit Event';
    setFields({ ef_title:ev.title, ef_date:ev.date, ef_time:ev.time, ef_location:ev.location,
        ef_category:ev.category, ef_desc:ev.description, ef_image:ev.image });
    openModal('eventModal');
}

function saveEvent(e) {
    e.preventDefault();
    const d = getFields(['ef_title','ef_date','ef_time','ef_location','ef_category','ef_desc','ef_image']);
    const payload = { title:d.ef_title, date:d.ef_date, time:d.ef_time, location:d.ef_location,
        category:d.ef_category, description:d.ef_desc, image:d.ef_image };
    const events = DB.getOrSeed('events');
    if (_editEventId) {
        const idx = events.findIndex(e => e.id === _editEventId);
        if (idx !== -1) { payload.rsvpCount = events[idx].rsvpCount||0; events[idx] = { ...events[idx], ...payload }; }
        logActivity(`Event "<strong>${esc(payload.title)}</strong>" updated`, 'success');
        showToast('Event updated', 'success');
    } else {
        events.unshift({ id: Date.now(), rsvpCount: 0, ...payload });
        logActivity(`New event "<strong>${esc(payload.title)}</strong>" created`, 'success');
        showToast('Event created', 'success');
    }
    DB.set('events', events);
    closeModal('eventModal'); renderEvents(); refreshStats();
}

function confirmDeleteEvent(id) {
    const ev = DB.getOrSeed('events').find(e => e.id === id);
    showConfirm({ title:'Delete Event',
        body:`"<strong>${esc(ev?.title)}</strong>" will be permanently removed.`,
        icon:'danger', confirmLabel:'Delete',
        onConfirm() {
            DB.set('events', DB.getOrSeed('events').filter(e => e.id !== id));
            logActivity(`Event "<strong>${esc(ev?.title)}</strong>" deleted`, 'error');
            showToast('Event deleted', 'error');
            renderEvents(); refreshStats();
        }
    });
}

/* ════════════════════════════════════════════════════
   JOB BOARD
════════════════════════════════════════════════════ */
function renderJobs() {
    const jobs   = DB.getOrSeed('jobs');
    const search = (el('jSearch')?.value||'').toLowerCase();
    const type   = el('jType')?.value||'';
    const rows = jobs.filter(j =>
        (!search||(j.title+j.company).toLowerCase().includes(search)) && (!type||j.type===type));

    const tbody = el('jobsTbody'), empty = el('jobsEmpty');
    if (!tbody) return;
    if (!rows.length) { tbody.innerHTML=''; if(empty) empty.style.display=''; return; }
    if (empty) empty.style.display='none';

    const cls = { 'Full-time':'b-approved', 'Internship':'b-purple', 'Contract':'b-blue' };
    tbody.innerHTML = rows.map(j => `
        <tr>
            <td><span class="av-name">${esc(j.title)}</span><span class="av-sub">${esc(j.salary||'')}</span></td>
            <td class="fs-sm">${esc(j.company)}</td>
            <td class="fs-sm">${esc(j.location)}</td>
            <td><span class="badge ${cls[j.type]||'b-navy'}">${esc(j.type)}</span></td>
            <td class="fs-sm">${esc(j.postedBy)}<br><span class="fs-xs text-muted">${esc(j.postedDate)}</span></td>
            <td><button class="btn-act btn-del" onclick="confirmDeleteJob(${j.id})">${SVG.trash} Remove</button></td>
        </tr>`).join('');
}

function confirmDeleteJob(id) {
    const j = DB.getOrSeed('jobs').find(x => x.id === id);
    showConfirm({ title:'Remove Job Listing',
        body:`"<strong>${esc(j?.title)}</strong>" will be removed from the board.`,
        icon:'danger', confirmLabel:'Remove',
        onConfirm() {
            DB.set('jobs', DB.getOrSeed('jobs').filter(x => x.id !== id));
            logActivity(`Job "<strong>${esc(j?.title)}</strong>" removed`, 'error');
            showToast('Job listing removed', 'error');
            renderJobs(); refreshStats();
        }
    });
}

/* ════════════════════════════════════════════════════
   SETTINGS
════════════════════════════════════════════════════ */
function loadSettings() {
    const dark = localStorage.getItem('theme') === 'dark';
    const sw = el('swDarkMode');
    if (sw) sw.checked = dark;
    const sInfo = el('storageInfo');
    if (sInfo) sInfo.textContent = (DB.usedBytes()/1024).toFixed(1) + ' KB';
    const lInfo = el('lastLoginInfo');
    if (lInfo) lInfo.textContent = sessionStorage.getItem('bce-login-time') || '—';
}

function setTheme(dark) {
    const t = dark ? 'dark' : 'light';
    document.body.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
    showToast(dark ? 'Dark mode enabled' : 'Light mode enabled', 'info');
}

function handleChangePassword() {
    const pwd = prompt('Enter new admin password (min 8 characters):');
    if (!pwd) return;
    if (pwd.length < 8) { showToast('Password must be at least 8 characters', 'error'); return; }
    localStorage.setItem('bce_admin_pass', pwd);
    logActivity('Admin password changed', 'warn');
    showToast('Password updated', 'success');
}

function exportAlumniJSON() {
    const blob = new Blob([JSON.stringify(DB.getOrSeed('alumni'), null, 2)], { type:'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'bce_alumni_export.json'; a.click();
    URL.revokeObjectURL(url);
    logActivity('Alumni data exported as JSON', 'info');
    showToast('Alumni data exported', 'success');
}

function handleClearPending() {
    showConfirm({ title:'Clear Pending Queue', icon:'warn', confirmLabel:'Clear Queue',
        body:'All pending registration requests will be permanently discarded.',
        onConfirm() { DB.set('pending',[]); refreshStats(); logActivity('Pending queue cleared','warn'); showToast('Pending queue cleared','info'); }
    });
}

function handleResetData() {
    showConfirm({ title:'Reset All Portal Data', icon:'danger', confirmLabel:'Reset Everything',
        body:'All alumni, events, and job data will revert to defaults. This action cannot be undone.',
        onConfirm() {
            ['alumni','events','jobs','pending','activity'].forEach(k => DB.set(k, SEED[k]||[]));
            logActivity('Portal data reset to factory defaults','warn');
            showToast('Portal data reset to defaults','info');
            refreshStats();
        }
    });
}

/* ════════════════════════════════════════════════════
   GLOBAL SEARCH
════════════════════════════════════════════════════ */
function handleGlobalSearch(q) {
    if (!q.trim()) return;
    const ql = q.toLowerCase();
    if (DB.getOrSeed('alumni').some(a => (a.name+a.company).toLowerCase().includes(ql))) {
        navigate('alumni');
        const inp = el('aSearch');
        if (inp) { inp.value = q; renderAlumni(); }
    }
}

/* ════════════════════════════════════════════════════
   MODAL ENGINE
════════════════════════════════════════════════════ */
function openModal(id)  { el(id)?.classList.add('open'); }
function closeModal(id) { el(id)?.classList.remove('open'); }

let _confirmCb = null;

function showConfirm({ title, body, icon='warn', confirmLabel='Confirm', onConfirm }) {
    const iconMap = {
        warn:   { cls:'ci-warn',   svg: SVG.alertTriangle },
        danger: { cls:'ci-danger', svg: SVG.trash },
        info:   { cls:'ci-info',   svg: SVG.info },
    };
    const ic = iconMap[icon] || iconMap.warn;
    el('confirmIconWrap').className = 'confirm-icon-wrap ' + ic.cls;
    el('confirmIconWrap').innerHTML = ic.svg;
    el('confirmTitle').textContent  = title;
    el('confirmBody').innerHTML     = body;
    el('confirmOkBtn').textContent  = confirmLabel;
    el('confirmOkBtn').className    = 'btn-primary-admin' + (icon==='danger' ? ' btn-danger-confirm' : '');
    _confirmCb = onConfirm;
    openModal('confirmModal');
}
function closeConfirm() { closeModal('confirmModal'); _confirmCb = null; }

/* ════════════════════════════════════════════════════
   TOAST
════════════════════════════════════════════════════ */
function showToast(msg, type='info', duration=3200) {
    const stack = el('toastStack');
    const t = document.createElement('div');
    t.className = 'toast-item t-' + type;
    t.innerHTML = (TOAST_ICON[type] || '') + '<span>' + msg + '</span>';
    stack.appendChild(t);
    setTimeout(() => { t.classList.add('t-out'); setTimeout(() => t.remove(), 380); }, duration);
}

/* ════════════════════════════════════════════════════
   THEME SYNC
════════════════════════════════════════════════════ */
function syncTheme() {
    document.body.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
}

/* ════════════════════════════════════════════════════
   BOOTSTRAP
════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    syncTheme();
    initDB();

    if (!sessionStorage.getItem('bce-login-time')) {
        sessionStorage.setItem('bce-login-time', fmtTime(new Date()));
    }

    /* Close modals on backdrop click */
    document.querySelectorAll('.modal-overlay').forEach(m =>
        m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); }));

    /* Confirm OK */
    el('confirmOkBtn').addEventListener('click', () => {
        closeConfirm();
        if (_confirmCb) { const cb = _confirmCb; _confirmCb = null; cb(); }
    });

    /* Logout */
    el('logoutBtn').addEventListener('click', () => {
        showConfirm({ title:'Sign Out', body:'You will be returned to the admin login page.',
            icon:'warn', confirmLabel:'Sign Out',
            onConfirm() { sessionStorage.removeItem('bce-admin-auth'); window.location.replace('login.html'); }
        });
    });

    /* Nav links */
    document.querySelectorAll('.nav-link[data-section]').forEach(a =>
        a.addEventListener('click', e => { e.preventDefault(); navigate(a.dataset.section); }));

    /* Dark mode toggle */
    const sw = el('swDarkMode');
    if (sw) sw.addEventListener('change', () => setTheme(sw.checked));

    /* Global search */
    const gs = el('globalSearch');
    if (gs) gs.addEventListener('input', () => handleGlobalSearch(gs.value));

    /* First render */
    navigate('overview');
});
