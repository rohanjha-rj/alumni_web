# BCE Alumni Welfare Association — Official Website

The official website of the **BCE Alumni Welfare Association**, representing graduates of Bhagalpur College of Engineering. This project utilizes a modern, modular, and component-based architecture built with pure HTML, CSS, and Vanilla JavaScript.

---

## 📁 Project Structure

The project has been restructured for maximum efficiency, modularity, and ease of maintenance.

```
alumni_web/
├── index.html                   # Home page
├── 404.html                     # Custom 404 error page
│
├── assets/
│   └── img/                     # Categorized assets
│       ├── alumni/              # Leadership & alumni headshots
│       ├── branding/            # Logos and identity
│       ├── college/             # Campus photography
│       └── ui/                  # UI elements and backgrounds
│
├── components/                  # Reusable HTML snippets
│   ├── header.html              # Global navigation
│   └── footer.html              # Global footer
│
├── css/
│   ├── base.css                 # Design tokens (colors, typography, resets)
│   ├── layout.css               # Structural components (Nav, Hero, Footer)
│   ├── components.css           # UI elements (Cards, Buttons, Forms)
│   └── pages/                   # Page-specific modular styles
│       ├── about.css
│       ├── leadership.css
│       └── ...
│
├── js/
│   ├── core/
│   │   ├── components.js        # Dynamic component loader & shared logic
│   │   └── main.js              # Global interactions & animations
│   └── data/
│       ├── alumni.js            # Alumni database
│       └── events.js            # Events database
│
└── pages/                       # Website subpages
    ├── about.html
    ├── leadership.html
    ├── directory.html
    ├── events.html
    ├── objectives.html
    └── contact.html
```

---

## 🚀 Key Architecture Features

### 1. Component-Based System
Instead of duplicating the Header and Footer across every file, the project uses a custom-built loader in `js/core/components.js`. 
- **Consistency**: Change the header once, and it updates across all pages.
- **Active States**: Navigation links automatically highlight the active page.
- **Dynamic Mobile Menu**: Centrally managed logic for mobile navigation.

### 2. Modular CSS (Design System)
The styling is split into logical modules to prevent "CSS Bloat":
- `base.css`: The "Source of Truth" for brand colors, typography, and variables.
- `layout.css`: Handles the global structure of the site.
- `components.css`: Contains the "Design Language" for cards, buttons, and premium UI elements.
- `pages/`: Specific styles for complex page layouts only.

### 3. Root-Relative Pathing
All assets and links use root-relative paths (e.g., `/assets/img/...`), ensuring that the site remains functional regardless of directory depth.

---

## ⚙️ Modern UI/UX Features

- **Multi-layer Parallax**: High-end hero effects on the home page.
- **Reveal Animations**: IntersectionObserver-powered staggered reveals for all content.
- **Kinetic Typography**: Dynamic word-cycling in the hero section.
- **Floating Label Forms**: Premium contact form experience with smart validation.
- **RSVP Persistence**: LocalStorage-based event registration tracking.
- **Live Search & Filter**: Instant alumni directory filtering with skeleton loading states.

---

## 🌐 Running Locally

**IMPORTANT**: Because this project uses the `fetch()` API to load shared components and assets, it **must** be viewed through a web server. Opening the `.html` files directly from your file explorer will result in CORS errors.

### Recommended Methods:

**Option 1 — VS Code (Best Experience):**
Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension. Right-click `index.html` and select **"Open with Live Server"**.

**Option 2 — Python:**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Option 3 — Node.js:**
```bash
npx serve .
```

---

## 📝 Maintenance & Data Updates

### Adding Alumni
Update `js/data/alumni.js`. Each entry is a structured object. Use `/assets/img/alumni/` for profile pictures.

### Adding Events
Update `js/data/events.js`. Ensure you set the `category` to either `"Upcoming"` or `"Past"`.

---

## 📬 Contact & Governance

**BCE Alumni Welfare Association**  
Bhagalpur College of Engineering  
Bhagalpur, Bihar — 813 210, India  
✉ alumni@bcebhagalpur.ac.in

---

*© 2026 BCE Alumni Welfare Association. All Rights Reserved.*