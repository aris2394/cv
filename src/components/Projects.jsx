import React, { useState, useEffect, useRef } from 'react';
import { Code2, GitBranch, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';

// Reveal component
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ '--delay': `${delay}ms` }} className={`reveal-item ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

const projects = [
  {
    title: 'Enterprise Learning Management System',
    role: 'Project Manager & ICT Coordinator',
    year: '2025',
    stack: ['Web Technologies', 'CPanel', 'Microsoft 365'],
    challenge: 'Institution needed a centralized LMS handling high concurrent users with accurate real-time performance reports.',
    solution: 'Led full development lifecycle, bridged operational & technical teams, managed iterative feature rollouts.',
    impact: [
      'Drastically reduced report generation time',
      'Connected teachers, students, and management seamlessly',
      'Achieved system stability and scalability'
    ],
    gradient: 'from-blue-500 to-cyan-400',
    icon: Code2,
  },
  {
    title: 'ISO 21001:2018 Digital Transformation',
    role: 'Project Manager',
    year: '2025',
    stack: ['n8n', 'Power Automate', 'Python', 'Cloud Storage'],
    challenge: 'Manual documentation and ISO audit processes were time-consuming, error-prone, and lacked traceability.',
    solution: 'Designed comprehensive workflow automation using n8n and Power Automate with centralized compliance database.',
    impact: [
      'Reduced administrative hours significantly',
      'Eliminated document loss risks',
      'Maintained 100% audit readiness with structured database'
    ],
    gradient: 'from-violet-500 to-blue-500',
    icon: CheckCircle,
  },
  {
    title: 'Enterprise Network Infrastructure & Monitoring',
    role: 'Network Engineer / NOC Specialist',
    year: '2025',
    stack: ['Linux', 'Docker', 'Cisco', 'MRTG', 'Cacti', 'ntopng'],
    challenge: 'Lack of real-time network visibility caused reactive incident response. Need for secure cross-node communication.',
    solution: 'Deployed monitoring tools via Docker containers and configured IPsec tunneling on Cisco routers.',
    impact: [
      '100% real-time network visibility',
      'Proactive anomaly detection and resolution',
      'Consistently high infrastructure uptime'
    ],
    gradient: 'from-cyan-500 to-teal-400',
    icon: Shield,
  },
];

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  
  return (
    <Reveal delay={index * 120}>
      <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300 overflow-hidden group">
        {/* Top gradient line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
        
        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                <Icon size={20} className="text-white" />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{project.year}</span>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-blue-400 font-semibold">{project.role}</p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
          {project.stack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 bg-slate-700/40 border border-slate-600/30 text-slate-300 text-[11px] font-medium rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-5 relative z-10">
          {/* Challenge */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <Zap size={14} className="text-amber-400" />
              Challenge
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <GitBranch size={14} className="text-emerald-400" />
              Solution
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Impact */}
        <div className="mt-5 pt-5 border-t border-slate-700/50 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            <ArrowRight size={14} className="text-blue-400" />
            Impact
          </div>
          <ul className="space-y-1.5">
            {project.impact.map((item) => (
              <li key={item} className="text-sm text-slate-300 flex items-start gap-2">
                <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <div className="grid md:grid-cols-1 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}
