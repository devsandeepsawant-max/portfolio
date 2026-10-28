import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Sun,
  Moon,
  Compass,
  Zap,
  ShieldCheck,
  ChevronRight
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
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('sandeep-portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sandeep-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Generate deterministic stars for space backdrop
  const stars = useMemo(() => {
    return Array.from({ length: 48 }).map((_, i) => ({
      id: i,
      left: `${(i * 17) % 98}%`,
      top: `${(i * 23) % 92}%`,
      size: (i % 3 === 0) ? 14 : (i % 2 === 0) ? 10 : 8,
      delay: `${(i % 5) * 0.7}s`,
      opacity: ((i % 5) + 3) / 10
    }));
  }, []);

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
      skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 Semantic', 'CSS3 / Modern CSS', 'Sass / SCSS', 'Tailwind CSS', 'Vite', 'Next.js architecture']
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

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#090a0f] text-[#f8fafc]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      
      {/* Top Navigation */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${isDark ? 'bg-[#090a0f]/85 border-[#23293d]' : 'bg-[#ffffff]/85 border-[#e2e8f0]'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-4 group">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-base transition-all duration-300 shadow-sm ${isDark ? 'bg-[#151928] border border-[#2a344f] text-[#38bdf8] group-hover:border-[#38bdf8] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]' : 'bg-[#0284c7]/10 border border-[#0284c7]/30 text-[#0284c7] group-hover:bg-[#0284c7]/20'}`}>
              SS
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tight leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>Sandeep Sawant</span>
              <span className={`text-xs font-mono mt-1 ${isDark ? 'text-[#94a3b8]' : 'text-slate-500'}`}>Senior React &amp; Frontend Architect</span>
            </div>
          </a>

          {/* Links */}
          <nav className={`hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide ${isDark ? 'text-[#94a3b8]' : 'text-slate-600'}`}>
            <a href="#about" className="hover:text-[#38bdf8] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#38bdf8] transition-colors">Work</a>
            <a href="#experience" className="hover:text-[#38bdf8] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#38bdf8] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[#38bdf8] transition-colors">Contact</a>
          </nav>

          {/* Actions & Theme Switcher */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light theme"
              className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs font-semibold font-mono transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDark 
                  ? 'bg-[#151928] border-[#2a344f] text-[#38bdf8] hover:bg-[#1f263d] shadow-[0_0_10px_rgba(56,189,248,0.15)]' 
                  : 'bg-white border-slate-300 text-amber-500 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                  <span className="hidden sm:inline text-slate-300">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-600" />
                  <span className="hidden sm:inline text-slate-700">Dark Mode</span>
                </>
              )}
            </button>

            {/* Header CTA */}
            <a 
              href="mailto:devsandeepsawant@gmail.com" 
              className="cta-shimmer relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#38bdf8] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Interactive Space / Nebula Backdrop */}
      <section id="hero" className={`relative pt-24 pb-28 overflow-hidden border-b transition-colors duration-300 ${isDark ? 'border-[#1e2436]' : 'border-slate-200'}`}>
        
        {/* Space Cosmos Elements (Visible in both Dark and Light mode) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Celestial Glowing Nebulas */}
          <div 
            className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] animate-pulse-glow ${
              isDark ? 'bg-[#0284c7]/25' : 'bg-[#0284c7]/20'
            }`}
          ></div>
          <div 
            className={`absolute top-1/4 -right-20 w-[450px] h-[450px] rounded-full blur-[140px] animate-pulse-glow ${
              isDark ? 'bg-[#6366f1]/20' : 'bg-[#818cf8]/25'
            }`} 
            style={{ animationDelay: '2s' }}
          ></div>
          <div 
            className={`absolute -bottom-20 left-1/3 w-80 h-80 rounded-full blur-[100px] animate-pulse-glow ${
              isDark ? 'bg-[#38bdf8]/15' : 'bg-[#0ea5e9]/20'
            }`} 
            style={{ animationDelay: '3.5s' }}
          ></div>

          {/* Spaceship Crossing the Hero Section */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            <div className="animate-spaceship absolute flex items-center">
              {/* Spaceship Rocket Body */}
              <div className="relative">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="transform -rotate-45 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill={isDark ? '#38bdf8' : '#0284c7'} />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill={isDark ? '#e0f2fe' : '#ffffff'} stroke={isDark ? '#38bdf8' : '#0284c7'} strokeWidth="1.5" />
                  <circle cx="15.5" cy="8.5" r="1.75" fill={isDark ? '#0284c7' : '#38bdf8'} />
                  <path d="M9 18c-4.51 2-5-2-7-2" stroke={isDark ? '#f43f5e' : '#e11d48'} strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 15c-2 4.51 2 5 2 7" stroke={isDark ? '#f43f5e' : '#e11d48'} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {/* Engine Jet Flame with dynamic glow */}
                <div className="absolute -bottom-1 -left-4 w-7 h-3 rounded-full bg-gradient-to-r from-transparent via-amber-400 to-rose-500 blur-[1px] animate-pulse"></div>
              </div>

              {/* Warp Speed Jet Trail / Exhaust */}
              <div 
                className={`h-[2px] w-48 -ml-3 rounded-full ${
                  isDark 
                    ? 'bg-gradient-to-l from-transparent via-[#38bdf8]/60 to-transparent shadow-[0_0_8px_#38bdf8]' 
                    : 'bg-gradient-to-l from-transparent via-[#0284c7]/50 to-transparent shadow-[0_0_8px_#0284c7]'
                }`}
              ></div>
            </div>
          </div>

          {/* Realistic 4-Point Star Shaped Constellations */}
          {stars.map((s) => (
            <div
              key={s.id}
              className="absolute animate-twinkle pointer-events-none"
              style={{
                left: s.left,
                top: s.top,
                animationDelay: s.delay,
                opacity: isDark ? s.opacity : Math.min(s.opacity + 0.35, 0.95),
              }}
            >
              <svg 
                width={s.size} 
                height={s.size} 
                viewBox="0 0 24 24" 
                fill={isDark ? '#ffffff' : '#0284c7'}
                style={{
                  filter: isDark 
                    ? `drop-shadow(0 0 5px rgba(255, 255, 255, ${s.opacity}))` 
                    : `drop-shadow(0 0 5px rgba(2, 132, 199, 0.7))`
                }}
              >
                <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
              </svg>
            </div>
          ))}

          {/* Floating Orbit Graphic */}
          <div className={`absolute top-20 right-10 lg:right-28 w-64 h-64 border rounded-full animate-float pointer-events-none ${
            isDark ? 'border-[#38bdf8]/20' : 'border-[#0284c7]/30'
          }`}>
            <div className={`w-3.5 h-3.5 rounded-full absolute top-2 left-10 ${
              isDark ? 'bg-[#38bdf8] shadow-[0_0_12px_#38bdf8]' : 'bg-[#0284c7] shadow-[0_0_12px_rgba(2,132,199,0.7)]'
            }`}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            
            {/* Availability Pill */}
            <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs font-mono font-medium mb-8 transition-colors ${
              isDark 
                ? 'bg-[#151928]/90 border border-[#2d3856] text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.2)]' 
                : 'bg-sky-50 border border-sky-200 text-sky-800'
            }`}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-ping"></span>
              <span>Available for Select Senior Frontend Architecture &amp; Advisory Projects</span>
            </div>

            {/* Bold Headline */}
            <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              High-Velocity <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
                React Architectures
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl sm:text-2xl font-normal leading-relaxed mb-12 max-w-3xl ${isDark ? 'text-[#94a3b8]' : 'text-slate-600'}`}>
              I help businesses engineer fast, scalable web applications that load under 1s, convert users, and achieve <strong className={isDark ? 'text-white' : 'text-slate-900'}>95+ Core Web Vitals</strong>. 18+ years of craft based in Mumbai, collaborating worldwide.
            </p>

            {/* Animated CTAs */}
            <div className="flex flex-wrap items-center gap-5">
              <a 
                href="mailto:devsandeepsawant@gmail.com"
                className="cta-shimmer group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#38bdf8] text-white font-bold text-base shadow-lg shadow-sky-500/25 transition-all"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>devsandeepsawant@gmail.com</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="https://www.linkedin.com/in/sandeep-sawant-developer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`cta-shimmer group inline-flex items-center gap-3 px-7 py-4 rounded-xl font-bold text-base border transition-all ${
                  isDark 
                    ? 'bg-[#121622] border-[#29344d] text-white hover:border-[#38bdf8] hover:bg-[#1a2033]' 
                    : 'bg-white border-slate-300 text-slate-800 hover:border-sky-500 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <LinkedinIcon className="w-5 h-5 text-[#38bdf8] group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4 text-[#94a3b8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a 
                href="https://github.com/devsandeepsawant-max/portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`cta-shimmer group inline-flex items-center gap-3 px-7 py-4 rounded-xl font-bold text-base border transition-all ${
                  isDark 
                    ? 'bg-[#121622] border-[#29344d] text-white hover:border-[#38bdf8] hover:bg-[#1a2033]' 
                    : 'bg-white border-slate-300 text-slate-800 hover:border-sky-500 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <GithubIcon className="w-5 h-5 text-[#38bdf8] group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-[#94a3b8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Large Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-12 border-t border-[#1e2436]">
            {stats.map((s, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-[#10141f]/80 border-[#222b40] hover:border-[#38bdf8]/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
                    : 'bg-white border-slate-200 hover:border-sky-400 shadow-sm'
                }`}
              >
                <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight bg-gradient-to-r from-[#0284c7] to-[#38bdf8] bg-clip-text text-transparent mb-2">
                  {s.value}
                </div>
                <div className={`text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.label}</div>
                <div className={`text-xs ${isDark ? 'text-[#8290a3]' : 'text-slate-500'}`}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-28 border-b transition-colors duration-300 ${isDark ? 'border-[#1e2436]' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38bdf8] block mb-3">01 / Philosophy</span>
              <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Performance is not an afterthought. It is the product.
              </h2>
            </div>
            
            <div className={`lg:col-span-8 space-y-8 text-lg sm:text-xl font-normal leading-relaxed ${isDark ? 'text-[#94a3b8]' : 'text-slate-600'}`}>
              <p className={`p-6 rounded-2xl border ${isDark ? 'bg-[#121624] border-[#252f48] text-slate-200' : 'bg-sky-50/50 border-sky-100 text-slate-800'}`}>
                "Slow frontends lose customers. I build web applications that load fast, scale cleanly and convert better. After 18+ years and 50+ production applications across industries, I take on a few select projects each quarter. If your app feels sluggish or hard to scale, message me."
              </p>
              
              <p>
                From classic web foundations to enterprise React ecosystems, I combine architectural discipline with practical speed engineering. I specialize in isolating bottlenecks, eliminating layout shifts, and leading teams to deliver resilient digital platforms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className={`p-6 rounded-2xl border transition-all ${isDark ? 'bg-[#111520] border-[#222a3d]' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <Zap className="w-8 h-8 text-[#38bdf8] mb-3" />
                  <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Sub-Second First Paint</h4>
                  <p className={`text-sm ${isDark ? 'text-[#8290a3]' : 'text-slate-500'}`}>
                    Tree-shaking, code slicing, dynamic imports, and memory leak elimination.
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border transition-all ${isDark ? 'bg-[#111520] border-[#222a3d]' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <ShieldCheck className="w-8 h-8 text-[#38bdf8] mb-3" />
                  <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Scalable Team Governance</h4>
                  <p className={`text-sm ${isDark ? 'text-[#8290a3]' : 'text-slate-500'}`}>
                    Architecture blueprints that keep 6+ developers shipping on-time without regressions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects / Work Section */}
      <section id="projects" className={`py-28 border-b transition-colors duration-300 ${isDark ? 'border-[#1e2436]' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38bdf8] block mb-3">02 / Portfolio</span>
              <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Featured Engineering Work
              </h2>
            </div>
            <p className={`text-base font-mono mt-4 md:mt-0 max-w-sm ${isDark ? 'text-[#8290a3]' : 'text-slate-500'}`}>
              Real accomplishments from high-stake client platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {projects.map((proj, idx) => (
              <div 
                key={idx}
                className={`p-8 sm:p-12 rounded-3xl border transition-all duration-300 hover:shadow-2xl ${
                  isDark 
                    ? 'bg-[#10141f] border-[#222b40] hover:border-[#38bdf8]/60 shadow-[0_10px_30px_rgba(0,0,0,0.4)]' 
                    : 'bg-white border-slate-200 hover:border-sky-500 shadow-md'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#0284c7] bg-sky-500/10 px-3 py-1.5 rounded-lg border border-sky-500/20">
                      {proj.tag}
                    </span>
                    <span className={`text-sm font-mono ${isDark ? 'text-[#7d8b9e]' : 'text-slate-500'}`}>{proj.client} · {proj.location}</span>
                  </div>
                  <span className={`text-sm font-mono font-bold ${isDark ? 'text-[#38bdf8]' : 'text-sky-700'}`}>{proj.period}</span>
                </div>

                <h3 className={`text-2xl sm:text-4xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {proj.title}
                </h3>
                <p className={`text-base sm:text-lg leading-relaxed mb-8 ${isDark ? 'text-[#94a3b8]' : 'text-slate-600'}`}>
                  {proj.impact}
                </p>

                <div className="space-y-3 mb-8">
                  {proj.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#38bdf8] shrink-0" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-[#1e2436]">
                  {proj.stack.map((tech, i) => (
                    <span 
                      key={i}
                      className={`text-xs font-mono px-3 py-1.5 rounded-lg border ${
                        isDark 
                          ? 'bg-[#151928] text-slate-300 border-[#2b354d]' 
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
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
      <section id="experience" className={`py-28 border-b transition-colors duration-300 ${isDark ? 'border-[#1e2436]' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38bdf8] block mb-3">03 / Experience</span>
            <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              18+ Years of Proven Leadership
            </h2>
          </div>

          <div className="relative border-l-2 border-[#0284c7]/40 ml-4 sm:ml-6 space-y-16">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-10 sm:pl-12">
                {/* Glowing Bullet */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0284c7] ring-4 ring-[#0284c7]/20 shadow-[0_0_10px_#38bdf8]"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {exp.title} <span className="text-[#38bdf8] font-semibold">@ {exp.company}</span>
                  </h3>
                  <span className={`text-xs font-mono font-bold mt-1 sm:mt-0 ${isDark ? 'text-[#8290a3]' : 'text-slate-500'}`}>{exp.period}</span>
                </div>
                <div className={`text-sm font-mono mb-4 ${isDark ? 'text-[#7d8b9e]' : 'text-slate-500'}`}>{exp.location}</div>
                <p className={`text-base sm:text-lg leading-relaxed max-w-3xl ${isDark ? 'text-[#94a3b8]' : 'text-slate-600'}`}>
                  {exp.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Arsenal */}
      <section id="skills" className={`py-28 border-b transition-colors duration-300 ${isDark ? 'border-[#1e2436]' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38bdf8] block mb-3">04 / Arsenal</span>
            <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Skills &amp; Specializations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-[#10141f] border-[#222b40] hover:border-[#38bdf8]/50 shadow-md' 
                    : 'bg-white border-slate-200 hover:border-sky-400 shadow-sm'
                }`}
              >
                <h3 className={`text-base font-bold uppercase tracking-wider mb-8 font-mono flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]"></span>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium border transition-colors ${
                        isDark 
                          ? 'bg-[#151928] text-slate-300 border-[#2a344f] hover:border-[#38bdf8] hover:text-white' 
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-sky-500 hover:text-sky-900'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education Strip */}
          <div className={`mt-16 p-8 sm:p-12 rounded-3xl border ${isDark ? 'bg-[#10141f] border-[#222b40]' : 'bg-white border-slate-200 shadow-sm'}`}>
            <h3 className="text-sm font-mono font-bold text-[#38bdf8] uppercase tracking-wider mb-6 flex items-center gap-3">
              <GraduationCap className="w-5 h-5" />
              <span>Academic Credentials &amp; Verification</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>BCA, IT Project Management</div>
                <div className={`text-xs font-mono mt-1 ${isDark ? 'text-[#7d8b9e]' : 'text-slate-500'}`}>MG University · 2013 – 2015</div>
              </div>
              <div>
                <div className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Bachelor's, English Literature</div>
                <div className={`text-xs font-mono mt-1 ${isDark ? 'text-[#7d8b9e]' : 'text-slate-500'}`}>Mumbai University · 2000 – 2005</div>
              </div>
              <div>
                <div className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Introduction to Software Engineering</div>
                <div className={`text-xs font-mono mt-1 ${isDark ? 'text-[#7d8b9e]' : 'text-slate-500'}`}>Verified Professional Credential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact & Collaboration Section with Glowing CTA */}
      <section id="contact" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`p-10 sm:p-20 rounded-3xl border relative overflow-hidden ${
            isDark 
              ? 'bg-gradient-to-br from-[#121625] via-[#0d101a] to-[#090b12] border-[#29344d] shadow-[0_0_50px_rgba(2,132,199,0.15)]' 
              : 'bg-gradient-to-br from-sky-50 via-white to-sky-50 border-sky-200 shadow-xl'
          }`}>
            
            {/* Ambient Nebula in CTA */}
            {isDark && (
              <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#0284c7]/20 blur-[100px] pointer-events-none"></div>
            )}

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38bdf8] block mb-4">05 / Contact &amp; Hire</span>
              <h2 className={`text-3xl sm:text-6xl font-black tracking-tight leading-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Ready to build something fast, scalable, and exceptional?
              </h2>
              <p className={`text-lg sm:text-xl leading-relaxed mb-10 ${isDark ? 'text-[#94a3b8]' : 'text-slate-600'}`}>
                I am available for select freelance contracts, technical lead roles, and performance consultations. Reach out anytime.
              </p>

              {/* High-Impact Animated Action Buttons */}
              <div className="flex flex-wrap items-center gap-5">
                <a 
                  href="mailto:devsandeepsawant@gmail.com"
                  className="cta-shimmer group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#38bdf8] text-white font-bold text-base shadow-xl shadow-sky-500/30 hover:scale-105 active:scale-95 transition-all"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Send Email: devsandeepsawant@gmail.com</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/sandeep-sawant-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cta-shimmer group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base border transition-all hover:scale-105 active:scale-95 ${
                    isDark 
                      ? 'bg-[#151a29] border-[#2e3b57] text-white hover:border-[#38bdf8]' 
                      : 'bg-white border-slate-300 text-slate-800 hover:border-sky-500 shadow-sm'
                  }`}
                >
                  <LinkedinIcon className="w-5 h-5 text-[#38bdf8] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-4 h-4 text-[#7d8b9e]" />
                </a>
              </div>

              <div className={`mt-10 flex flex-wrap gap-8 text-xs font-mono ${isDark ? 'text-[#7d8b9e]' : 'text-slate-500'}`}>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#38bdf8]" />
                  Kalyan / Thane, Mumbai, India
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
                  Open to Remote &amp; Global Contracts
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t text-xs font-mono transition-colors duration-300 ${isDark ? 'border-[#1e2436] text-[#6b7787]' : 'border-slate-200 text-slate-500'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Sandeep Sawant. All rights reserved.
          </div>
          <div className="flex items-center gap-8">
            <a href="https://github.com/devsandeepsawant-max/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-[#38bdf8] transition-colors">
              GitHub Repo
            </a>
            <a href="https://www.linkedin.com/in/sandeep-sawant-developer/" target="_blank" rel="noopener noreferrer" className="hover:text-[#38bdf8] transition-colors">
              LinkedIn
            </a>
            <a href="mailto:devsandeepsawant@gmail.com" className="hover:text-[#38bdf8] transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
