import React, { useState } from 'react';
import { Download, MapPin, Phone, Users, BarChart2, BrainCircuit, RefreshCw, ArrowRight, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { SiFigma, SiGit, SiNotion, SiGoogleanalytics, SiVercel, SiSupabase } from 'react-icons/si';
import { FaDatabase, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen text-[#CBD5E1] bg-[#020713] font-['Inter'] relative overflow-hidden">
      <div className="glow-bg"></div>

      <nav className="fixed top-0 w-full z-50 py-5 px-6 md:px-12 flex justify-between items-center bg-[#020713]/80 backdrop-blur-md border-b border-white/5">
        <div className="font-['Syne'] font-semibold text-lg text-white tracking-wide">Mayur Shelar</div>
        <div className="hidden md:flex gap-10 text-[13px] font-medium text-[#CBD5E1]">
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#certification" className="hover:text-white transition-colors">Certification</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="flex items-center gap-2 bg-[#2A2B31]/40 hover:bg-[#2A2B31]/80 px-5 py-2.5 rounded-md text-[13px] font-medium transition-colors text-[#CBD5E1] border border-white/10">
          <Download size={14} className="text-[#3AEEE3]" />
          My Resume
        </button>
      </nav>

      <main className="pt-32">
        {/* ss1: Hero Area */}
        <section className="container mx-auto px-6 text-center mt-16 md:mt-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none mix-blend-screen" style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(46,232,232,0.15) 0%, rgba(2,7,19,0) 70%)" }}>
          </div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10">
            <p className="text-[14px] font-medium mb-4 text-[#CBD5E1]">Hey, I'm <span className="text-white font-bold">Mayur</span></p>
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium font-['Syne'] text-white leading-tight tracking-tight">
              A Top PM Fellow · Next Leap
            </h1>
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium font-['Syne'] leading-tight mb-8">
              <span className="text-gradient">Product Manager</span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-[14px] text-[#CBD5E1] mt-4 mb-32">
              <MapPin size={14} />
              <span>Based in Mumbai, India</span>
            </div>

            <div className="max-w-4xl mx-auto flex justify-between items-center text-[13px] text-[#CBD5E1] border-t border-dashed border-white/20 pt-5 mt-24">
              <span></span>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>Let's Talk : +91 98196 22036</span>
              </div>
            </div>
          </motion.div>
        </section>

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
            <motion.div variants={fadeInUp} className="card-gradient p-8 rounded-xl border border-white/5">
              <Users className="text-white mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-[20px] font-medium text-white mb-3 font-['Syne']">People-Led Execution</h3>
              <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                Great products are built by great teams. I've led and coordinated large-scale events across 20+ institutions bringing together diverse people, managing pressure, and always delivering on the goal.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient p-8 rounded-xl border border-white/5">
              <BarChart2 className="text-white mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-[20px] font-medium text-white mb-3 font-['Syne']">Data Driven Decisions</h3>
              <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                I let data lead the way. From defining success metrics to prioritising features every product decision I make is backed by evidence, not instinct.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient p-8 rounded-xl border border-white/5">
              <RefreshCw className="text-white mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-[20px] font-medium text-white mb-3 font-['Syne']">User-Centric Design</h3>
              <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                I start with the user, always. Real conversations over assumptions because building the right thing matters more than building the thing fast.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient p-8 rounded-xl border border-white/5">
              <BrainCircuit className="text-white mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-[20px] font-medium text-white mb-3 font-['Syne']">Continuous Learning</h3>
              <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                Every product, every cohort, every challenge teaches me something new. I stay curious, adapt quickly, and bring fresh thinking into everything I work on.
              </p>
            </motion.div>
          </motion.div>
        </section>

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
            className="grid md:grid-cols-3 gap-x-12 gap-y-10 text-left pt-8"
          >
            {[
              "Product Discovery", "User Research", "PRD Writing",
              "Stakeholder Management", "Competitive Analysis", "GTM Strategy",
              "Agile & Sprint Planning", "Wireframing", "Prompt Engineering"
            ].map((skill, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <p className="text-[14px] text-[#CBD5E1] mb-3">{skill}</p>
                <div className="w-full h-px bg-white/10 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* NEW: Tools I Use */}
        <section className="container mx-auto px-6 mt-40 max-w-3xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {/* Row 1: Figma · FigJam · Notion · Whimsical */}
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-2">
              <SiFigma size={20} className="text-[#F24E1E]" />
              <span className="text-[13px] font-medium text-white">Figma</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-2">
              <SiFigma size={20} className="text-[#00D084]" />
              <span className="text-[13px] font-medium text-white">FigJam</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-2">
              <SiNotion size={20} className="text-white" />
              <span className="text-[13px] font-medium text-white">Notion</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-2">
              <div className="w-5 h-5 rounded-full bg-[#A855F7] flex items-center justify-center"><div className="w-2 h-2 bg-white rotate-45"></div></div>
              <span className="text-[13px] font-medium text-white">Whimsical</span>
            </motion.div>

            {/* Row 2: GA4 · [Tools I Use] · SQL */}
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-2">
              <SiGoogleanalytics size={20} className="text-[#E37400]" />
              <span className="text-[13px] font-medium text-white">GA4</span>
            </motion.div>
            {/* Title spanning 2 columns */}
            <motion.div variants={fadeInUp} className="col-span-2 flex items-center justify-center rounded-lg">
              <h2 className="text-[32px] md:text-[40px] font-bold font-['Syne'] text-white">Tools I Use</h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-2">
              <FaDatabase size={20} className="text-[#F29111]" />
              <span className="text-[13px] font-medium text-white">SQL</span>
            </motion.div>

            {/* Row 3: Figma Make AI · Git · Vercel · Supabase */}
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-2">
              <SiFigma size={20} className="text-[#9B59B6]" />
              <span className="text-[13px] font-medium text-white">Figma Make AI</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-2">
              <SiGit size={20} className="text-[#F05032]" />
              <span className="text-[13px] font-medium text-white">Git</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-2">
              <SiVercel size={20} className="text-white" />
              <span className="text-[13px] font-medium text-white">Vercel</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-2">
              <SiSupabase size={20} className="text-[#3ECF8E]" />
              <span className="text-[13px] font-medium text-white">Supabase</span>
            </motion.div>
          </motion.div>
        </section>

        {/* NEW: A Look At My Recent Work */}
        <section id="projects" className="container mx-auto px-6 mt-40 max-w-6xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-[32px] md:text-[40px] font-medium font-['Syne'] text-center text-white mb-20"
          >
            A Look At My Recent Work
          </motion.h2>

          <div className="space-y-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[13px] text-[#3AEEE3] font-medium mb-3">Graduation Project · Case Study</p>
                <h3 className="text-[28px] font-medium text-white mb-6 font-['Syne'] leading-tight">GiftWise — AI Gift Direction</h3>
                <p className="text-[14px] text-[#A1A1AA] mb-10 leading-relaxed">
                  A zero-hallucination AI PWA that solves India's gifting translation gap — backed by a 45-person survey, competitive analysis, RICE-scored features, and a full monetisation and risk framework.
                </p>
                <a href="https://drive.google.com/file/d/1Oc4zMI0tdjIRkPRuvhTbXfidne7Xb2OJ/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[15px] font-medium text-[#CBD5E1] hover:text-white transition-colors group">
                  View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#151922] p-4 flex items-center justify-center h-full">
                <img src="/assets/giftwise_cover.png" alt="GiftWise" className="w-full rounded-lg" />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden bg-[#151922] p-4 flex items-center justify-center h-full">
                <img src="/assets/tindery_app.png" alt="Shohoz Learn App" className="w-full rounded-lg" />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-[13px] text-[#3AEEE3] font-medium mb-3">Product Build · Case Study</p>
                <h3 className="text-[28px] font-medium text-white mb-6 font-['Syne'] leading-tight">IronLog — AI-Enhanced Workout Tracker</h3>
                <p className="text-[14px] text-[#A1A1AA] mb-10 leading-relaxed">
                  A safety-first fitness tracker where deterministic math drives every progression decision and AI only explains it — eliminating hallucination risk for weight recommendations.
                </p>
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

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[13px] text-[#3AEEE3] font-medium mb-3">Product Teardown</p>
                <h3 className="text-[28px] font-medium text-white mb-6 font-['Syne'] leading-tight">Make.com — New User Onboarding Teardown</h3>
                <p className="text-[14px] text-[#A1A1AA] mb-10 leading-relaxed">
                  Analysed Make.com's 10-step onboarding flow, mapped a 60% user drop-off funnel, identified 4 key friction points, and recommended sprint-level fixes with impact and effort scoring.
                </p>
                <a href="https://drive.google.com/file/d/16qkxrSGElUknYHC_-slTKBaohstBZYc/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[15px] font-medium text-[#CBD5E1] hover:text-white transition-colors group">
                  View Teardown <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#151922] p-4 flex items-center justify-center h-full">
                <img src="/assets/make_teardown_cover.png" alt="Make.com Teardown" className="w-full rounded-lg" />
              </div>
            </motion.div>

            {showAllProjects && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 rounded-xl overflow-hidden bg-[#151922] p-4 flex items-center justify-center h-full">
                  <img src="/assets/project_vaani_cover.jpg" alt="Project Vaani" className="w-full rounded-lg" />
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-[13px] text-[#3AEEE3] font-medium mb-3">Product Requirements Document</p>
                  <h3 className="text-[28px] font-medium text-white mb-6 font-['Syne'] leading-tight">Project Vaani — ChatGPT Voice Input PRD</h3>
                  <p className="text-[14px] text-[#A1A1AA] mb-10 leading-relaxed">
                    A full PRD to increase voice input adoption among Indian college students on ChatGPT mobile — covering user research, RICE-scored solutions, north star metrics, and a phased A/B rollout plan.
                  </p>
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
                <img src="/assets/nextleap_certificate.jpg" alt="Product Manager Fellowship" className="w-full aspect-[4/3] object-contain rounded-sm" />
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
                <img src="/assets/oracle_certificate_v2.png" alt="Oracle Generative AI" className="w-full aspect-[4/3] object-contain rounded-sm" />
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
                    <img src="/assets/pwc_certificate.png" alt="Effective Business Presentations with PowerPoint · PwC" className="w-full aspect-[4/3] object-contain rounded-sm" />
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
                    <img src="/assets/ibm_certificate.png" alt="Introduction to Agile Development and Scrum · IBM" className="w-full aspect-[4/3] object-contain rounded-sm" />
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
                <img src="/assets/profile_photo_v2.png" alt="Mayur Shelar" className="w-48 h-48 object-cover rounded-full bg-white/5 border border-white/10" />
              </div>

              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-3 text-[16px] text-white">
                  <Mail size={18} />
                  <span>Email: mayursh1111@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-[16px] text-white">
                  <Phone size={18} />
                  <span>Phone: +91 98196 22036</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              <motion.a variants={fadeInUp} href="https://www.linkedin.com/in/mayurr-shelar-ms/" target="_blank" rel="noreferrer" className="card-gradient p-8 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4 group hover:border-[#0A66C2]/50 transition-all">
                <div className="w-14 h-14 rounded-full bg-[#0A66C2] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaLinkedin size={28} />
                </div>
                <span className="text-[14px] font-medium text-[#CBD5E1] group-hover:text-white underline decoration-transparent group-hover:decoration-white underline-offset-4 transition-all">LinkedIn</span>
              </motion.a>

              <motion.a variants={fadeInUp} href="https://github.com/MayurShelar01" target="_blank" rel="noreferrer" className="card-gradient p-8 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4 group hover:border-white/50 transition-all">
                <div className="w-14 h-14 rounded-full bg-[#333] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaGithub size={28} />
                </div>
                <span className="text-[14px] font-medium text-[#CBD5E1] group-hover:text-white underline decoration-transparent group-hover:decoration-white underline-offset-4 transition-all">GitHub</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* NEW: Footer */}
      <footer className="bg-[#121110] pt-16 pb-12 text-center border-t border-white/5">
        <div className="flex justify-center gap-10 text-[13px] font-medium text-[#A1A1AA] mb-12">
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#certification" className="hover:text-white transition-colors">Certification</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="w-full max-w-5xl mx-auto h-px bg-white/5 mb-12"></div>

        <div className="font-['Syne'] font-medium text-[32px] text-white tracking-widest mb-4">MAYUR SHELAR</div>
        <p className="text-[14px] text-[#A1A1AA] mb-8">Product Manager · Open To Work</p>

        <p className="text-[12px] text-[#A1A1AA]/60">©All Rights Reserved {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
