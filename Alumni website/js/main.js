/**
 * BCE Setu Alumni Portal - Global Logic
 * Centralized script for Theme, Navigation, and Reveal Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic (Disabled per user request)
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    if (themeToggle) themeToggle.style.display = 'none';
    if (mobileThemeToggle) mobileThemeToggle.style.display = 'none';
    
    // Ensure light mode is default
    body.setAttribute('data-theme', 'light');

    // 2. Mobile Menu Logic
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

    // 3. Scroll Progress Logic
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / height) * 100;
            scrollProgress.style.width = scrolled + '%';
        });
    }

    // 4. Intersection Observer (Reveal Animations & Stats)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Trigger stats animation if it's the quick-nav section
                if (entry.target.classList.contains('quick-nav')) {
                    animateStats();
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 5. Stats Animation Function
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            if (stat.getAttribute('data-animated') === 'true') return;
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            stat.setAttribute('data-animated', 'true');
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

    // 6. Homepage Specific Content Rendering
    const alumniGrid = document.getElementById('featured-grid');
    if (alumniGrid && typeof alumniData !== 'undefined') {
        alumniData.slice(0, 3).forEach(alumnus => {
            const card = document.createElement('div');
            card.className = 'alumni-card reveal';
            card.innerHTML = `
                <div class="card-img" style="height: 240px; overflow: hidden;">
                    <img src="${alumnus.image}" alt="${alumnus.name}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="card-info" style="padding: 2rem;">
                    <h3 class="card-name" style="font-size: 1.4rem; color: hsl(var(--primary));">${alumnus.name}</h3>
                    <span class="card-role" style="color: hsl(var(--text-muted)); display: block; margin-bottom: 1rem;">${alumnus.role} @ ${alumnus.company}</span>
                    <div class="card-meta" style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 1rem;">
                        <span class="batch-tag">Class of ${alumnus.batch}</span>
                        <span style="font-weight: 700; color: hsl(var(--secondary)); font-size: 0.85rem;">${alumnus.branch}</span>
                    </div>
                </div>
            `;
            card.onclick = () => window.location.href = `profile.html?id=${alumnus.id}`;
            alumniGrid.appendChild(card);
        });
    }

    const eventsGrid = document.getElementById('events-preview-grid');
    if (eventsGrid && typeof eventsData !== 'undefined') {
        eventsData.filter(e => e.category === 'Upcoming').slice(0, 3).forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card reveal';
            card.innerHTML = `
                <div class="event-img" style="position: relative; height: 200px; overflow: hidden;">
                    <img src="${event.image}" alt="${event.title}" style="width:100%; height:100%; object-fit:cover;">
                    <div class="event-date-badge" style="position: absolute; top: 1rem; right: 1rem; background: white; padding: 0.5rem 1rem; border-radius: 8px; text-align: center; box-shadow: var(--shadow-md); color: var(--primary);">
                        <b>${event.date.split(' ')[0]}</b><br>
                        <span style="font-size: 0.8rem; font-weight: 700;">${event.date.split(' ')[1].replace(',', '')}</span>
                    </div>
                </div>
                <div class="event-content" style="padding: 2rem;">
                    <h3 class="event-title">${event.title}</h3>
                    <p style="color: hsl(var(--text-muted)); margin-bottom: 1.5rem;">${event.description.substring(0, 80)}...</p>
                    <a href="events.html" class="btn-join" style="width: 100%; font-size: 0.9rem;">Register Now</a>
                </div>
            `;
            eventsGrid.appendChild(card);
        });
    }
});
