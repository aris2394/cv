import React, { useState, useEffect, useRef } from 'react';
import {
  Mail, Phone, MapPin, Linkedin, Server, Network,
  ShieldCheck, GraduationCap, Briefcase, User,
  Terminal, Cpu, TerminalSquare, Activity,
  ChevronUp, Menu, X, Award, Clock,
  Code2, Layers, Wifi, DatabaseZap, Globe
} from 'lucide-react';

/* ─── Intersection Observer hook ──────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Animated counter ─────────────────────────────────── */
function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal(0.5);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(end / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 35);
    return () => clearInterval(timer);
  }, [visible, end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Skill bar ────────────────────────────────────────── */
function SkillBar({ label, level, icon: Icon }) {
  const [ref, visible] = useReveal(0.2);
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 text-sm font-semibold text-slate-300">
          {Icon && <Icon size={13} className="text-blue-400" />}
          {label}
        </span>
        <span className="text-xs font-bold text-blue-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-700/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

/* ─── Reveal wrapper ───────────────────────────────────── */
function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
}

/* ─── Floating particles canvas ───────────────────────── */
function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96,165,250,0.55)'; ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(96,165,250,${0.12 * (1 - dist / 110)})`; ctx.lineWidth = 0.6; ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ─── Typing text ──────────────────────────────────────── */
function TypingText({ texts }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = texts[idx];
    let timeout;
    if (!deleting && displayed.length < current.length)
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    else if (!deleting && displayed.length === current.length)
      timeout = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && displayed.length > 0)
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 38);
    else { setDeleting(false); setIdx((idx + 1) % texts.length); }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, texts]);
  return (
    <span className="text-blue-400 font-semibold">
      {displayed}<span className="animate-pulse opacity-70">|</span>
    </span>
  );
}

/* ─── Sticky Navbar ────────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'Summary', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Education', href: '#education' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      NAV_ITEMS.forEach(n => {
        const el = document.querySelector(n.href);
        if (el) { const { top, bottom } = el.getBoundingClientRect(); if (top <= 100 && bottom > 100) setActive(n.href); }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const go = (href) => { setOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shadow-xl shadow-black/30' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 sm:px-12 flex items-center justify-between h-16">
        <span className={`font-bold text-sm tracking-widest transition-all duration-300 ${scrolled ? 'opacity-100 text-white' : 'opacity-0'}`}>
          ARIS<span className="text-blue-400">.</span>
        </span>
        <ul className="hidden md:flex gap-1">
          {NAV_ITEMS.map(n => (
            <li key={n.href}>
              <button onClick={() => go(n.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active === n.href ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]' : scrolled ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-white/60 hover:text-white hover:bg-white/10'}`}>
                {n.label}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-white hover:bg-slate-800 transition-colors">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-t border-slate-800 px-6 py-3 flex flex-col gap-1">
          {NAV_ITEMS.map(n => (
            <button key={n.href} onClick={() => go(n.href)}
              className="text-left px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 text-sm font-medium transition-colors">
              {n.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── Hero Header ──────────────────────────────────────── */
function HeroHeader() {
  return (
    <header className="relative min-h-[95vh] flex items-center bg-slate-950 text-white overflow-hidden">
      <Particles />
      <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-700/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[110px] pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 py-32 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-500/10 border border-green-500/25 rounded-full text-green-400 text-xs font-bold tracking-widest uppercase mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_#4ade80]" />
              Available for opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-[1.05]">
              <span className="bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
                Aris<br />Setyawan
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-slate-400 font-light mb-3 h-8">
              <TypingText texts={['ICT Coordinator & PM', 'NOC Engineer', 'Network Specialist', 'IT Support Expert']} />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
              8+ years building resilient networks & leading digital transformations across Indonesia.
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start mb-8">
              {[
                { icon: Mail, label: 'arissetyawan2394@gmail.com', href: 'mailto:arissetyawan2394@gmail.com' },
                { icon: Phone, label: '+62-858-5658-6286', href: 'tel:+6285856586286' },
                { icon: MapPin, label: 'Bogor, Indonesia', href: null },
                { icon: Linkedin, label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/aris-setyawan2394/' },
              ].map(({ icon: Icon, label, href }) =>
                href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/70 border border-slate-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 rounded-full text-slate-300 hover:text-blue-300 text-xs font-medium transition-all duration-200">
                    <Icon size={12} />{label}
                  </a>
                ) : (
                  <span key={label} className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/40 border border-slate-700/40 rounded-full text-slate-500 text-xs font-medium">
                    <Icon size={12} />{label}
                  </span>
                )
              )}
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_rgba(59,130,246,0.5)] text-sm">
                View Experience
              </button>
              <a href="mailto:arissetyawan2394@gmail.com"
                className="px-7 py-3 bg-transparent border border-slate-700 hover:border-blue-500/60 hover:bg-blue-500/10 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-200 text-sm">
                Contact Me
              </a>
            </div>
          </div>
          {/* Graphic */}
          <div className="hidden md:flex flex-col items-center shrink-0">
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 rounded-full border border-blue-500/15 animate-[spin_25s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-cyan-400/10 animate-[spin_18s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-blue-400/10 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-600/25 to-cyan-500/15 border border-blue-500/25 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                <Server size={54} className="text-blue-400" />
              </div>
              {[
                { icon: Wifi, angle: 0, label: 'NOC' },
                { icon: Layers, angle: 72, label: 'VM' },
                { icon: Code2, angle: 144, label: 'Web' },
                { icon: DatabaseZap, angle: 216, label: 'NAS' },
                { icon: Globe, angle: 288, label: 'Net' },
              ].map(({ icon: I, angle, label }) => {
                const rad = (angle * Math.PI) / 180;
                return (
                  <div key={label} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5"
                    style={{ left: `${50 + 43 * Math.cos(rad)}%`, top: `${50 + 43 * Math.sin(rad)}%` }}>
                    <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700/80 flex items-center justify-center shadow-lg hover:border-blue-500/50 transition-colors">
                      <I size={15} className="text-blue-400" />
                    </div>
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wide">{label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 flex items-center gap-2 text-green-400 text-xs font-semibold">
              <Activity size={13} className="animate-pulse" /> Systems Operational
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: 8, suffix: '+', label: 'Years Experience' },
            { value: 4, suffix: '', label: 'Companies Served' },
            { value: 95, suffix: '%', label: 'Network Uptime' },
            { value: 10, suffix: '+', label: 'Tech Skills' },
          ].map(({ value, suffix, label }) => (
            <div key={label} className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-5 text-center hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-300 cursor-default group">
              <div className="text-3xl font-extrabold text-white mb-1 group-hover:text-blue-300 transition-colors">
                <Counter end={value} suffix={suffix} />
              </div>
              <div className="text-xs text-slate-500 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 animate-bounce">
        <span className="text-slate-500 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </header>
  );
}

/* ─── Section wrapper ──────────────────────────────────── */
function Section({ id, title, icon: Icon, children }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <section id={id} className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`flex items-center gap-4 mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            <Icon size={22} />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">{title}</h3>
            <div className="h-0.5 mt-1.5 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

/* ─── Expandable Experience card ───────────────────────── */
function ExperienceItem({ role, company, period, tasks, index }) {
  const [open, setOpen] = useState(index === 0);
  const [ref, visible] = useReveal(0.15);
  return (
    <div ref={ref} style={{ transitionDelay: `${index * 80}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex gap-4 sm:gap-5 mb-5 last:mb-0 group/item">
        <div className="flex flex-col items-center shrink-0">
          <button onClick={() => setOpen(!open)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md z-10 border ${open ? 'bg-blue-600 border-blue-500 shadow-[0_0_16px_rgba(59,130,246,0.4)]' : 'bg-slate-800 border-slate-700 hover:border-blue-500/50 hover:bg-slate-700'}`}>
            <Briefcase size={15} className={open ? 'text-white' : 'text-slate-400'} />
          </button>
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-slate-700/80 to-transparent group-last/item:hidden" />
        </div>
        <div className="flex-1 pb-5 group-last/item:pb-0">
          <button onClick={() => setOpen(!open)} className="w-full text-left group/card">
            <div className={`rounded-2xl p-5 border transition-all duration-300 ${open ? 'bg-slate-800/80 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.08)]' : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/60'}`}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h4 className={`text-base font-bold transition-colors duration-200 ${open ? 'text-blue-300' : 'text-white group-hover/card:text-blue-300'}`}>{role}</h4>
                  <div className="text-blue-400 text-sm font-semibold mt-0.5">{company}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
                    <Clock size={10} />{period}
                  </span>
                  <span className={`text-slate-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
                    <ChevronUp size={15} />
                  </span>
                </div>
              </div>
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
            <ul className="space-y-2.5 pl-1">
              {tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <TerminalSquare size={12} className="text-blue-500/70 mt-1 shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Back to top ──────────────────────────────────────── */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-110 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <ChevronUp size={20} />
    </button>
  );
}

/* ─── Main App ─────────────────────────────────────────── */
export default function App() {
  const experiences = [
    {
      role: 'ICT Coordinator & Project Manager',
      company: 'Edelweiss Schools',
      period: '2025 – Present',
      tasks: [
        'Served as Microsoft 365 Administrator, managing institutional accounts, security, and cloud collaboration tools.',
        "Managed the development and implementation of the school's Learning Management System (LMS) to facilitate digital teaching and learning.",
        'Led the project management for the development of official websites for both the school and the foundation.',
        'Spearheaded the digitalization project for the ISO 21001:2018 Educational Organizations Management System.',
      ],
    },
    {
      role: 'IT Support',
      company: 'PT. LIPUTANENAMDOTCOM',
      period: '2019 – Aug 2025',
      tasks: [
        'Managed and maintained hardware and network infrastructure for the company.',
        'Troubleshot complex network problems and computer hardware issues effectively.',
        'Installed, configured, and maintained Network Attached Storage (NAS) systems including Synology and Owncloud.',
      ],
    },
    {
      role: 'NOC · Network Operation Center',
      company: 'PT. CENDIKIA GLOBAL SOLUSI',
      period: '2018 – 2019',
      tasks: [
        'Provided dedicated helpdesk support and monitored customer networks across Indonesia.',
        'Performed routine system maintenance and comprehensive Layer 2 network monitoring.',
        'Configured, installed, and maintained various brands of network switches, routers, and OLTs.',
        'Traveled for business deployments and on-site troubleshooting when required.',
      ],
    },
    {
      role: 'NOC · Network Operation Center',
      company: 'PT. KAPANLAGI NETWORK',
      period: '2017 – 2018',
      tasks: [
        'Handled hardware and network infrastructure operations.',
        'Troubleshot network connectivity issues and optimized computer hardware performance.',
        'Executed the installation, setup, and maintenance of NAS solutions (Synology, Owncloud).',
      ],
    },
  ];

  const skillGroups = [
    {
      label: 'Infrastructure & Network',
      items: [
        { name: 'Networking / TCP-IP', level: 92, icon: Wifi },
        { name: 'Mikrotik / VLAN', level: 88, icon: Network },
        { name: 'Synology NAS', level: 85, icon: DatabaseZap },
      ],
    },
    {
      label: 'Virtualisation & Cloud',
      items: [
        { name: 'VMware ESXi', level: 82, icon: Layers },
        { name: 'Proxmox', level: 80, icon: Cpu },
        { name: 'Microsoft 365', level: 88, icon: Globe },
      ],
    },
    {
      label: 'Dev & Operations',
      items: [
        { name: 'Web Programming', level: 75, icon: Code2 },
        { name: 'Computer Hardware', level: 90, icon: Cpu },
        { name: 'IT Project Mgmt', level: 85, icon: Award },
      ],
    },
  ];

  const strengths = [
    {
      title: 'Creative Problem Solving',
      desc: 'Proven internet uptime of up to 95% at CGS and KLY through innovative technical solutions and fast incident response.',
      icon: Terminal,
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      title: 'Strong Leadership',
      desc: 'Led and mentored cross-functional technical teams delivering projects on time with measurable outcomes.',
      icon: ShieldCheck,
      gradient: 'from-violet-500 to-blue-500',
    },
    {
      title: 'Effective Communication',
      desc: 'Bridges technical and non-technical stakeholders efficiently — vendors, clients, and executive teams.',
      icon: Network,
      gradient: 'from-cyan-500 to-teal-400',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-700/60 selection:text-white antialiased">
      <Navbar />
      <HeroHeader />

      {/* SUMMARY */}
      <Section id="summary" title="Professional Summary" icon={User}>
        <Reveal>
          <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 overflow-hidden hover:border-blue-500/30 transition-colors duration-300">
            <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <p className="text-slate-300 text-lg leading-relaxed text-justify">
              A versatile IT professional bridging robust network infrastructure and strategic IT project management.
              With extensive background in{' '}
              <span className="text-blue-400 font-semibold">Network Operation Centers (NOC)</span> and IT Support,
              I excel in maintaining critical network architectures, hardware troubleshooting, and ensuring maximum operational uptime.
              In my current role as{' '}
              <span className="text-blue-400 font-semibold">ICT Coordinator & Project Manager</span>, I lead
              comprehensive digital transformations — Microsoft 365 administration, LMS deployments, web development
              projects, and ISO 21001:2018 digitalization. My blend of hands-on technical expertise and leadership
              ensures seamless delivery of innovative IT solutions.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Work Experience" icon={Briefcase}>
        <div>
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} {...exp} index={i} />
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Technical Skills" icon={Terminal}>
        <div className="grid md:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 120}>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300 h-full">
                <div className="text-[10px] font-bold text-blue-400/80 uppercase tracking-[0.2em] mb-5 pb-3 border-b border-slate-700/50">
                  {group.label}
                </div>
                <div className="space-y-5">
                  {group.items.map(item => (
                    <SkillBar key={item.name} label={item.name} level={item.level} icon={item.icon} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* STRENGTHS */}
      <Section id="strengths" title="Core Strengths" icon={Cpu}>
        <div className="grid md:grid-cols-3 gap-5">
          {strengths.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 120}>
                <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-7 hover:border-blue-500/30 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group cursor-default h-full">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.gradient}`} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education" icon={GraduationCap}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              year: '2022 – 2026',
              degree: 'Bachelor of Information Systems',
              school: 'Universitas Terbuka',
              location: 'Jakarta, Indonesia',
              icon: GraduationCap,
              badge: 'Undergraduate',
              gradient: 'from-blue-500 to-indigo-500',
            },
            {
              year: '2010 – 2013',
              degree: 'Computer & Network Engineering',
              school: 'SMK Negeri 4 Malang',
              location: 'Malang, Indonesia',
              icon: Terminal,
              badge: 'Vocational',
              gradient: 'from-cyan-500 to-blue-500',
            },
          ].map((edu, i) => {
            const EduIcon = edu.icon;
            return (
              <Reveal key={edu.degree} delay={i * 120}>
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${edu.gradient}`} />
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg`}>
                      <EduIcon size={20} className="text-white" />
                    </div>
                    <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold rounded-full uppercase tracking-widest">
                      {edu.badge}
                    </span>
                  </div>
                  <div className="text-blue-400 font-bold text-sm mb-1">{edu.year}</div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{edu.degree}</h4>
                  <div className="text-slate-400 text-sm">{edu.school}</div>
                  <div className="flex items-center gap-1 text-slate-600 text-xs mt-1.5">
                    <MapPin size={10} />{edu.location}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <footer className="bg-slate-950 border-t border-slate-800/60 py-10 text-center">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="text-slate-300 font-semibold">Aris Setyawan</span>. All rights reserved.
        </div>
        <div className="mt-1.5 text-slate-700 text-xs">Built with React + Tailwind CSS</div>
      </footer>

      <BackToTop />
    </div>
  );
}




