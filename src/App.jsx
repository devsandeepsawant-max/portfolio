import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Sliders, 
  ArrowRight,
  Code2,
  Terminal,
  ExternalLink
} from 'lucide-react';

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.63-1.63 1.64 1.64 0 0 0-1.63-1.63 1.64 1.64 0 0 0-1.64 1.63 1.64 1.64 0 0 0 1.64 1.63m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('all');

  const stats = [
    { value: '18+', label: 'Years Experience', sub: 'From web craft to frontend architecture' },
    { value: '50+', label: 'Shipped Platforms', sub: 'Production travel, commerce & web apps' },
    { value: '95+', label: 'Lighthouse & CWV', sub: 'Strict Core Web Vitals performance benchmark' },
    { value: '25%', label: 'Load Speed Uplift', sub: 'Systematic architectural refactoring' },
  ];

  const projects = [
    {
      client: 'Dubai Enterprise Client',
      role: 'Frontend Architect & React Specialist',
      period: '2024 – Present',
      location: 'Dubai, UAE · Remote',
      title: 'High-Performance React Web Applications',
      tag: 'Architecture & Optimization',
      impact: 'Architected high-throughput responsive React interfaces engineered for sub-second page loads and seamless transactional workflows for high-intent Gulf and international customers.',
      stack: ['React.js', 'Vite', 'Frontend Architecture', 'Responsive UI', 'State Optimization'],
      highlights: [
        'Component isolation and modular design for long-term maintainability',
        'Aggressive bundle slicing and asset optimization',
        'Bulletproof cross-device responsiveness across complex viewports'
      ]
    },
    {
      client: 'Sublimis Technologies',
      role: 'Technical Lead - Frontend',
      period: '2020 – 2024',
      location: 'Thane, Mumbai',
      title: 'High-Volume Travel & E-Commerce Web Platforms',
      tag: 'Team Leadership & Scale',
      impact: 'Led an engineering team of 6 frontend developers delivering 3+ enterprise travel and commercial applications with a 95% on-time milestone track record.',
      stack: ['React.js', 'Leadership', 'Code Refactoring', 'Performance Audit', 'REST APIs'],
      highlights: [
        'Boosted page load speed by 25% across customer booking flows',
        'Reduced runtime exceptions and production bugs by 30%',
        'Established team-wide automated linting, test patterns, and code review standards'
      ]
    },
    {
      client: 'Enterprise Standards',
      role: 'Frontend Engineering Lead',
      period: 'Sublimis & Practice',
      location: 'Mumbai Region',
      title: 'Core Web Vitals & WCAG Accessibility Systems',
      tag: 'Performance & Compliance',
      impact: 'Engineered web applications to achieve consistent 95+ Google Lighthouse ratings and full WCAG accessibility compliance, lifting organic search traffic by 15%.',
      stack: ['Core Web Vitals', 'WCAG 2.1', 'Lighthouse 95+', 'Technical SEO', 'Performance'],
      highlights: [
        'Eliminated Largest Contentful Paint (LCP) bottlenecks and layout shifts (CLS)',
        'Built keyboard-navigable ARIA semantic interaction flows',
        'Optimized search-engine crawlability and metadata distribution'
      ]
    }
  ];

  const experience = [
    {
      period: 'Oct 2024 – Present',
      title: 'Frontend Developer (React.js)',
      company: 'Freelance Client',
      location: 'Dubai, UAE · Remote',
      summary: 'Building high-performance React.js applications for a prominent Dubai client, focusing on frontend architecture, state management efficiency, and fluid responsive design.'
    },
    {
      period: 'Mar 2020 – Sep 2024',
      title: 'Technical Lead - Frontend Developer',
      company: 'Sublimis Technologies',
      location: 'Thane, Maharashtra, India',
      summary: 'Directed a team of 6 engineers delivering ReactJS applications for travel and e-commerce. Spearheaded systematic refactoring that increased speed by 25%, reduced runtime errors by 30%, and lifted organic traffic by 15% via SEO and accessibility.'
    },
    {
      period: 'Sep 2014 – Oct 2019',
      title: 'Team Leader',
      company: 'Cox & Kings',
      location: 'Mumbai Metropolitan Region',
      summary: 'Headed UI development squads delivering customer-facing digital booking platforms using HTML5, modern CSS, and performance-tuned JavaScript frameworks.'
    },
    {
      period: 'Nov 2013 – Jul 2014',
      title: 'UI Designer & Web Developer',
      company: 'Asentech India Pvt. Ltd.',
      location: 'Mumbai Metropolitan Region',
      summary: 'Crafted digital media and campaign assets for the election campaign of Mr. Narendra Modi, and architected the official digital portal for Himachal Pradesh MP Mr. Anurag Thakur.'
    },
    {
      period: 'Nov 2006 – Nov 2013',
      title: 'Senior Web Developer',
      company: 'ImageOnline Pvt. Ltd.',
      location: 'Mumbai',
      summary: 'Commenced professional frontend engineering career with a specialized agency, deploying dozens of end-to-end commercial web products over a 7-year tenure.'
    }
  ];

  const skillsCategories = [
    {
      name: 'Frontend Core & Frameworks',
      skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 Semantic', 'CSS3 / Modern CSS', 'Sass / SCSS', 'Tailwind CSS', 'Vite', 'Next.js principles']
    },
    {
      name: 'Architecture & Performance',
      skills: ['Core Web Vitals Tuning', 'Lighthouse 95+ Benchmarks', 'Code Refactoring & Slicing', 'Frontend Architecture', 'Technical SEO', 'State Architecture']
    },
    {
      name: 'Standards & Interface Craft',
      skills: ['Web Accessibility (WCAG 2.1)', 'Figma to Code', 'Cross-Browser Precision', 'Responsive Mobile-First Systems', 'UI / UX Design Craft']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f4f5] selection:bg-[#dafa9c] selection:text-[#0c0d0e]">
      
      {/* Precision Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0c0d0e]/85 border-b border-[#23272b]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="w-8 h-8 rounded-md bg-[#181a1d] border border-[#2c3238] flex items-center justify-center font-mono font-bold text-xs text-[#dafa9c] group-hover:border-[#dafa9c] transition-colors">
              SS
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight leading-none text-white">Sandeep Sawant</span>
              <span className="text-[11px] text-[#8b929a] font-mono mt-0.5">Senior Frontend Architect</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#8b929a]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Arsenal</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="mailto:devsandeepsawant@gmail.com" 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#dafa9c] text-[#0c0d0e] text-xs font-semibold hover:bg-[#e6fdb5] transition-all transform active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-24 pb-20 border-b border-[#1f2327]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181a1d] border border-[#292f36] text-[11px] font-mono text-[#8b929a] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#dafa9c] animate-pulse"></span>
              <span>Available for Senior Frontend Architecture &amp; Advisory Roles</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white leading-[1.08] mb-6">
              Engineering web apps that <span className="font-normal text-[#dafa9c]">load instantly</span>, scale cleanly, and convert.
            </h1>

            <p className="text-lg sm:text-xl text-[#8b929a] font-light leading-relaxed mb-10">
              Senior React.js Developer &amp; Frontend Architect with 18+ years shipping enterprise web platforms. Specialist in Core Web Vitals, speed refactoring, and resilient UI systems. Based in Kalyan / Thane, Mumbai &amp; working remotely worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="mailto:devsandeepsawant@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#dafa9c] text-[#0c0d0e] font-semibold text-sm hover:bg-[#e6fdb5] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>devsandeepsawant@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sandeep-sawant-developer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#16181b] border border-[#272d34] text-white text-sm hover:border-[#dafa9c]/50 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#dafa9c]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8b929a]" />
              </a>
              <a 
                href="https://github.com/devsandeepsawant-max/portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#16181b] border border-[#272d34] text-white text-sm hover:border-[#dafa9c]/50 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#dafa9c]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8b929a]" />
              </a>
            </div>
          </div>

          {/* Precision Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 pt-10 border-t border-[#1f2327]">
            {stats.map((s, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-[#121416] border border-[#20252a] hover:border-[#2f373f] transition-colors">
                <div className="text-3xl sm:text-4xl font-light text-[#dafa9c] font-mono tracking-tight mb-1">
                  {s.value}
                </div>
                <div className="text-sm font-medium text-white mb-1">{s.label}</div>
                <div className="text-xs text-[#717882]">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-b border-[#1f2327]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-[#dafa9c] uppercase tracking-wider block mb-2">01 / Foundation</span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                Quiet precision over noisy defaults.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[#9ba2ab] text-base sm:text-lg leading-relaxed font-light">
              <p>
                "Slow frontends lose customers. I build web applications that load fast, scale cleanly and convert better. After 18+ years and 50+ production applications across industries, I focus on performance architecture that directly protects revenue."
              </p>
              <p>
                Having navigated the web's evolution from foundational standards to modern React architectures, I bring rare end-to-end depth: structuring components that remain maintainable under rapid product iterations, preventing layout instability, and securing consistent 95+ Core Web Vitals compliance.
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-md bg-[#131518] border border-[#22272e]">
                  <CheckCircle2 className="w-5 h-5 text-[#dafa9c] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-white">Sub-Second First Paint</h4>
                    <p className="text-xs text-[#767e88] mt-1">Ruthless code-splitting, tree-shaking, and critical CSS orchestration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-md bg-[#131518] border border-[#22272e]">
                  <CheckCircle2 className="w-5 h-5 text-[#dafa9c] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-white">Clean Team Scale</h4>
                    <p className="text-xs text-[#767e88] mt-1">Architectural guidelines that prevent technical debt across 6+ developers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects / Work Section */}
      <section id="projects" className="py-24 border-b border-[#1f2327]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-mono text-[#dafa9c] uppercase tracking-wider block mb-2">02 / Proven Delivery</span>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
                Featured Engineering Milestones
              </h2>
            </div>
            <p className="text-sm text-[#7e8691] max-w-sm mt-3 md:mt-0 font-mono">
              Verifiable production achievements from actual client engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((proj, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-xl bg-[#121417] border border-[#22272d] hover:border-[#353c45] transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#dafa9c] bg-[#1a1e1b] px-2.5 py-1 rounded border border-[#2f3c2c]">
                      {proj.tag}
                    </span>
                    <span className="text-xs text-[#6e7682] font-mono">{proj.client} · {proj.location}</span>
                  </div>
                  <span className="text-xs font-mono text-[#8a929d]">{proj.period}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-white mb-3">
                  {proj.title}
                </h3>
                <p className="text-sm sm:text-base text-[#9ba2ab] leading-relaxed mb-6">
                  {proj.impact}
                </p>

                <div className="space-y-2 mb-6">
                  {proj.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#878f99]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dafa9c]"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1c2126]">
                  {proj.stack.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#171a1d] text-[#a4acb7] border border-[#282e35]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 border-b border-[#1f2327]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-mono text-[#dafa9c] uppercase tracking-wider block mb-2">03 / Career Trajectory</span>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
              18+ Years of Continuous Execution
            </h2>
          </div>

          <div className="relative border-l border-[#23282f] ml-3 sm:ml-4 space-y-12">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10">
                {/* Node indicator */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0c0d0e] border-2 border-[#dafa9c]"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-lg font-normal text-white">
                    {exp.title} <span className="text-[#dafa9c] font-light">@ {exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-[#6f7782] sm:text-right mt-1 sm:mt-0">{exp.period}</span>
                </div>
                <div className="text-xs text-[#7e8692] font-mono mb-3">{exp.location}</div>
                <p className="text-sm text-[#959da7] leading-relaxed max-w-2xl font-light">
                  {exp.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Arsenal */}
      <section id="skills" className="py-24 border-b border-[#1f2327]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-mono text-[#dafa9c] uppercase tracking-wider block mb-2">04 / Stack</span>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
              Technical Arsenal &amp; Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsCategories.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#121417] border border-[#22272d]">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#dafa9c]"></span>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 rounded-md text-xs font-mono bg-[#181a1d] text-[#b3bac4] border border-[#262c33] hover:border-[#dafa9c]/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education strip */}
          <div className="mt-12 p-6 rounded-xl bg-[#121417] border border-[#22272d]">
            <h3 className="text-xs font-mono text-[#dafa9c] uppercase tracking-wider mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation &amp; Credentials</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-medium text-white">BCA, IT Project Management</div>
                <div className="text-xs text-[#717983] font-mono mt-0.5">MG University · 2013 – 2015</div>
              </div>
              <div>
                <div className="font-medium text-white">Bachelor's Degree, English Literature</div>
                <div className="text-xs text-[#717983] font-mono mt-0.5">Mumbai University · 2000 – 2005</div>
              </div>
              <div>
                <div className="font-medium text-white">Introduction to Software Engineering</div>
                <div className="text-xs text-[#717983] font-mono mt-0.5">Verified Professional Credential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact & Collaboration Section */}
      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="p-8 sm:p-14 rounded-2xl bg-[#121416] border border-[#282f37] relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono text-[#dafa9c] uppercase tracking-wider block mb-3">05 / Engagement</span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight mb-4">
                Have a web application that needs speed, scale, or architectural leadership?
              </h2>
              <p className="text-sm sm:text-base text-[#8f96a1] leading-relaxed mb-8 font-light">
                Available for select freelance contracts, technical lead roles, and performance audits. Fast responses via email or LinkedIn.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="mailto:devsandeepsawant@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#dafa9c] text-[#0c0d0e] font-semibold text-sm hover:bg-[#e6fdb5] transition-all transform active:scale-95 shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>devsandeepsawant@gmail.com</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/sandeep-sawant-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#181b1f] border border-[#2e363f] text-white text-sm hover:border-[#dafa9c]/60 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#dafa9c]" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7c8490]" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-xs font-mono text-[#69727e]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#dafa9c]" />
                  Kalyan / Thane, Mumbai, India
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#dafa9c]" />
                  Open to Remote &amp; Global Collaborations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-End Minimal Footer */}
      <footer className="py-8 border-t border-[#1b1f23] text-xs font-mono text-[#626b75]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Sandeep Sawant. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/devsandeepsawant-max/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub Repository
            </a>
            <a href="https://www.linkedin.com/in/sandeep-sawant-developer/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:devsandeepsawant@gmail.com" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
