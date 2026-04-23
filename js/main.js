/**
 * BCE Alumni Portal — Global Logic
 * Handles: Reveal Animations, Stats Counter, Navigation, Parallax, and Dynamic Grids
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Global Magnetic Navigation ---
    const navLinks = document.querySelector('.nav-links');
    const highlighter = document.createElement('div');
    highlighter.className = 'nav-highlighter';
    if (navLinks) {
        navLinks.appendChild(highlighter);

        const links = navLinks.querySelectorAll('a');
        const activeLink = navLinks.querySelector('a.active');

        const updateHighlighter = (el) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const parentRect = navLinks.getBoundingClientRect();
            highlighter.style.width = `${rect.width}px`;
            highlighter.style.left = `${rect.left - parentRect.left}px`;
            highlighter.style.opacity = '1';
        };

        links.forEach(link => {
            link.addEventListener('mouseenter', () => updateHighlighter(link));
        });

        navLinks.addEventListener('mouseleave', () => {
            if (activeLink) {
                updateHighlighter(activeLink);
            } else {
                highlighter.style.opacity = '0';
            }
        });

        // Initialize position
        setTimeout(() => updateHighlighter(activeLink), 100);
    }

    // --- 2. Parallax Hero Effect (Enhanced) ---
    const hero = document.querySelector('.hero');
    const parallaxLayers = document.querySelectorAll('.hero-parallax-layer');
    
    if (hero && parallaxLayers.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < 1000) { 
                parallaxLayers.forEach(layer => {
                    const speed = layer.dataset.speed || 0.2;
                    layer.style.transform = `translateY(${scrolled * speed}px)`;
                    
                    // Add subtle rotation to the logo layer if it exists
                    if (layer.classList.contains('hero-logo-wrap')) {
                        layer.style.transform += ` rotate(${scrolled * 0.02}deg)`;
                    }
                });
                
                // Fade out hero content group as well
                const heroContent = document.querySelector('.hero-content');
                if (heroContent) {
                    heroContent.style.opacity = 1 - (scrolled / 700);
                }
            }
        }, { passive: true });
    }

    // --- 3. Scroll Progress & Header Visibility ---
    const scrollProgress = document.getElementById('scrollProgress');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (scrollProgress) {
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            scrollProgress.style.width = ((window.scrollY / height) * 100) + '%';
        }

        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                navbar.style.background = 'rgba(255, 255, 255, 0.9)';
                navbar.style.height = '70px';
            } else {
                navbar.style.boxShadow = 'none';
                navbar.style.background = 'rgba(255, 255, 255, 0.8)';
                navbar.style.height = '80px';
            }
        }
    }, { passive: true });

    // --- 4. Staggered Reveal Animations (Premium) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('active');
                    if (entry.target.querySelector('[data-target]')) {
                        animateStats(entry.target);
                    }
                }, delay);
                // Unobserve after animating for performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const applyStagger = () => {
        document.querySelectorAll('.alumni-grid, .events-grid, .stat-card-wrap, .obj-grid-premium').forEach(grid => {
            grid.querySelectorAll('.reveal').forEach((el, index) => {
                el.dataset.delay = index * 100; // Faster stagger for premium feel
            });
        });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };

    applyStagger();

    // Re-apply stagger when dynamic content is loaded
    window.addEventListener('contentLoaded', applyStagger);

    // --- 5. Stats Counter ---
    function animateStats(container) {
        container.querySelectorAll('[data-target]').forEach(stat => {
            if (stat.getAttribute('data-animated') === 'true') return;
            stat.setAttribute('data-animated', 'true');

            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;

            const update = () => {
                current += increment;
                if (current < target) {
                    stat.innerText = Math.floor(current).toLocaleString();
                    requestAnimationFrame(update);
                } else {
                    stat.innerText = target.toLocaleString() + '+';
                }
            };
            update();
        });
    }

    // --- 6. Back to Top ---
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 500);
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- 7. Skeleton Loading Logic ---
    const showSkeletons = (container, count, className) => {
        if (!container) return;
        container.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const skeleton = document.createElement('div');
            skeleton.className = `${className} skeleton`;
            container.appendChild(skeleton);
        }
    };

    // --- 8. Homepage: Featured Alumni Grid ---
    const alumniGrid = document.getElementById('featured-grid');
    if (alumniGrid && typeof alumniData !== 'undefined') {
        showSkeletons(alumniGrid, 3, 'alumni-card');

        // Simulate loading for effect (Suggestion #8)
        setTimeout(() => {
            alumniGrid.innerHTML = '';
            alumniData.slice(0, 3).forEach(alumnus => {
                const card = document.createElement('a');
                card.href = `pages/directory.html?id=${alumnus.id}`;
                card.className = 'alumni-card reveal';

                const badgesHtml = alumnus.badges
                    ? alumnus.badges.slice(0, 2).map(b => `<span class="badge-chip">${b}</span>`).join('')
                    : '';

                card.innerHTML = `
                    <div class="card-img">
                        <img src="${alumnus.image}" alt="${alumnus.name}" loading="lazy">
                    </div>
                    <h3 class="card-name">${alumnus.name}</h3>
                    <span class="card-role">${alumnus.role} @ ${alumnus.company}</span>
                    <div class="badge-row">${badgesHtml}</div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; padding-top:1rem; border-top:1px solid var(--bg-secondary);">
                        <span class="batch-tag">Class of ${alumnus.batch}</span>
                        <span style="font-weight:700; font-size:0.85rem; color:var(--nav-navy);">${alumnus.branch}</span>
                    </div>
                `;
                alumniGrid.appendChild(card);
            });
            window.dispatchEvent(new Event('contentLoaded'));
        }, 800);
    }

    // --- 9. Homepage: Events Preview Grid ---
    const eventsGrid = document.getElementById('events-preview-grid');
    if (eventsGrid && typeof eventsData !== 'undefined') {
        showSkeletons(eventsGrid, 3, 'event-card');

        setTimeout(() => {
            eventsGrid.innerHTML = '';
            eventsData.filter(e => e.category === 'Upcoming').slice(0, 3).forEach(event => {
                const card = document.createElement('div');
                card.className = 'event-card reveal';
                card.innerHTML = `
                    <div class="card-img">
                        <img src="${event.image}" alt="${event.title}" loading="lazy">
                    </div>
                    <div style="font-size:0.8rem; font-weight:700; color:var(--modern-gold); text-transform:uppercase; margin-bottom:0.5rem; letter-spacing:0.05em;">
                        ${event.date}
                    </div>
                    <h3 class="card-name" style="margin-bottom:0.75rem;">${event.title}</h3>
                    <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem;">${event.description.substring(0, 85)}...</p>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-size:0.85rem; color:var(--text-light);">📍 ${event.location}</span>
                        <a href="pages/events.html" style="font-weight:700; color:var(--nav-navy); text-decoration:none; font-size:0.9rem;">Register →</a>
                    </div>
                `;
                eventsGrid.appendChild(card);
            });
            window.dispatchEvent(new Event('contentLoaded'));
        }, 1000);
    }

    // --- 10. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const isOpen = mobileMenu.classList.contains('active');
            menuToggle.innerHTML = isOpen
                ? `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
            });
        });
    }

    // --- 11. Kinetic Typography (Suggestion #2) ---
    const cycleEl = document.querySelector('.txt-cycle');
    if (cycleEl) {
        const words = JSON.parse(cycleEl.getAttribute('data-words'));
        let index = 0;

        setInterval(() => {
            cycleEl.classList.add('fade-out');
            setTimeout(() => {
                index = (index + 1) % words.length;
                cycleEl.textContent = words[index];
                cycleEl.classList.remove('fade-out');
                cycleEl.classList.add('fade-in');
                setTimeout(() => cycleEl.classList.remove('fade-in'), 400);
            }, 400);
        }, 3000);
    }

    // --- 12. SVG Signature Trigger ---
    const sigObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.5 });

    const sigPath = document.querySelector('.sig-path');
    if (sigPath) sigObserver.observe(sigPath);
});
