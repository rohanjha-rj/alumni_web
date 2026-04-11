# BCE Setu — Alumni Portal

A premium, static alumni portal for **Bhagalpur College of Engineering (BCE)**, established 1960. Built with vanilla HTML, CSS, and JavaScript.

## 🌐 Live Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with hero, stats, events & featured alumni |
| Directory | `pages/directory.html` | Searchable & filterable alumni directory |
| Events | `pages/events.html` | Upcoming & past events with RSVP |
| Stories | `pages/stories.html` | Alumni success story articles |
| Job Board | `pages/jobs.html` | Jobs posted by alumni, for alumni |
| Mentorship | `pages/mentorship.html` | Mentor matching & request system |
| Donation | `pages/donate.html` | Campaign fundraising & bank transfer |
| World Map | `pages/map.html` | Interactive Leaflet.js alumni world map |
| Register | `pages/register.html` | Multi-step alumni registration form |
| Login | `pages/login.html` | Alumni login page |
| Profile | `pages/profile.html` | Dynamic alumni profile view |
| Admin Login | `admin/login.html` | Secure admin entry (credentials: admin@bcesetu.ac.in / admin@2026) |
| Admin Dashboard | `admin/dashboard.html` | Admin overview, pending approvals |
| 404 | `404.html` | Custom error fallback page |

## 📁 Project Structure

```
alumni_web/
├── index.html               # Homepage
├── 404.html                 # Error page
├── README.md
├── pages/                   # All public HTML pages
├── admin/                   # Admin panel
│   ├── login.html           # Admin login (Feature #3)
│   ├── dashboard.html       # Admin dashboard
│   └── css/admin.css        # Admin-specific styles
├── assets/
│   └── images/              # Logos and assets
├── css/
│   └── style.css            # Global design system
└── js/
    ├── main.js              # Global logic (theme, nav, notifications)
    └── data/
        ├── alumni.js        # Alumni data with badges, lat/lng, mentor flags
        └── events.js        # Events & jobs data
```

## ✨ Features

1. **Alumni Job Board** — Post & browse alumni-exclusive jobs
2. **Mentorship Matching** — Find & request mentors by branch/industry
3. **Admin Login** — Secure credential check before dashboard access
4. **Interactive World Map** — Leaflet.js map with alumni pins
5. **Advanced Search** — Keyword, branch, country, industry, batch filters
6. **Donation Portal** — Campaign progress bars + bank transfer
7. **Dark Mode Toggle** — Persisted in localStorage
8. **Notification Bell** — Animated badge with read/clear functionality
9. **Badge System** — Achievement chips on alumni cards & profiles
10. **PDF Export** — Print-optimised directory view
11. **Event RSVP** — One-click registration with localStorage persistence
12. **Scroll Progress Bar** — Page reading progress indicator
13. **Skeleton Loaders** — Smooth loading states on directory
14. **Autocomplete Search** — Name suggestions while typing
15. **Back to Top Button** — Smooth scroll back to top

## 🎨 Tech Stack

- **HTML5** — Semantic structure
- **Vanilla CSS** — Custom design system with HSL tokens, dark mode, animations
- **Vanilla JavaScript** — No frameworks, pure ES6+
- **Leaflet.js** (CDN) — Interactive world map
- **Unsplash** — Placeholder images
- **Google Fonts** — Outfit + Poppins typography

## 🔐 Admin Access

- URL: `admin/login.html`
- Email: `admin@bcesetu.ac.in`
- Password: `admin@2026`

---
© 2026 BCE Setu Alumni Portal