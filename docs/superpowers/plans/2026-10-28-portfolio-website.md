# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a clean, responsive, high-performance personal portfolio website for Sandeep Sawant with Dark/Light theme toggle based on his verified LinkedIn profile.

**Architecture:** Single-page static web application using semantic HTML5, modern CSS with CSS custom properties for dual theming, and lightweight vanilla JavaScript for theme toggling and responsive navigation. Zero external build dependencies.

**Tech Stack:** HTML5, CSS3 (Modern Flexbox/Grid, CSS Variables), Vanilla JavaScript (ES6+).

**Spec:** `docs/superpowers/specs/2026-10-28-portfolio-website-design.md`

## Global Constraints

- Name: Sandeep Sawant
- Role: Senior React.js Developer
- Location: Kalyan / Thane, Maharashtra, India
- Email: `devsandeepsawant@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/sandeep-sawant-developer/`
- No hallucinated jobs, companies, dates, or skills.
- Default theme: Dark mode, with instant Light mode toggle and `localStorage` persistence.
- Zero external build step required (runs directly in browser).

---

### Task 1: HTML Structure & Content (`index.html`)

**Files:**
- Create: `index.html`

**Interfaces:**
- Produces: Complete semantic HTML skeleton with `#hero`, `#about`, `#work`, `#experience`, `#skills`, `#education`, and `#contact` IDs for CSS styling and JS navigation.

- [ ] **Step 1: Create `index.html` with full semantic layout and verified content**
  - Include `<meta name="viewport">` and SEO/social meta tags.
  - Header with "SS" monogram avatar, navigation links, and theme toggle button.
  - Hero section with headline, value statement, status badge, and CTA buttons (`mailto:devsandeepsawant@gmail.com`, LinkedIn link).
  - About section with verbatim profile summary and metric counters (18+ Years, 50+ Apps, 95+ Core Web Vitals, 25% Speed Boost).
  - Featured Work section containing 3 highlight cards (Dubai React app, Sublimis e-commerce/travel, Accessibility & Performance).
  - Experience timeline section with 5 verified roles (Freelance, Sublimis, Cox & Kings, Asentech, ImageOnline).
  - Skills section categorized into Frontend Core, Performance & Architecture, Design & Standards.
  - Education and Certification section.
  - Footer with contact callout and social links.

- [ ] **Step 2: Verify HTML file structure and syntax**
  Check that all tags close properly and all anchors point to valid IDs or URLs.

- [ ] **Step 3: Commit `index.html`**
  ```bash
  git add index.html
  git commit -m "feat: create semantic HTML structure and content"
  ```

---

### Task 2: Modern Responsive Styling with Dark/Light Themes (`style.css`)

**Files:**
- Create: `style.css`

**Interfaces:**
- Consumes: Semantic classes and IDs defined in `index.html`.
- Produces: CSS variables on `:root` and `[data-theme="light"]`, responsive grid/flex layouts, typography, card designs, and timeline styling.

- [ ] **Step 1: Define CSS Custom Properties for dual theming**
  - Dark theme tokens: `--bg-primary: #0f172a`, `--bg-secondary: #1e293b`, `--text-primary: #f8fafc`, `--text-secondary: #94a3b8`, `--accent: #38bdf8`, `--border: #334155`.
  - Light theme tokens: `--bg-primary: #ffffff`, `--bg-secondary: #f8fafc`, `--text-primary: #0f172a`, `--text-secondary: #475569`, `--accent: #0284c7`, `--border: #e2e8f0`.

- [ ] **Step 2: Implement typography, layout, and component styles**
  - Clean system font stack (`system-ui, -apple-system, sans-serif`).
  - Monogram avatar badge styling ("SS").
  - Hero section typography and responsive CTA buttons.
  - Card components for Featured Work with hover elevation and tech tags.
  - Vertical timeline layout with milestone dots and job metadata.
  - Skill badge pills with soft borders and accent highlights.
  - Clean responsive grid layout adapting from 1 column on mobile to 2/3 columns on desktop.

- [ ] **Step 3: Implement responsive media queries**
  - Mobile breakpoint (max-width: 768px): collapsible navigation, single column cards, adjusted typography.

- [ ] **Step 4: Commit `style.css`**
  ```bash
  git add style.css
  git commit -m "feat: implement responsive styling with dark and light themes"
  ```

---

### Task 3: Interactive Behavior (`script.js`)

**Files:**
- Create: `script.js`

**Interfaces:**
- Consumes: Theme toggle button (`#theme-toggle`) and nav links in `index.html`.
- Produces: Theme switching logic, persistence in `localStorage`, and mobile navigation drawer.

- [ ] **Step 1: Write theme toggle logic**
  - Check `localStorage.getItem('theme')` or system `prefers-color-scheme`.
  - Toggle `data-theme="light"` on `document.documentElement`.
  - Update toggle button icon/text (`🌙` / `☀️`).
  - Save selection to `localStorage`.

- [ ] **Step 2: Write smooth scroll & active link highlighting**
  - Handle smooth scrolling to internal anchors.
  - Highlight current section in navigation bar during scroll.

- [ ] **Step 3: Commit `script.js`**
  ```bash
  git add script.js
  git commit -m "feat: add theme toggle and interactive navigation script"
  ```

---

### Task 4: End-to-End Verification & Browser Preview

**Files:**
- Verify: `index.html`, `style.css`, `script.js`

- [ ] **Step 1: Verify file contents and ensure zero errors**
  - Confirm all links work (`mailto:devsandeepsawant@gmail.com`, LinkedIn URL).
  - Verify theme switcher toggles between dark and light themes.
  - Verify mobile responsiveness layout rules.

- [ ] **Step 2: Provide clear, simple instructions for the user to open and view the website in their browser**
