import React, { useState, useEffect } from 'react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('sandeep-portfolio-theme') || 'dark';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Update theme on html element and persist
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sandeep-portfolio-theme', theme);
  }, [theme]);

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 140;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Navigation */}
      <header className="header">
        <div className="container nav-container">
          <a href="#hero" className="brand" aria-label="Sandeep Sawant Home" onClick={closeMenu}>
            <div className="avatar-badge" aria-hidden="true">SS</div>
            <div className="brand-text">
              <span className="brand-name">Sandeep Sawant</span>
              <span className="brand-role">Senior React Developer</span>
            </div>
          </a>

          <button
            id="menu-toggle"
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`} id="nav-menu">
            <ul className="nav-list">
              <li>
                <a
                  href="#about"
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Featured Work
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
            <button
              id="theme-toggle"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <span id="theme-icon" aria-hidden="true">
                {theme === 'dark' ? '☀️' : '🌙'}
              </span>
              <span className="theme-text">Theme</span>
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="container hero-container">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Available for select freelance &amp; senior frontend projects</span>
            </div>
            <h1 className="hero-title">
              Senior React.js Developer &amp; <span className="highlight-text">Frontend Architect</span>
            </h1>
            <p className="hero-subtitle">
              I help businesses ship fast, scalable web apps that load quickly, convert better, and achieve 95+ Core Web Vitals scores. Based in Kalyan / Thane, Mumbai &amp; working remotely worldwide.
            </p>

            <div className="hero-actions">
              <a href="mailto:devsandeepsawant@gmail.com" className="btn btn-primary">
                <span>Get in Touch</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sandeep-sawant-developer/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <span>LinkedIn Profile</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">About Me</span>
              <h2 className="section-title">Performance-First Frontend Engineering</h2>
            </div>

            <div className="about-card">
              <div className="about-quote">
                <p>
                  "Slow frontends lose customers. I build Web applications that load fast, scale cleanly and convert better. After 18+ years and 50+ production apps for various industries, including performance optimisation, I take on a few new projects a quarter. If your site feels slow or hard to change, message me."
                </p>
              </div>

              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">18+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Production Apps</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95+</span>
                  <span className="stat-label">Lighthouse &amp; CWV</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25%</span>
                  <span className="stat-label">Speed Increase</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section id="work" className="work-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Featured Work</span>
              <h2 className="section-title">Real-World Project Highlights</h2>
              <p className="section-desc">Key engineering milestones delivered across clients and industry platforms.</p>
            </div>

            <div className="cards-grid">
              <article className="card">
                <div className="card-badge">Freelance Client</div>
                <h3 className="card-title">High-Performance React Web Applications</h3>
                <p className="card-location">Dubai, UAE · Remote</p>
                <p className="card-text">
                  Built and maintained robust React.js applications for a prominent Dubai-based client, focusing extensively on responsive user interfaces, frontend architecture, and performance optimization for demanding web users.
                </p>
                <div className="tag-group">
                  <span className="tag">React.js</span>
                  <span className="tag">Performance</span>
                  <span className="tag">Responsive UI</span>
                  <span className="tag">Architecture</span>
                </div>
              </article>

              <article className="card">
                <div className="card-badge">Technical Leadership</div>
                <h3 className="card-title">Scalable Travel &amp; E-Commerce Web Platforms</h3>
                <p className="card-location">Sublimis Technologies</p>
                <p className="card-text">
                  Directed a team of 6 frontend developers delivering 3+ ReactJS platforms for travel and e-commerce clients. Spearheaded systematic refactoring that increased page load speed by 25% and reduced runtime errors by 30%.
                </p>
                <div className="tag-group">
                  <span className="tag">ReactJS</span>
                  <span className="tag">Team Leadership</span>
                  <span className="tag">E-Commerce</span>
                  <span className="tag">Refactoring</span>
                  <span className="tag">95% On-Time Delivery</span>
                </div>
              </article>

              <article className="card">
                <div className="card-badge">Standards &amp; Optimization</div>
                <h3 className="card-title">Core Web Vitals &amp; Web Accessibility (WCAG)</h3>
                <p className="card-location">Enterprise Best Practices</p>
                <p className="card-text">
                  Engineered web applications to achieve consistent 95+ Google Lighthouse scores and strict Core Web Vitals compliance. Implemented SEO standards and WCAG accessibility, driving a 15% increase in organic search traffic.
                </p>
                <div className="tag-group">
                  <span className="tag">WCAG Standards</span>
                  <span className="tag">Core Web Vitals</span>
                  <span className="tag">Lighthouse 95+</span>
                  <span className="tag">SEO Best Practices</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section id="experience" className="experience-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Career History</span>
              <h2 className="section-title">18+ Years of Proven Experience</h2>
              <p className="section-desc">A timeline of leadership, frontend engineering, and successful delivery.</p>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-period">October 2024 – Present</span>
                    <span className="timeline-company">Freelance</span>
                  </div>
                  <h3 className="timeline-role">Frontend Developer</h3>
                  <p className="timeline-location">Thane, Maharashtra, India · Remote</p>
                  <p className="timeline-desc">
                    Built and maintained React.js applications for a Dubai-based client, focusing on performance optimization, scalable component design, and responsive UI.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-period">March 2020 – September 2024 (4 yrs 7 mos)</span>
                    <span className="timeline-company">Sublimis Technologies</span>
                  </div>
                  <h3 className="timeline-role">Technical Lead - Frontend Developer</h3>
                  <p className="timeline-location">Thane, Maharashtra, India</p>
                  <ul className="timeline-bullets">
                    <li>Directed a team of 6 frontend developers, delivering 3+ ReactJS applications for travel and e-commerce clients.</li>
                    <li>Optimized frontend performance, increasing load speed by 25% and reducing errors by 30% through code refactoring.</li>
                    <li>Boosted organic traffic by 15% by applying SEO best practices and accessibility standards.</li>
                    <li>Achieved consistent 95+ Lighthouse scores and Core Web Vitals compliance, improving search rankings and retention.</li>
                    <li>Partnered with stakeholders and backend teams, maintaining a 95% on-time delivery rate.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-period">September 2014 – October 2019 (5 yrs 2 mos)</span>
                    <span className="timeline-company">Cox &amp; Kings</span>
                  </div>
                  <h3 className="timeline-role">Team Leader</h3>
                  <p className="timeline-location">Mumbai Metropolitan Region</p>
                  <p className="timeline-desc">
                    Led frontend engineering and web development teams utilizing HTML5, CSS3, and jQuery to deliver customer-facing digital travel platforms.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-period">November 2013 – July 2014 (9 mos)</span>
                    <span className="timeline-company">Asentech India Pvt. Ltd.</span>
                  </div>
                  <h3 className="timeline-role">UI Designer</h3>
                  <p className="timeline-location">Mumbai Metropolitan Region</p>
                  <p className="timeline-desc">
                    Combined creative UI design with frontend development. Created digital media and banner designing for the election campaign of Mr. Narendra Modi and built the official website for Himachal Pradesh MP Mr. Anurag Thakur.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-period">November 2006 – November 2013 (7 yrs 1 mo)</span>
                    <span className="timeline-company">ImageOnline Pvt. Ltd.</span>
                  </div>
                  <h3 className="timeline-role">Sr. Web Developer</h3>
                  <p className="timeline-location">Mumbai</p>
                  <p className="timeline-desc">
                    Started professional web development career with a specialized website development firm, delivering numerous end-to-end client websites over 7+ years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Technical Arsenal</span>
              <h2 className="section-title">Skills &amp; Specializations</h2>
              <p className="section-desc">Practical expertise refined across 18+ years in frontend development.</p>
            </div>

            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="skill-category-title">
                  <span className="category-icon" aria-hidden="true">⚡</span>
                  Frontend &amp; Frameworks
                </h3>
                <div className="tag-group">
                  <span className="tag">React.js</span>
                  <span className="tag">JavaScript (ES6+)</span>
                  <span className="tag">HTML5</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">Sass</span>
                  <span className="tag">jQuery</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="skill-category-title">
                  <span className="category-icon" aria-hidden="true">🚀</span>
                  Performance &amp; Architecture
                </h3>
                <div className="tag-group">
                  <span className="tag">Performance Optimization</span>
                  <span className="tag">Frontend Architecture</span>
                  <span className="tag">Core Web Vitals</span>
                  <span className="tag">Lighthouse 95+ Scores</span>
                  <span className="tag">Code Refactoring</span>
                  <span className="tag">SEO Best Practices</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="skill-category-title">
                  <span className="category-icon" aria-hidden="true">🎨</span>
                  Design &amp; Accessibility
                </h3>
                <div className="tag-group">
                  <span className="tag">Web Accessibility (WCAG)</span>
                  <span className="tag">Figma</span>
                  <span className="tag">Responsive Web Design</span>
                  <span className="tag">UI Design</span>
                  <span className="tag">Cross-Browser Compatibility</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="education-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Background</span>
              <h2 className="section-title">Education &amp; Certification</h2>
            </div>

            <div className="edu-grid">
              <div className="edu-card">
                <div className="edu-icon" aria-hidden="true">🎓</div>
                <div className="edu-details">
                  <span className="edu-year">2013 – 2015</span>
                  <h3 className="edu-degree">BCA, Information Technology Project Management</h3>
                  <p className="edu-school">MG University</p>
                </div>
              </div>

              <div className="edu-card">
                <div className="edu-icon" aria-hidden="true">🎓</div>
                <div className="edu-details">
                  <span className="edu-year">2000 – 2005</span>
                  <h3 className="edu-degree">Bachelor's Degree, English Literature</h3>
                  <p className="edu-school">Mumbai University Mumbai</p>
                </div>
              </div>

              <div className="edu-card">
                <div className="edu-icon" aria-hidden="true">📜</div>
                <div className="edu-details">
                  <span className="edu-year">High School</span>
                  <h3 className="edu-degree">SYBA</h3>
                  <p className="edu-school">Hume High School, Byculla</p>
                </div>
              </div>

              <div className="edu-card certification-card">
                <div className="edu-icon" aria-hidden="true">⭐</div>
                <div className="edu-details">
                  <span className="edu-year">Professional Certification</span>
                  <h3 className="edu-degree">Introduction to Software Engineering</h3>
                  <p className="edu-school">Verified Credential</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Call to Action Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-box">
              <span className="section-tag">Let's Connect</span>
              <h2 className="contact-title">Need a fast, scalable frontend or help optimizing your web app?</h2>
              <p className="contact-subtitle">
                I take on select freelance projects, frontend architecture consultations, and performance audits each quarter.
              </p>

              <div className="contact-actions">
                <a href="mailto:devsandeepsawant@gmail.com" className="btn btn-primary btn-large">
                  <span>Send Email: devsandeepsawant@gmail.com</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sandeep-sawant-developer/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                  <span>View LinkedIn Profile</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>

              <div className="contact-meta">
                <span>📍 Location: Kalyan / Thane, Maharashtra, India</span>
                <span>⚡ Available for Remote &amp; Hybrid roles</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Sandeep Sawant. All rights reserved.
          </p>
          <p className="performance-pledge">
            ⚡ Built with React 19 &amp; Vite for sub-second loads and 95+ Core Web Vitals.
          </p>
        </div>
      </footer>
    </>
  );
}

