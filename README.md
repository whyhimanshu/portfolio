# 🚀 Himanshu Verma — Portfolio

A modern, visually stunning personal portfolio website built with **React 19**, **Vite 8**, **Tailwind CSS 4**, and **Three.js**. Features an immersive 3D particle galaxy background, glassmorphism UI, smooth animations, and a fully responsive dark-mode design in a blue, black, and white color palette.

> **Live URL**: https://himanshuverma.me  
> **Author**: Himanshu Verma — Software Development Engineer  
> **Contact**: [vermahim402@gmail.com](mailto:vermahim402@gmail.com), [himanshuverma1.it27@gmail.com](mailto:himanshuverma1.it27@gmail.com)

---

## 📸 Preview

| Home (Hero + 3D Scene) | Projects | Skills |
|:-:|:-:|:-:|
| Dark hero section with animated particle field & floating geometric shapes | Project cards with gradient accents | Skill category cards with animated progress bars |

---

## ✨ Key Features

- **3D Galaxy Background** — Interactive particle field with floating wireframe shapes (icosahedron, octahedron, torus, tetrahedron, dodecahedron) powered by Three.js. Supports `hero` and `subtle` variants for different page contexts.
- **Mouse Parallax** — Camera subtly follows cursor movement for depth and immersion.
- **Glassmorphism Cards** — Frosted-glass UI cards with backdrop blur, hover lift, and glowing borders.
- **Animated Navbar** — Fixed navigation with scroll-aware backdrop blur, glow-on-hover links, and active link shimmer animation. Mobile-responsive hamburger menu.
- **Responsive Design** — Fully responsive across desktop, tablet, and mobile breakpoints.
- **Client-Side Routing** — Multi-page SPA with React Router v7 (5 routes).
- **Centralized Data Layer** — All content (personal info, projects, skills, certifications, achievements, experience) driven from a single `mock.js` file for easy updates.
- **SEO Optimized** — Meta description, theme-color, semantic HTML, descriptive `<title>` tag.
- **Custom Scrollbar** — Styled scrollbar matching the blue design theme.
- **Smooth Scroll & Micro-Animations** — Float, pulse, skill bar fill, and card hover transitions.

---

## 🛠️ Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **UI Library** | [React](https://react.dev) | 19.2.4 | Component-based UI |
| **Build Tool** | [Vite](https://vite.dev) | 8.0.1 | Dev server, HMR, bundling |
| **Routing** | [React Router DOM](https://reactrouter.com) | 7.14.0 | Client-side SPA routing |
| **3D Graphics** | [Three.js](https://threejs.org) | 0.183.2 | Particle backgrounds & geometric shapes |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) | 4.2.2 | Utility-first CSS framework |
| **Animation Plugin** | [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) | 1.0.7 | Animation utilities for Tailwind |
| **CSS Utilities** | [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.5.0 | Merge Tailwind class names without conflicts |
| **Class Helpers** | [clsx](https://github.com/lukeed/clsx) | 2.1.1 | Conditional class name construction |
| **Class Variants** | [class-variance-authority](https://cva.style) | 0.7.1 | UI component variant management |
| **Icons** | [Lucide React](https://lucide.dev) | 1.7.0 | Beautiful, consistent icon set |
| **Linting** | [ESLint](https://eslint.org) | 9.39.4 | Code quality & consistency |
| **CSS Processing** | [PostCSS](https://postcss.org) + [Autoprefixer](https://github.com/postcss/autoprefixer) | 8.5.8 / 10.4.27 | CSS transformations & vendor prefixes |
| **Fonts** | [Google Fonts](https://fonts.google.com) | — | Figtree (body) + JetBrains Mono (code) |

---

## 📁 Project Structure

```
portfolio/
├── index.html                  # HTML entry point (Vite SPA)
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration (React plugin)
├── tailwind.config.ts          # Tailwind CSS theme customization
├── eslint.config.js            # ESLint flat config (React hooks + refresh)
├── .gitignore                  # Git ignore rules
│
├── public/                     # Static assets (served as-is)
│   ├── favicon.svg             # Browser tab icon
│   └── icons.svg               # SVG icon sprite
│
└── src/                        # Application source code
    ├── main.jsx                # React DOM entry — renders <App /> into #root
    ├── App.jsx                 # Root component — BrowserRouter + Routes + Layout
    ├── App.css                 # Global styles, animations, utility classes
    ├── index.css               # Tailwind directives + CSS custom properties
    │
    ├── components/             # Reusable UI components
    │   ├── Navbar.jsx          # Fixed navbar with scroll blur + mobile menu
    │   ├── Footer.jsx          # Site footer with social links + branding
    │   ├── ThreeScene.jsx      # Three.js 3D particle background (hero/subtle)
    │   └── BrandIcons.jsx      # Custom SVG icons (GitHub, LinkedIn)
    │
    ├── pages/                  # Route-level page components
    │   ├── Home.jsx            # Landing page — hero, education, achievements, certifications, CTA
    │   ├── Projects.jsx        # Project showcase with expandable cards
    │   ├── Experience.jsx      # Work experience timeline
    │   ├── Skills.jsx          # Skill categories with animated progress bars
    │   └── Contact.jsx         # Contact form with social links
    │
    └── data/                   # Centralized content store
        └── mock.js             # All portfolio data (personal info, projects, skills, etc.)
```

---

## 📄 Pages & Routes

| Route | Page Component | Description |
|-------|---------------|-------------|
| `/` | `Home` | Full-screen hero with 3D particle background, name, title, bio, contact chips, CTA buttons, education cards, achievements, and certifications |
| `/projects` | `Projects` | Project cards with title, tagline, description, tech stack tags, and links (live / GitHub). Uses `ThreeScene` subtle variant as background |
| `/experience` | `Experience` | Work experience and extra-curricular activities timeline. Features `ThreeScene` subtle variant |
| `/skills` | `Skills` | Skill categories (7 groups) with `SkillCategoryCard` and `SkillBar` components showing animated progress bars. `ThreeScene` subtle variant background |
| `/contact` | `Contact` | Contact form (name, email, message) with focus/blur animations, social links, and `ThreeScene` subtle background |

---

## 🧩 Components

### `ThreeScene.jsx`
The centerpiece 3D component using raw Three.js (no React Three Fiber wrapper):

- **Particles**: 350–600 particles with additive blending spread across the scene
- **Floating Shapes** (hero variant): 5 wireframe geometries — Icosahedron, Octahedron, Torus, Tetrahedron, Dodecahedron — with independent rotation and floating animation
- **Connection Lines** (hero variant): Dynamic line segments connecting nearby particles
- **Mouse Parallax**: Camera position smoothly follows cursor
- **Responsive**: Handles window resize and cleanup on unmount
- **Variants**:
  - `hero` — Large shapes, fast particles, connection lines, close camera (z=30)
  - `subtle` — Small dots only, slow rotation, distant camera (z=40)

### `Navbar.jsx`
- Fixed position with scroll-aware backdrop blur (`blur(6px)` → `blur(18px)`)
- Gradient logo `<HV />`
- Desktop link list with hover glow effect and active shimmer animation
- Mobile hamburger toggle (Lucide `Menu`/`X` icons) with animated slide-down menu
- Auto-closes mobile menu on route change

### `Footer.jsx`
- Gradient background fading to dark
- Brand logo + truncated bio
- Social icon circles (GitHub, LinkedIn, Email) with hover lift
- Copyright line with heart icon

### `BrandIcons.jsx`
- Custom inline SVG components for GitHub and LinkedIn icons (not available in Lucide)
- Matches Lucide styling API (`size` prop)

---

## 📊 Data Layer (`src/data/mock.js`)

All portfolio content is centralized in a single file for easy editing:

| Export | Type | Description |
|--------|------|-------------|
| `personalInfo` | Object | Name, title, email, phone, location, LinkedIn, GitHub, bio, tagline |
| `navLinks` | Array | Navigation items with label and path |
| `education` | Array | Degree, institution, duration, score, icon |
| `projects` | Array | Title, tagline, description, details, tech stack, URLs, accent color |
| `skillCategories` | Array | 7 categories with skills and proficiency levels (0–100) |
| `certifications` | Array | Title, code, score, date, icon |
| `achievements` | Array | Title, description, icon |
| `experience` | Array | Role, organization, duration, description, tags, icon |
| `interests` | Array | List of interest strings |
| `socialLinks` | Array | Label, URL, icon identifier |

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#050a14` | Page background (deep navy-black) |
| Primary Blue | `#3b82f6` | CTAs, borders, accents |
| Light Blue | `#60a5fa` | Icons, secondary text, links |
| Pale Blue | `#93c5fd` | Ambient light, subtle highlights |
| Lightest Blue | `#dbeafe` | Wireframe shapes, muted accents |
| White | `#ffffff` | Headings, primary text |

### Typography
| Font | Weight Range | Usage |
|------|-------------|-------|
| **Figtree** | 300–900 | Body text, headings, UI |
| **JetBrains Mono** | 400–600 | Code blocks, monospace text |

### Animations (defined in `App.css`)
| Animation | Utility Class | Effect |
|-----------|--------------|--------|
| `float` | `.animate-float` | Smooth vertical bob (4s loop) |
| `pulse` | — | Scale + opacity pulse (2s loop) |
| `nav-glow-shimmer` | `.nav-link-active` | Box-shadow shimmer on active nav link |
| `skill-bar-fill` | `.skill-bar-fill` | Width transition for progress bars |
| Card hover | `.card-hover` | Translate up + glowing box-shadow |
| Nav link glow | `.nav-link:hover` | Multi-layer glow with text shadow |

### Tailwind CSS Configuration (`tailwind.config.ts`)
- **Dark mode**: Class-based (`darkMode: ["class"]`)
- **Custom colors**: HSL CSS custom properties for theming (background, foreground, primary, secondary, muted, accent, destructive)
- **Custom radius**: `--radius` CSS variable system
- **Accordion keyframes**: Built-in up/down animations
- **Plugin**: `tailwindcss-animate` for animation utilities

---

## ⚙️ Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.js` | Vite dev/build config with `@vitejs/plugin-react` |
| `tailwind.config.ts` | Tailwind theme extensions (colors, radius, animations) |
| `eslint.config.js` | ESLint flat config with React Hooks + React Refresh rules |
| `.gitignore` | Ignores `node_modules`, `dist`, editor files, logs |
| `index.html` | SPA shell with meta tags, favicon, and `#root` mount point |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/whyhimanshu/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start dev server with HMR (Hot Module Replacement)
npm run dev
```

Opens at `http://localhost:5173` by default.

### Production Build

```bash
# Build optimized static files to ./dist
npm run build

# Preview the production build locally
npm run preview
```

### Linting

```bash
# Run ESLint across the project
npm run lint
```

---

## 📦 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite` | Start Vite dev server with HMR |
| `build` | `vite build` | Create optimized production bundle in `./dist` |
| `preview` | `vite preview` | Serve the production build locally |
| `lint` | `eslint .` | Lint all JS/JSX files with ESLint |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

---

## 📜 License

This project is private and not currently licensed for redistribution.

---

## 🙏 Acknowledgements

- [React](https://react.dev) — UI library
- [Vite](https://vite.dev) — Lightning-fast build tool
- [Three.js](https://threejs.org) — 3D graphics engine
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS
- [Lucide Icons](https://lucide.dev) — Beautiful open-source icons
- [Google Fonts](https://fonts.google.com) — Figtree & JetBrains Mono typefaces

---

<p align="center">
  Crafted with 💙 by <a href="https://github.com/whyhimanshu">Himanshu Verma</a>
</p>
