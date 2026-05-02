import { useState, useEffect } from 'react';
import { Download, MapPin, Phone, Users, BarChart2, BrainCircuit, RefreshCw, ArrowRight, Mail, Menu, X, ArrowUp, FileText } from 'lucide-react';
import { SiFigma, SiGit, SiNotion, SiGoogleanalytics, SiVercel, SiSupabase, SiMongodb } from 'react-icons/si';
import { FaDatabase, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(pointer: fine) and (min-width: 768px)').matches);
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });

  // Card spotlight glow: track mouse position across all cards
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll('.card-gradient').forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll-spy: highlight active nav link
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Back-to-top visibility
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Rotating taglines
  const taglines = [
    "Turning research into roadmaps and features into outcomes.",
    "Shipping products users actually need.",
    "Research-first. Data-backed. User-obsessed.",
  ];
  useEffect(() => {
    const interval = setInterval(() => setTaglineIdx(prev => (prev + 1) % 3), 3200);
    return () => clearInterval(interval);
  }, []);

  // Cursor glow tracking (desktop only)
  useEffect(() => {
    if (!isDesktop) return;
    const handleCursorMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleCursorMove);
    return () => window.removeEventListener('mousemove', handleCursorMove);
  }, [isDesktop]);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const navItems = [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certification', label: 'Certification' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.div
      className="min-h-screen text-[#CBD5E1] bg-[#020713] font-['Inter'] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Custom cursor glow — desktop only */}
      {isDesktop && (
        <div className="cursor-glow" style={{ left: cursorPos.x, top: cursorPos.y }} />
      )}
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      >
        <div className="w-full h-full bg-gradient-to-r from-[#3AEEE3] via-[#2EE8E8] to-[#EB27E3]" />
      </motion.div>

      <div className="glow-bg"></div>

      <nav className="fixed top-0 w-full z-50 py-5 px-6 md:px-12 flex justify-between items-center bg-[#020713]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="font-['Syne'] font-semibold text-lg text-white tracking-wide">Mayur Shelar</span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-medium text-[#34D399] bg-[#34D399]/10 border border-[#34D399]/20 px-2.5 py-1 rounded-full">
            <span className="status-dot" />Open To Work
          </span>
        </div>
        <div className="hidden md:flex gap-10 text-[13px] font-medium text-[#CBD5E1]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`hover:text-white transition-all duration-300 pb-1 border-b-2 ${
                activeSection === item.id
                  ? 'text-white border-[#3AEEE3]'
                  : 'border-transparent'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); alert("Please upload your Mayur_Shelar_Resume.pdf to the public/assets directory."); }}
            className="hidden md:flex items-center gap-2 bg-[#2A2B31]/40 hover:bg-[#2A2B31]/80 px-5 py-2.5 rounded-md text-[13px] font-medium transition-colors text-[#CBD5E1] border border-white/10"
          >
            <FileText size={15} className="text-[#3AEEE3]" />
            My Resume
          </a>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-[#020713]/95 backdrop-blur-xl border-b border-white/5 px-6 py-8 flex flex-col gap-6"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[16px] font-medium transition-colors ${
                  activeSection === item.id ? 'text-white' : 'text-[#CBD5E1]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Please upload your Mayur_Shelar_Resume.pdf to the public/assets directory."); }}
              className="flex items-center gap-2 text-[14px] font-medium text-[#3AEEE3]"
            >
              <Download size={14} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#2A2B31]/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#3AEEE3] hover:bg-[#2A2B31] hover:border-[#3AEEE3]/30 transition-all shadow-lg shadow-black/30"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <main className="pt-32">
        {/* ss1: Hero Area */}
        <section className="container mx-auto px-6 text-center mt-16 md:mt-24 relative">
          {/* Animated gradient blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none" aria-hidden="true">
            <div className="hero-blob hero-blob-1" />
            <div className="hero-blob hero-blob-2" />
          </div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10">
            <p className="text-[14px] font-medium mb-4 text-[#CBD5E1]">Hey, I'm <span className="text-white font-bold">Mayur</span></p>
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium font-['Syne'] text-white leading-tight tracking-tight">
              A Top PM Fellow · Next Leap
            </h1>
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium font-['Syne'] leading-tight mb-8">
              <span className="text-gradient inline-block">
                {"Product Manager".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.04, duration: 0.3, ease: "easeOut" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h2>
            <div className="h-12 flex items-center justify-center mb-32">
              <AnimatePresence mode="wait">
                <motion.p
                  key={taglineIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="text-[15px] md:text-[16px] text-[#A1A1AA] max-w-xl mx-auto leading-relaxed"
                >
                  {taglines[taglineIdx]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="max-w-4xl mx-auto border-t border-dashed border-white/20 pt-5" />
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-[13px] text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#3AEEE3]" />
                <span>Mumbai, India</span>
              </div>
              <a href="mailto:mayursh1111@gmail.com" className="flex items-center gap-2 hover:text-[#3AEEE3] transition-colors">
                <Mail size={14} className="text-[#3AEEE3]" />
                <span>mayursh1111@gmail.com</span>
              </a>
              <a href="tel:+919819622036" className="flex items-center gap-2 hover:text-[#3AEEE3] transition-colors">
                <Phone size={14} className="text-[#3AEEE3]" />
                <span>+91 98196 22036</span>
              </a>
            </div>
          </motion.div>
        </section>

        <div className="section-divider max-w-2xl mx-auto" />

        {/* ss2: How I Work */}
        <section className="container mx-auto px-6 mt-32 max-w-5xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-[32px] md:text-[40px] font-medium font-['Syne'] text-center text-white mb-16"
          >
            How I Work
          </motion.h2>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { icon: <Users size={28} strokeWidth={1.5} />, title: "People-Led Execution", desc: "Great products are built by great teams. I've led and coordinated large-scale events across 20+ institutions bringing together diverse people, managing pressure, and always delivering on the goal." },
              { icon: <BarChart2 size={28} strokeWidth={1.5} />, title: "Data Driven Decisions", desc: "I let data lead the way. From defining success metrics to prioritising features every product decision I make is backed by evidence, not instinct." },
              { icon: <RefreshCw size={28} strokeWidth={1.5} />, title: "User-Centric Design", desc: "I start with the user, always. Real conversations over assumptions because building the right thing matters more than building the thing fast." },
              { icon: <BrainCircuit size={28} strokeWidth={1.5} />, title: "Continuous Learning", desc: "Every product, every cohort, every challenge teaches me something new. I stay curious, adapt quickly, and bring fresh thinking into everything I work on." },
            ].map((card, i) => (
              <motion.div key={i} variants={fadeInUp} className="card-gradient p-8 rounded-xl border border-white/5">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-[20px] font-medium text-white mb-3 font-['Syne']">{card.title}</h3>
                <p className="text-[13px] text-[#A1A1AA] leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <div className="section-divider max-w-2xl mx-auto" />

        {/* ss3 & ss4: Experience */}
        <section id="experience" className="container mx-auto px-6 mt-40 max-w-5xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-[32px] md:text-[40px] font-medium font-['Syne'] text-center text-white mb-24"
          >
            Experience
          </motion.h2>

          <div className="grid md:grid-cols-[220px_1fr] gap-x-12 relative mb-8">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="hidden md:flex items-start"
            >
              <div className="sticky top-32 w-full flex items-center pt-8">
                <span className="text-[14px] text-[#CBD5E1] whitespace-nowrap">Professional Experience</span>
                <div className="flex-grow border-b border-dashed border-white/10 ml-4"></div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="card-gradient p-8 rounded-xl border border-white/5">
                <p className="text-[12px] text-[#A1A1AA] mb-1">Business Executive</p>
                <h3 className="text-[22px] font-medium text-white mb-3 font-['Syne']">Eris Life Sciences</h3>
                <p className="text-[12px] text-[#A1A1AA] mb-6">Mumbai, India <span className="mx-2">•</span> Jul 2025 – Present</p>

                <div className="border-t border-dashed border-white/10 pt-6 mt-6">
                  <ul className="text-[13px] text-[#CBD5E1] space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-sm bg-white/40 mt-1.5 shrink-0"></span>
                      <p className="leading-relaxed">Hit 100% of revenue targets by running structured discovery conversations with HCPs and converting qualitative insights into targeted engagement strategies.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-sm bg-white/40 mt-1.5 shrink-0"></span>
                      <p className="leading-relaxed">Informed regional GTM and competitive positioning by synthesising research from 140+ HCP touchpoints into structured insight reports briefed directly to regional leadership.</p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-2xl mx-auto" />

        {/* ss5: I Help You To Make Wonderful Products */}
        <section className="container mx-auto px-6 mt-40 max-w-5xl text-center">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-[32px] md:text-[40px] font-medium font-['Syne'] text-white leading-tight mb-2"
          >
            What I Bring To The Table
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-[14px] text-[#CBD5E1] opacity-80 max-w-3xl mx-auto mb-16 mt-6 leading-relaxed"
          >
            An entry-level PM with a research-first approach... backed by real shipped products, domain experience, and a structured product thinking mindset.
          </motion.p>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              { category: "Discovery & Strategy", skills: ["Product Discovery", "User Research", "Competitive Analysis", "GTM Strategy"] },
              { category: "Execution & Delivery", skills: ["PRD Writing", "Stakeholder Management", "Agile & Sprint Planning", "RICE Prioritisation"] },
              { category: "Technical & Design", skills: ["Wireframing", "Prompt Engineering", "Data Analysis", "A/B Testing"] },
            ].map((group, gi) => (
              <motion.div key={gi} variants={fadeInUp} className="flex flex-col items-center">
                <p className="text-[12px] font-medium text-[#3AEEE3] uppercase tracking-widest mb-5">{group.category}</p>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {group.skills.map((skill, si) => (
                    <span key={si} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <div className="section-divider max-w-2xl mx-auto" />

        {/* Tools I Use */}
        <section className="container mx-auto px-6 mt-40 max-w-5xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-[32px] md:text-[40px] font-medium font-['Syne'] text-center text-white mb-16"
          >
            Tools I Use
          </motion.h2>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: <img src="/assets/figma.svg" alt="Figma" className="w-[22px] h-[22px]" />, name: "Figma", tip: "Wireframing & Prototyping" },
              { icon: <SiMongodb size={28} />, name: "MongoDB", color: "text-[#47A248]", tip: "NoSQL Database" },
              { icon: <SiNotion size={28} />, name: "Notion", color: "text-white", tip: "Roadmaps & Documentation" },
              { icon: <div className="w-10 h-10 rounded-full bg-[#A855F7] flex items-center justify-center"><div className="w-3 h-3 bg-white rotate-45" /></div>, name: "Whimsical", tip: "User Flows & Mind Maps" },
              { icon: <SiGoogleanalytics size={28} />, name: "GA4", color: "text-[#E37400]", tip: "Product Analytics" },
              { icon: <div className="flex items-center gap-1 text-[#F29111]"><FaDatabase size={22} /><span className="text-[16px] font-bold tracking-tighter">SQL</span></div>, name: "SQL", tip: "Data Querying & Analysis" },
              { icon: <SiFigma size={28} />, name: "Figma Make AI", color: "text-[#9B59B6]", tip: "AI-Powered Design" },
              { icon: <SiGit size={28} />, name: "Git", color: "text-[#F05032]", tip: "Version Control" },
              { icon: <SiVercel size={28} />, name: "Vercel", color: "text-white", tip: "Deployment & Hosting" },
              { icon: <SiSupabase size={28} />, name: "Supabase", color: "text-[#3ECF8E]", tip: "Backend & Auth" },
            ].map((tool, i) => (
              <motion.div key={i} variants={scaleIn} className="tool-card aspect-square w-full max-w-[160px] mx-auto flex flex-col items-center justify-center rounded-xl border border-white/10 bg-transparent gap-4 p-5">
                {tool.tip && <span className="tool-tooltip">{tool.tip}</span>}
                <div className={`shrink-0 ${tool.color || ''}`}>
                  {tool.icon}
                </div>
                <span className="text-[13px] font-normal text-white/70 whitespace-nowrap">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <div className="section-divider max-w-2xl mx-auto" />

        {/* NEW: A Look At My Recent Work */}
        <section id="projects" className="container mx-auto px-6 mt-40 max-w-6xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-[32px] md:text-[40px] font-medium font-['Syne'] text-center text-white mb-20"
          >
            A Look At My Recent Work
          </motion.h2>

          <div className="space-y-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInLeft} className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[13px] text-[#3AEEE3] font-medium mb-3">Graduation Project · Case Study</p>
                <h3 className="text-[28px] font-medium text-white mb-6 font-['Syne'] leading-tight">GiftWise — AI Gift Direction</h3>
                <p className="text-[14px] text-[#A1A1AA] mb-4 leading-relaxed">
                  A zero-hallucination AI PWA that solves India's gifting translation gap — backed by a 45-person survey, competitive analysis, RICE-scored features, and a full monetisation and risk framework.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['User Research', 'RICE Scoring', 'PRD Writing', 'GTM Strategy'].map(tag => (
                    <span key={tag} className="skill-pill" style={{fontSize:'11px',padding:'4px 12px'}}>{tag}</span>
                  ))}
                </div>
                <a href="https://drive.google.com/file/d/1Oc4zMI0tdjIRkPRuvhTbXfidne7Xb2OJ/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[15px] font-medium text-[#CBD5E1] hover:text-white transition-colors group">
                  View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#151922] flex items-center justify-center h-full">
                <img src="/assets/giftwise_cover.png" alt="GiftWise — AI-powered gift recommendation app" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInRight} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden bg-[#151922] flex items-center justify-center h-full">
                <img src="/assets/ironlog_cover.png" alt="IronLog — AI-enhanced workout tracker" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-[13px] text-[#3AEEE3] font-medium mb-3">Product Build · Case Study</p>
                <h3 className="text-[28px] font-medium text-white mb-6 font-['Syne'] leading-tight">IronLog — AI-Enhanced Workout Tracker</h3>
                <p className="text-[14px] text-[#A1A1AA] mb-4 leading-relaxed">
                  A safety-first fitness tracker where deterministic math drives every progression decision and AI only explains it — eliminating hallucination risk for weight recommendations.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Product Build', 'Agile Sprint', 'Data Analysis', 'A/B Testing'].map(tag => (
                    <span key={tag} className="skill-pill" style={{fontSize:'11px',padding:'4px 12px'}}>{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-8">
                  <a href="https://drive.google.com/file/d/1XSH4CWckVQc29CAmMSPlbmzGKeYNreiJ/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[15px] font-medium text-[#CBD5E1] hover:text-white transition-colors group">
                    View Case Study <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="https://ironlog-one-xi.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[15px] font-medium text-[#CBD5E1] hover:text-white transition-colors group">
                    View Live App <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInLeft} className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[13px] text-[#3AEEE3] font-medium mb-3">Product Teardown</p>
                <h3 className="text-[28px] font-medium text-white mb-6 font-['Syne'] leading-tight">Make.com — New User Onboarding Teardown</h3>
                <p className="text-[14px] text-[#A1A1AA] mb-4 leading-relaxed">
                  Analysed Make.com's 10-step onboarding flow, mapped a 60% user drop-off funnel, identified 4 key friction points, and recommended sprint-level fixes with impact and effort scoring.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Competitive Analysis', 'Funnel Analysis', 'UX Research', 'Sprint Planning'].map(tag => (
                    <span key={tag} className="skill-pill" style={{fontSize:'11px',padding:'4px 12px'}}>{tag}</span>
                  ))}
                </div>
                <a href="https://drive.google.com/file/d/16qkxrSGElUknYHC_-slTKBaohstBZYc/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[15px] font-medium text-[#CBD5E1] hover:text-white transition-colors group">
                  View Teardown <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#151922] flex items-center justify-center h-full">
                <img src="/assets/make_teardown_cover.png" alt="Make.com — New user onboarding teardown" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {showAllProjects && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInRight} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 rounded-xl overflow-hidden bg-[#151922] flex items-center justify-center h-full">
                  <img src="/assets/project_vaani_cover.jpg" alt="Project Vaani — ChatGPT voice input PRD" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-[13px] text-[#3AEEE3] font-medium mb-3">Product Requirements Document</p>
                  <h3 className="text-[28px] font-medium text-white mb-6 font-['Syne'] leading-tight">Project Vaani — ChatGPT Voice Input PRD</h3>
                  <p className="text-[14px] text-[#A1A1AA] mb-4 leading-relaxed">
                    A full PRD to increase voice input adoption among Indian college students on ChatGPT mobile — covering user research, RICE-scored solutions, north star metrics, and a phased A/B rollout plan.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['User Research', 'RICE Framework', 'A/B Rollout', 'North Star Metric'].map(tag => (
                      <span key={tag} className="skill-pill" style={{fontSize:'11px',padding:'4px 12px'}}>{tag}</span>
                    ))}
                  </div>
                  <a href="https://drive.google.com/file/d/1URlYGVvSvmRi56NdT7YOjqeG64o62t0i/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[15px] font-medium text-[#CBD5E1] hover:text-white transition-colors group">
                    View PRD <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center gap-2 bg-[#2A2B31]/40 hover:bg-[#2A2B31]/80 px-6 py-3 rounded-md text-[14px] font-medium transition-colors text-[#CBD5E1] hover:text-white border border-white/10"
            >
              {showAllProjects ? "View Less ↑" : "View More →"}
            </button>
          </div>
        </section>

        <div className="section-divider max-w-2xl mx-auto" />

        {/* NEW: Recognition */}
        <section id="certification" className="container mx-auto px-6 mt-40 max-w-6xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-[32px] md:text-[40px] font-medium font-['Syne'] text-center text-white mb-20"
          >
            Certifications & Recognition
          </motion.h2>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="card-gradient rounded-xl border border-white/5 overflow-hidden flex flex-col">
              <div className="p-2 bg-white/5">
                <img src="/assets/nextleap_certificate.jpg" alt="Product Manager Fellowship — Top Fellow certificate from NextLeap" loading="lazy" className="w-full aspect-[4/3] object-contain rounded-sm" />
              </div>
              <div className="p-8">
                <h3 className="text-[20px] font-medium text-white mb-6">Product Manager Fellowship — Top Fellow · NextLeap</h3>
                <a href="https://nextleap.app/certificates/verify/nlcertqjzuyfiviwcrviql" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[14px] text-[#CBD5E1] hover:text-white transition-colors group">
                  View Certificate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="card-gradient rounded-xl border border-white/5 overflow-hidden flex flex-col">
              <div className="p-2 bg-white/5">
                <img src="/assets/oracle_certificate_v2.png" alt="Oracle Cloud Infrastructure 2025 — Generative AI Professional certificate" loading="lazy" className="w-full aspect-[4/3] object-contain rounded-sm" />
              </div>
              <div className="p-8">
                <h3 className="text-[20px] font-medium text-white mb-6">Oracle Cloud Infrastructure 2025 — Generative AI Professional</h3>
                <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=DE9984A3A1EEF31E7A07AB8EBC2895E5C7E28218BC1D482B632C3008639314E3" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[14px] text-[#CBD5E1] hover:text-white transition-colors group">
                  View Certificate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {showAllCertificates && (
              <>
                <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="card-gradient rounded-xl border border-white/5 overflow-hidden flex flex-col">
                  <div className="p-2 bg-white/5">
                    <img src="/assets/pwc_certificate.png" alt="Effective Business Presentations with PowerPoint — PwC certificate" loading="lazy" className="w-full aspect-[4/3] object-contain rounded-sm" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-[20px] font-medium text-white mb-6">Effective Business Presentations with PowerPoint · PwC</h3>
                    <a href="https://www.coursera.org/account/accomplishments/records/XTZZOIVZ6SB7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[14px] text-[#CBD5E1] hover:text-white transition-colors group">
                      View Certificate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="card-gradient rounded-xl border border-white/5 overflow-hidden flex flex-col">
                  <div className="p-2 bg-white/5">
                    <img src="/assets/ibm_certificate.png" alt="Introduction to Agile Development and Scrum — IBM certificate" loading="lazy" className="w-full aspect-[4/3] object-contain rounded-sm" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-[20px] font-medium text-white mb-6">Introduction to Agile Development and Scrum · IBM</h3>
                    <a href="https://coursera.org/verify/4IA7C3BJR4AE" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[14px] text-[#CBD5E1] hover:text-white transition-colors group">
                      View Certificate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAllCertificates(!showAllCertificates)}
              className="inline-flex items-center gap-2 bg-[#2A2B31]/40 hover:bg-[#2A2B31]/80 px-6 py-3 rounded-md text-[14px] font-medium transition-colors text-[#CBD5E1] hover:text-white border border-white/10"
            >
              {showAllCertificates ? "View Less ↑" : "View More →"}
            </button>
          </div>
        </section>

        <div className="section-divider max-w-2xl mx-auto" />

        {/* NEW: Where You Can Find Me */}
        <section id="contact" className="container mx-auto px-6 mt-40 max-w-5xl mb-24">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-[32px] md:text-[40px] font-medium font-['Syne'] text-center text-white mb-20"
          >
            Where You Can Find Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col items-center relative">
              <div className="relative mb-8">
                <img src="/assets/profile_photo_v2.png" alt="Mayur Shelar — Product Manager" loading="lazy" className="w-48 h-48 object-cover rounded-full bg-white/5 border border-white/10" />
              </div>

              <div className="space-y-6 text-center">
                <a
                  href="mailto:mayursh1111@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-[#3AEEE3]/30 bg-[#3AEEE3]/5 text-white font-medium text-[16px] hover:bg-[#3AEEE3]/12 hover:border-[#3AEEE3]/60 transition-all group shadow-lg shadow-[#3AEEE3]/5"
                >
                  <Mail size={20} className="text-[#3AEEE3]" />
                  Let's Talk
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[#3AEEE3]" />
                </a>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-center gap-2 text-[13px] text-[#A1A1AA]">
                    <Mail size={13} className="text-[#3AEEE3]/60" />
                    <span>mayursh1111@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[13px] text-[#A1A1AA]">
                    <Phone size={13} className="text-[#3AEEE3]/60" />
                    <span>+91 98196 22036</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              <motion.a variants={fadeInUp} href="https://www.linkedin.com/in/mayurr-shelar-ms/" target="_blank" rel="noreferrer" aria-label="Visit Mayur's LinkedIn profile" className="card-gradient p-8 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4 group hover:border-[#0A66C2]/50 transition-all">
                <div className="w-14 h-14 rounded-full bg-[#0A66C2] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaLinkedin size={28} />
                </div>
                <span className="text-[14px] font-medium text-[#CBD5E1] group-hover:text-white underline decoration-transparent group-hover:decoration-white underline-offset-4 transition-all">LinkedIn</span>
              </motion.a>

              <motion.a variants={fadeInUp} href="https://github.com/MayurShelar01" target="_blank" rel="noreferrer" aria-label="Visit Mayur's GitHub profile" className="card-gradient p-8 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4 group hover:border-white/50 transition-all">
                <div className="w-14 h-14 rounded-full bg-[#333] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaGithub size={28} />
                </div>
                <span className="text-[14px] font-medium text-[#CBD5E1] group-hover:text-white underline decoration-transparent group-hover:decoration-white underline-offset-4 transition-all">GitHub</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer glow */}
      <div className="footer-glow" />

      {/* Footer */}
      <footer className="bg-[#121110] pt-16 pb-12 text-center">
        <div className="footer-gradient-border mb-12" />
        <div className="flex justify-center gap-10 text-[13px] font-medium text-[#A1A1AA] mb-10">
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#certification" className="hover:text-white transition-colors">Certification</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex justify-center gap-5 mb-10">
          <a href="https://www.linkedin.com/in/mayurr-shelar-ms/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-white/20 transition-all">
            <FaLinkedin size={18} />
          </a>
          <a href="https://github.com/MayurShelar01" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-white/20 transition-all">
            <FaGithub size={18} />
          </a>
        </div>

        <div className="w-full max-w-5xl mx-auto h-px bg-white/5 mb-12"></div>

        <div className="font-['Syne'] font-medium text-[28px] text-white tracking-[0.2em] mb-4">MAYUR SHELAR</div>
        <p className="text-[14px] text-[#A1A1AA] mb-8">Product Manager · Open To Work</p>

        <p className="text-[12px] text-[#A1A1AA]/60">©All Rights Reserved {new Date().getFullYear()}</p>
      </footer>
    </motion.div>
  );
}

export default App;
