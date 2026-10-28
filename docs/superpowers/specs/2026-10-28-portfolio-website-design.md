# Portfolio Website Design Spec: Sandeep Sawant

## 1. Overview
A fast, accessible, responsive personal portfolio website for Sandeep Sawant, Senior React.js Developer, built from his verified LinkedIn profile and career achievements.

## 2. Goals & Constraints
- **Zero Hallucination:** strictly uses verified jobs, education, skills, and summary from Sandeep's profile.
- **Audience:** Potential clients (freelance / contract) and engineering leaders looking for a senior frontend developer specializing in performance, architecture, and React.
- **Performance & Accessibility:** Semantic HTML5, accessible color contrast (WCAG AA compliant), fast loading with zero build-tool friction.
- **Theme Support:** Clean Dark mode (default) and Light mode with an interactive toggle switch, persisted in `localStorage`.
- **Avatar:** Monogram badge with "SS", easily replaceable by an `avatar.jpg` or `avatar.png` if provided.

## 3. Contact & Profile Data
- **Name:** Sandeep Sawant
- **Role / Headline:** Senior React.js Developer | I help businesses ship fast, scalable web apps that load quickly and convert better | React · Performance · Frontend Architecture | Freelance, Mumbai & Remote
- **Location:** Kalyan / Thane, Maharashtra, India
- **Email:** `devsandeepsawant@gmail.com`
- **LinkedIn:** `https://www.linkedin.com/in/sandeep-sawant-developer/`
- **Summary:** "Slow frontends lose customers. I build Web applications that load fast, scale cleanly and convert better. After 18+ years and 50+ production apps for various industries, including performance optimisation, I take on a few new projects a quarter. If your site feels slow or hard to change, message me."

## 4. Page Structure & Components

### 4.1 Header / Navigation Bar (`<header>`, `<nav>`)
- Brand: Monogram avatar badge "SS" + "Sandeep Sawant".
- Nav Links:
  - About (`#about`)
  - Featured Work (`#work`)
  - Experience (`#experience`)
  - Skills (`#skills`)
  - Education (`#education`)
  - Contact (`#contact`)
- Theme Toggle: Accessible button (🌙 / ☀️) with `aria-label="Toggle dark/light theme"`.

### 4.2 Hero Section (`<section id="hero">`)
- Headline: "Senior React.js Developer"
- Subheading / Value Proposition: "Helping businesses ship fast, scalable web apps that load quickly, convert better, and achieve 95+ Core Web Vitals scores."
- Status Pill: "Available for select freelance & senior frontend projects"
- Call to Action (CTA) buttons:
  - Primary: "Send an Email" (`mailto:devsandeepsawant@gmail.com`)
  - Secondary: "LinkedIn Profile" (`https://www.linkedin.com/in/sandeep-sawant-developer/`, opens in new tab)

### 4.3 About Section (`<section id="about">`)
- Detailed summary text highlighting 18+ years of web engineering and 50+ production apps.
- Key Stat Counters:
  - 18+ Years of Experience
  - 50+ Production Applications
  - 95+ Core Web Vitals & Lighthouse Scores
  - 25% Average Speed Improvement

### 4.4 Featured Work Section (`<section id="work">`)
Three cards showcasing actual project achievements from his work experience:
1. **High-Performance React Applications (Dubai Client)**
   - Role: Freelance Frontend Developer
   - Focus: Performance optimization, responsive UI, modern React architecture.
   - Tags: `React.js`, `Performance`, `Responsive Design`
2. **Travel & E-Commerce Web Platforms (Sublimis Technologies)**
   - Role: Technical Lead
   - Focus: Led team of 6 engineers delivering 3+ React applications; increased load speed by 25% and reduced errors by 30%.
   - Tags: `React.js`, `Architecture`, `Team Leadership`, `SEO`
3. **Core Web Vitals & Accessibility Optimization (WCAG)**
   - Focus: Consistent 95+ Lighthouse scores, accessibility standards compliance, boosted organic traffic by 15%.
   - Tags: `WCAG`, `Core Web Vitals`, `Performance Optimization`

### 4.5 Experience Timeline (`<section id="experience">`)
Vertical interactive timeline:
1. **Freelance Frontend Developer** — Freelance (Oct 2024 – Present)
   - Built and maintained React.js applications for a Dubai-based client with a focus on speed and responsive UI.
2. **Technical Lead - Frontend Developer** — Sublimis Technologies (Mar 2020 – Sep 2024)
   - Directed team of 6 developers, delivered 3+ ReactJS applications, optimized load speed by 25%, reduced errors by 30%, 95% on-time delivery rate.
3. **Team Leader** — Cox & Kings (Sep 2014 – Oct 2019)
   - Team leader delivering web solutions utilizing HTML5, CSS3, and jQuery.
4. **UI Designer** — Asentech India Pvt. Ltd. (Nov 2013 – Jul 2014)
   - Creative UI and web development, political campaign media and website for MP Anurag Thakur.
5. **Sr. Web Developer** — ImageOnline Pvt. Ltd. (Nov 2006 – Nov 2013)
   - Full lifecycle web development across 7+ years of client projects.

### 4.6 Skills & Technologies (`<section id="skills">`)
Categorized chips/badges:
- **Frontend Core:** React.js, JavaScript (ES6+), HTML5, CSS3, Sass, jQuery
- **Performance & Architecture:** Performance Optimization, Core Web Vitals, Frontend Architecture, SEO Best Practices
- **Design & Standards:** Figma, Web Content Accessibility Guidelines (WCAG)

### 4.7 Education & Certifications (`<section id="education">`)
- **MG University:** BCA, Information Technology Project Management (2013 – 2015)
- **Mumbai University:** Bachelor's degree, English Literature (2000 – 2005)
- **Hume High School, Byculla:** SYBA
- **Certifications:** Introduction to Software Engineering

### 4.8 Footer & Contact Section (`<footer id="contact">`)
- Big CTA: "Have a project or opportunity in mind? Let's connect."
- Direct Email button: `devsandeepsawant@gmail.com`
- Social Links: LinkedIn profile
- Copyright notice and fast-loading pledge.

## 5. Technical Architecture & File Structure
```
D:\antigravity-portfolio\
├── index.html       # Semantic HTML5 markup
├── style.css        # Clean CSS with CSS custom properties (variables) for theme switching
├── script.js       # Minimal JS for theme toggle, mobile nav, and smooth scrolling
├── Profile.pdf      # Original LinkedIn PDF
└── docs\
    └── superpowers\
        ├── specs\
        │   └── 2026-10-28-portfolio-website-design.md
        └── plans\
            └── 2026-10-28-portfolio-website.md
```

## 6. Testing & Validation Criteria
- All links work (`mailto:devsandeepsawant@gmail.com` and LinkedIn).
- Theme toggle works smoothly, preserves preference across page refreshes.
- 100% responsive across mobile (375px), tablet (768px), and desktop (1200px+).
- W3C valid HTML and CSS, WCAG AA contrast compliance.
- No console errors or missing assets.
