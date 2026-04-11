/**
 * BCE Setu Alumni Portal — Global Logic
 * Handles: Theme, Navigation, Reveal Animations, Notifications
 */

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;


    // ─── 2. MOBILE MENU ──────────────────────────────────────────────
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.innerText = mobileMenu.classList.contains('active') ? '✕' : '☰';
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuToggle.innerText = '☰';
            });
        });
    }

    // ─── 3. SCROLL PROGRESS ──────────────────────────────────────────
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            scrollProgress.style.width = ((window.scrollY / height) * 100) + '%';
        }, { passive: true });
    }

    // ─── 4. REVEAL ANIMATIONS & STATS ────────────────────────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('quick-nav')) animateStats();
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // ─── 5. STATS COUNTER ────────────────────────────────────────────
    function animateStats() {
        document.querySelectorAll('.stat-number').forEach(stat => {
            if (stat.getAttribute('data-animated') === 'true') return;
            stat.setAttribute('data-animated', 'true');
            const target = parseInt(stat.getAttribute('data-target'));
            const step = target / (2000 / 16);
            let current = 0;
            const update = () => {
                current += step;
                if (current < target) {
                    stat.innerText = Math.floor(current).toLocaleString();
                    requestAnimationFrame(update);
                } else {
                    stat.innerText = target.toLocaleString();
                }
            };
            update();
        });
    }

    // ─── 6. BACK TO TOP ──────────────────────────────────────────────
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ─── 7. NOTIFICATION BELL (Feature #15) ──────────────────────────
    const notifBell = document.getElementById('notifBell');
    const notifDropdown = document.getElementById('notifDropdown');

    const notifications = JSON.parse(localStorage.getItem('bce-notifications') || 'null') || [
        { id: 1, text: '🎓 Annual Alumni Meet registration is open!', time: '2h ago', read: false },
        { id: 2, text: '💼 New job posted by Rahul Mehra (Microsoft)', time: '5h ago', read: false },
        { id: 3, text: '🌟 Your profile has been verified!', time: '1d ago', read: true }
    ];

    function renderNotifications() {
        if (!notifBell || !notifDropdown) return;
        const unread = notifications.filter(n => !n.read).length;
        const badge = notifBell.querySelector('.notif-badge');
        if (badge) badge.textContent = unread > 0 ? unread : '';
        if (badge) badge.style.display = unread > 0 ? 'flex' : 'none';

        const list = notifDropdown.querySelector('.notif-list');
        if (list) {
            list.innerHTML = notifications.map(n => `
              <div class="notif-item ${n.read ? '' : 'unread'}" data-id="${n.id}">
                <p>${n.text}</p>
                <small>${n.time}</small>
              </div>`).join('');
            list.querySelectorAll('.notif-item').forEach(item => {
                item.addEventListener('click', () => {
                    const n = notifications.find(x => x.id === parseInt(item.dataset.id));
                    if (n) n.read = true;
                    localStorage.setItem('bce-notifications', JSON.stringify(notifications));
                    renderNotifications();
                });
            });
        }
    }

    if (notifBell) {
        renderNotifications();
        notifBell.addEventListener('click', (e) => {
            e.stopPropagation();
            notifDropdown.classList.toggle('show');
        });
        document.addEventListener('click', (e) => {
            if (notifDropdown && !notifDropdown.contains(e.target) && e.target !== notifBell) {
                notifDropdown.classList.remove('show');
            }
        });
        const clearBtn = notifDropdown?.querySelector('#clearNotifs');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                notifications.forEach(n => n.read = true);
                localStorage.setItem('bce-notifications', JSON.stringify(notifications));
                renderNotifications();
            });
        }
    }

    // ─── 8. HOMEPAGE: FEATURED ALUMNI GRID ───────────────────────────
    const alumniGrid = document.getElementById('featured-grid');
    if (alumniGrid && typeof alumniData !== 'undefined') {
        alumniData.slice(0, 3).forEach(alumnus => {
            const card = document.createElement('div');
            card.className = 'alumni-card reveal';
            const badgesHtml = alumnus.badges ? alumnus.badges.slice(0, 2).map(b => `<span class="badge-chip">${b}</span>`).join('') : '';
            card.innerHTML = `
                <div class="card-img" style="height: 240px; overflow: hidden;">
                    <img src="${alumnus.image}" alt="${alumnus.name}" loading="lazy" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="card-info" style="padding: 1.5rem;">
                    <h3 class="card-name" style="font-size: 1.3rem; color: hsl(var(--primary)); margin-bottom:0.3rem;">${alumnus.name}</h3>
                    <span class="card-role" style="color: hsl(var(--text-muted)); display: block; font-size:0.9rem; margin-bottom:0.75rem;">${alumnus.role} @ ${alumnus.company}</span>
                    <div class="badge-row">${badgesHtml}</div>
                    <div class="card-meta" style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 1rem; margin-top:0.75rem;">
                        <span class="batch-tag">Class of ${alumnus.batch}</span>
                        <span style="font-weight: 700; color: hsl(var(--secondary)); font-size: 0.85rem;">${alumnus.branch}</span>
                    </div>
                </div>`;
            card.onclick = () => window.location.href = `pages/profile.html?id=${alumnus.id}`;
            card.style.cursor = 'pointer';
            alumniGrid.appendChild(card);
        });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    // ─── 9. HOMEPAGE: EVENTS PREVIEW GRID ────────────────────────────
    const eventsGrid = document.getElementById('events-preview-grid');
    if (eventsGrid && typeof eventsData !== 'undefined') {
        eventsData.filter(e => e.category === 'Upcoming').slice(0, 3).forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card reveal';
            card.innerHTML = `
                <div class="event-img" style="position: relative; height: 200px; overflow: hidden;">
                    <img src="${event.image}" alt="${event.title}" loading="lazy" style="width:100%; height:100%; object-fit:cover;">
                    <div class="event-date-badge">
                        <b>${event.date.split(' ')[0]}</b><br>
                        <span style="font-size:0.8rem; font-weight:700;">${event.date.split(' ')[1].replace(',','')}</span>
                    </div>
                </div>
                <div class="event-content" style="padding: 2rem;">
                    <h3 class="event-title">${event.title}</h3>
                    <p style="color: hsl(var(--text-muted)); margin-bottom: 0.75rem; font-size:0.9rem;">📍 ${event.location}</p>
                    <p style="color: hsl(var(--text-muted)); margin-bottom: 1.5rem;">${event.description.substring(0, 80)}...</p>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-size:0.85rem; color:hsl(var(--text-muted));">👥 ${event.rsvpCount} registered</span>
                        <a href="pages/events.html" class="btn-join" style="font-size: 0.9rem; padding:0.6rem 1.4rem;">Register</a>
                    </div>
                </div>`;
            eventsGrid.appendChild(card);
        });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
});

