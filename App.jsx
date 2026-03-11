import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Server,
  Network,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  User,
  Terminal,
  Cpu,
  TerminalSquare,
  Activity,
  Download
} from 'lucide-react';

const Header = () => (
  <header className="bg-slate-900 text-white py-20 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
    {/* Background Network Pattern Animation */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent bg-[length:20px_20px]"></div>
    </div>

    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-slate-100">
          Aris Setyawan
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
          Project Manager | NOC | Network Engineer | IT Support Helpdesk
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start text-slate-300">
          <a href="mailto:arissetyawan2394@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={18} /> arissetyawan2394@gmail.com
          </a>
          <a href="tel:+6285856586286" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone size={18} /> +62-85-856-586-286
          </a>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-2 justify-center md:justify-start text-slate-300">
          <span className="flex items-center gap-2">
            <MapPin size={18} /> Bogor Regency, Indonesia
          </span>
          <a href="https://www.linkedin.com/in/aris-setyawan2394/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Linkedin size={18} /> linkedin.com/in/aris-setyawan2394
          </a>
        </div>

        {/* Download CV Button */}
        <div className="mt-8 flex justify-center md:justify-start">
          <a
            href="/Aris_Setyawan_CV.pdf"
            download="Aris_Setyawan_CV.pdf"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Download size={20} />
            Download CV (PDF)
          </a>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center bg-slate-800 p-8 rounded-full border-4 border-slate-700 shadow-[0_0_30px_rgba(59,130,246,0.3)] relative">
        <Server size={80} className="text-blue-500 mb-2" />
        <Activity size={24} className="text-green-400 animate-pulse absolute bottom-4" />
      </div>
    </div>
  </header>
);

const Section = ({ title, icon: Icon, children }) => (
  <section className="py-12 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto border-b border-slate-200 last:border-0">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
    </div>
    {children}
  </section>
);

const ExperienceItem = ({ role, company, period, tasks }) => (
  <div className="relative pl-8 sm:pl-0 sm:flex gap-6 mb-10 last:mb-0 group">
    {/* Timeline Line for Mobile */}
    <div className="absolute left-[11px] top-2 bottom-[-40px] w-0.5 bg-slate-200 sm:hidden last:hidden"></div>

    <div className="sm:w-1/4 sm:text-right shrink-0">
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-white bg-blue-500 sm:hidden z-10"></div>
      <div className="text-blue-600 font-bold">{period}</div>
      <div className="text-slate-500 font-medium text-sm">{company}</div>
    </div>

    {/* Timeline Line & Dot for Desktop */}
    <div className="hidden sm:flex flex-col items-center relative">
      <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm z-10 mt-1"></div>
      <div className="absolute top-5 bottom-[-48px] w-0.5 bg-slate-200 group-last:hidden"></div>
    </div>

    <div className="sm:w-3/4 pb-4 sm:pb-0 pt-1 sm:pt-0">
      <h4 className="text-xl font-bold text-slate-800 mb-2">{role}</h4>
      <ul className="list-none space-y-2 text-slate-600">
        {tasks.map((task, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-blue-500 mt-1.5 shrink-0">
              <TerminalSquare size={14} className="text-blue-500" />
            </span>
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const App = () => {
  const experiences = [
    {
      role: "ICT Coordinator & Project Manager",
      company: "Edelweiss Schools",
      period: "2025 - Present",
      tasks: [
        "Served as Microsoft 365 Administrator, managing institutional accounts, security, and cloud collaboration tools.",
        "Managed the development and implementation of the school's Learning Management System (LMS) to facilitate digital teaching and learning.",
        "Led the project management for the development of official websites for both the school and the foundation.",
        "Spearheaded the digitalization project for the ISO 21001:2018 Educational Organizations Management System."
      ]
    },
    {
      role: "IT Support",
      company: "PT. LIPUTANENAMDOTCOM",
      period: "2019 - Aug 2025",
      tasks: [
        "Managed and maintained hardware and network infrastructure for the company.",
        "Troubleshot complex network problems and computer hardware issues effectively.",
        "Installed, configured, and maintained Network Attached Storage (NAS) systems including Synology and Owncloud."
      ]
    },
    {
      role: "NOC (Network Operation Center)",
      company: "PT. CENDIKIA GLOBAL SOLUSI",
      period: "2018 - 2019",
      tasks: [
        "Provided dedicated helpdesk support and monitored customer networks across Indonesia.",
        "Performed routine system maintenance and comprehensive Layer 2 network monitoring.",
        "Configured, installed, and maintained various brands of network switches, routers, and OLTs.",
        "Traveled for business deployments and on-site troubleshooting when required."
      ]
    },
    {
      role: "NOC (Network Operation Center)",
      company: "PT. KAPANLAGI NETWORK",
      period: "2017 - 2018",
      tasks: [
        "Handled hardware and network infrastructure operations.",
        "Troubleshot network connectivity issues and optimized computer hardware performance.",
        "Executed the installation, setup, and maintenance of NAS solutions (Synology, Owncloud)."
      ]
    }
  ];

  const skills = [
    "Computer Hardware", "Networking", "VM Management", "Mikrotik",
    "ESXI", "PROXMOX", "MS Office", "Synology NAS",
    "VLAN Management", "Web Programming"
  ];

  const strengths = [
    {
      title: "Creative Problem Solving",
      desc: "Utilize creative solutions to tackle technical challenges, resulting in a proven internet uptime of up to 95% at CGS and KLY.",
      icon: Terminal
    },
    {
      title: "Strong Leadership",
      desc: "Experienced in leading and mentoring technical teams, resulting in highly efficient project execution and team coordination.",
      icon: ShieldCheck
    },
    {
      title: "Effective Communication",
      desc: "Able to effectively coordinate and negotiate with cross-functional teams, service providers, and clients.",
      icon: Network
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Header />

      <main>
        {/* SUMMARY SECTION */}
        <Section title="Professional Summary" icon={User}>
          <p className="text-lg text-slate-600 leading-relaxed text-justify">
            A versatile IT professional bridging the gap between robust network infrastructure and strategic IT project management. With an extensive background in Network Operation Centers (NOC) and IT Support, I excel in maintaining critical network architectures, hardware troubleshooting, and ensuring maximum operational uptime. In my current role as an ICT Coordinator & Project Manager, I lead comprehensive digital transformations, including Microsoft 365 administration, LMS deployments, web development projects, and the digitalization of ISO 21001:2018 systems. My unique blend of hands-on technical expertise and leadership ensures the seamless delivery of innovative and reliable IT solutions.
          </p>
        </Section>

        {/* EXPERIENCE SECTION */}
        <Section title="Work Experience" icon={Briefcase}>
          <div className="mt-4">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </Section>

        {/* STRENGTHS SECTION */}
        <Section title="Core Strengths" icon={Cpu}>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{strength.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{strength.desc}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* SKILLS SECTION */}
        <Section title="Technical Skills" icon={Terminal}>
          <div className="flex flex-wrap gap-3 mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-full border border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>

        {/* EDUCATION SECTION */}
        <Section title="Education" icon={GraduationCap}>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-blue-600 font-bold mb-1">2022 - 2026</div>
              <h4 className="text-xl font-bold text-slate-800">Bachelor of Information Systems</h4>
              <div className="text-slate-500 font-medium mt-1">Universitas Terbuka (Jakarta, Indonesia)</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-blue-600 font-bold mb-1">2010 - 2013</div>
              <h4 className="text-xl font-bold text-slate-800">Computer and Network Engineering</h4>
              <div className="text-slate-500 font-medium mt-1">SMK Negeri 4 Malang (Indonesia)</div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center mt-12">
        <p>© {new Date().getFullYear()} Aris Setyawan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;