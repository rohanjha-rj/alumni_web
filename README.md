# BCE Alumni Welfare Association — Official Website

The official website of the **BCE Alumni Welfare Association**, representing graduates of Bhagalpur College of Engineering. Built with pure HTML, CSS, and Vanilla JavaScript — no frameworks, no dependencies.

---

## 📁 Project Structure

```
alumni_web/
│
├── index.html                   # Home page
│
├── pages/
│   ├── about.html               # About Us — history, mission, vision, executive committee
│   ├── objectives.html          # Objectives — 8 association objectives
│   ├── directory.html           # Alumni Directory — searchable & filterable list
│   ├── events.html              # Events — upcoming events + past events with photo gallery
│   └── contact.html             # Contact — email, address, and contact form
│
├── css/
│   └── style.css                # Global stylesheet (design system, all components)
│
├── js/
│   ├── main.js                  # Global JS — nav, scroll, animations, stats counter
│   └── data/
│       ├── alumni.js            # Alumni data (used by directory page)
│       └── events.js            # Events data (used by events page)
│
├── assets/
│   └── images/
│       └── association-logo.png # BCE Alumni Welfare Association official logo
│
├── 404.html                     # Custom 404 error page
└── README.md                    # This file
```

---

## 🌐 Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Landing page with hero banner, stats, quick links, events preview, and featured alumni |
| **About Us** | `pages/about.html` | Association history, mission & vision, executive committee |
| **Objectives** | `pages/objectives.html` | 8 core objectives of the association |
| **Directory** | `pages/directory.html` | Searchable alumni list with filters (branch, batch, country, industry) |
| **Events** | `pages/events.html` | Tabbed view — Upcoming Events and Past Events with photo gallery |
| **Contact** | `pages/contact.html` | Contact form, email address, and physical address |

---

## 🎨 Design System

Defined entirely via CSS custom properties in `css/style.css`:

| Token | Value | Purpose |
|-------|-------|---------|
| `--primary` | `hsl(220, 65%, 12%)` | Deep navy — primary brand colour |
| `--secondary` | `hsl(45, 60%, 52%)` | Gold — accent and highlights |
| `--accent` | `hsl(48, 100%, 45%)` | Vivid gold — buttons and CTAs |
| `--bg-main` | `hsl(210, 40%, 98%)` | Light off-white page background |
| `--radius-md` | `16px` | Standard card border radius |
| `--transition-main` | `0.4s cubic-bezier(...)` | Smooth hover/reveal transitions |

**Typography:** [Outfit](https://fonts.google.com/specimen/Outfit) (headings & body) via Google Fonts

---

## ⚙️ JavaScript Features (`js/main.js`)

- **Mobile menu** — full-screen overlay with smooth open/close
- **Scroll progress bar** — top-of-page reading progress indicator
- **Reveal animations** — IntersectionObserver-powered scroll-in effects
- **Stats counter** — animated number counting when section enters viewport
- **Back-to-top button** — appears after scrolling 400px
- **Featured alumni grid** — dynamically rendered from `js/data/alumni.js`
- **Events preview grid** — dynamically rendered from `js/data/events.js`

### Events Page (`pages/events.html`)
- Tabbed UI switching between **Upcoming** and **Past Events**
- **RSVP** for upcoming events (stored in `localStorage`)
- **Photo gallery** for past events section

### Directory Page (`pages/directory.html`)
- Live search with autocomplete
- Filters: branch, country, industry pills, graduation batch
- PDF export via browser print
- Skeleton loaders while filtering

### Contact Page (`pages/contact.html`)
- Client-side contact form with success state
- Direct email link: `alumni@bcebhagalpur.ac.in`

---

## 🚀 Running Locally

This is a static website — no build step required.

**Option 1 — Python (recommended):**
```bash
cd alumni_web
python -m http.server 8765
# Open http://localhost:8765
```

**Option 2 — VS Code:**  
Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, right-click `index.html` → **Open with Live Server**.

**Option 3 — Direct file:**  
Open `index.html` directly in a browser (some JS features may be limited due to CORS).

---

## 🖼️ Logo & Branding

- **Association Logo:** `assets/images/association-logo.png`
- Used in navbar, hero section, about page, footer (all pages), and contact page
- All pages are branded as **BCE Alumni Welfare Association**

---

## 📝 Adding Data

### Alumni
Edit `js/data/alumni.js` — each entry follows this structure:
```js
{
  id: 1,
  name: "Full Name",
  role: "Job Title",
  company: "Company Name",
  batch: "2015",
  branch: "CSE",          // CSE, ECE, ME, Civil, EE
  country: "India",
  industry: "Technology",
  image: "https://...",
  badges: ["Innovation Award"],
  isMentor: true
}
```

### Events
Edit `js/data/events.js` — each entry follows this structure:
```js
{
  id: 1,
  title: "Annual Alumni Meet 2026",
  date: "15 March, 2026",
  time: "10:00 AM",
  location: "BCE Campus, Bhagalpur",
  description: "Brief description of the event.",
  image: "https://...",
  category: "Upcoming",   // or "Past"
  rsvpCount: 142
}
```

---

## 📬 Contact

**BCE Alumni Welfare Association**  
Bhagalpur College of Engineering  
Bhagalpur, Bihar — 813 210, India  
✉ alumni@bcebhagalpur.ac.in

---

*© 2026 BCE Alumni Welfare Association. All Rights Reserved.*