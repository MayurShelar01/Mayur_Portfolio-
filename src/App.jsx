import React, { useState } from 'react';
import { Download, MapPin, Phone, Users, BarChart2, BrainCircuit, RefreshCw, ArrowRight, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { SiJira, SiFigma, SiMetabase, SiMysql, SiPostgresql, SiMongodb, SiGit, SiPython, SiDocker, SiWordpress } from 'react-icons/si';
import { FaDatabase, FaFacebook, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { IoLogoTableau } from 'react-icons/io5';
import { motion } from 'framer-motion';

function App() {
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
        <div className="font-['Syne'] font-semibold text-lg text-white tracking-wide">Ashik Al Habib</div>
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
            <p className="text-[14px] font-medium mb-4 text-[#CBD5E1]">Hey, I'm <span className="text-white font-bold">Ashik</span></p>
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium font-['Syne'] text-white leading-tight tracking-tight">
              A Certified Scrum Product Owner®
            </h1>
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium font-['Syne'] leading-tight mb-8">
              <span className="text-gradient">Product Manager</span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-[14px] text-[#CBD5E1] mt-4 mb-32">
              <MapPin size={14} />
              <span>Based in Ontario, Canada</span>
            </div>

            <div className="max-w-4xl mx-auto flex justify-between items-center text-[13px] text-[#CBD5E1] border-t border-dashed border-white/20 pt-5 mt-24">
              <span></span>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>Let's Talk : 437-848-7469</span>
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
              <h3 className="text-[20px] font-medium text-white mb-3 font-['Syne']">Collaborative Ideation</h3>
              <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                Brainstorming and developing new product ideas with a team. Collaborative Ideation harnesses teamwork to brainstorm new ideas.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient p-8 rounded-xl border border-white/5">
              <BarChart2 className="text-white mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-[20px] font-medium text-white mb-3 font-['Syne']">Data Driven Decisions</h3>
              <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                Uses data to inform product strategy, prioritize features, and optimization.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient p-8 rounded-xl border border-white/5">
              <RefreshCw className="text-white mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-[20px] font-medium text-white mb-3 font-['Syne']">User-Centric Design</h3>
              <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                Prioritizes user needs for a successful, problem-solving product.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient p-8 rounded-xl border border-white/5">
              <BrainCircuit className="text-white mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-[20px] font-medium text-white mb-3 font-['Syne']">Continuous Learning</h3>
              <p className="text-[13px] text-[#A1A1AA] leading-relaxed">
                New technologies, market trends, and user behaviors require ongoing exploration to build successful products.
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
            2+ Years Of Experience
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
                <p className="text-[12px] text-[#A1A1AA] mb-1">Junior Product Manager</p>
                <h3 className="text-[22px] font-medium text-white mb-3 font-['Syne']">Shikho Technologies Ltd.</h3>
                <p className="text-[12px] text-[#A1A1AA] mb-6">Dhaka, Bangladesh <span className="mx-2">•</span> Mar 2022 - Jan 2023</p>

                <div className="border-t border-dashed border-white/10 pt-6 mt-6">
                  <ul className="text-[13px] text-[#CBD5E1] space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-sm bg-white/40 mt-1.5 shrink-0"></span>
                      <p className="leading-relaxed">Researched and successfully improved the app with the product development team and introduced v2.0, resulting in a <span className="font-semibold text-white">40% increase in the total user base</span> and a 25% rise in active users.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-sm bg-white/40 mt-1.5 shrink-0"></span>
                      <p className="leading-relaxed">Conducted cross-functional collaboration and successfully redesigned the whole freemium section of the app, comprising free content, resulting in a <span className="font-semibold text-white">32% surge in active users</span>.</p>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="card-gradient p-8 rounded-xl border border-white/5">
                <p className="text-[12px] text-[#A1A1AA] mb-1">Junior Product Manager</p>
                <h3 className="text-[22px] font-medium text-white mb-3 font-['Syne']">Bots and People GmbH</h3>
                <p className="text-[12px] text-[#A1A1AA] mb-6">Berlin, Germany <span className="mx-2">•</span> Remote <span className="mx-2">•</span> Dec 2021 - Feb 2022</p>

                <div className="border-t border-dashed border-white/10 pt-6 mt-6">
                  <ul className="text-[13px] text-[#CBD5E1] space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-sm bg-white/40 mt-1.5 shrink-0"></span>
                      <p className="leading-relaxed">Oversaw and supported the implementation and strategy of the first independent Service Marketplace for Process Automation.</p>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="card-gradient p-8 rounded-xl border border-white/5">
                <p className="text-[12px] text-[#A1A1AA] mb-1">Prodcut Analyst</p>
                <h3 className="text-[22px] font-medium text-white mb-3 font-['Syne']">Shohoz Limited</h3>
                <p className="text-[12px] text-[#A1A1AA] mb-6">Dhaka, Bangladesh <span className="mx-2">•</span> Apr 2021 - Nov 2021</p>

                <div className="border-t border-dashed border-white/10 pt-6 mt-6">
                  <ul className="text-[13px] text-[#CBD5E1] space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-sm bg-white/40 mt-1.5 shrink-0"></span>
                      <p className="leading-relaxed">Researched and analyzed with the product development team and successfully revamped the user authentication and validation journey for <span className="font-semibold text-white">5 million users</span>, ensuring better user experience and security.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-sm bg-white/40 mt-1.5 shrink-0"></span>
                      <p className="leading-relaxed">Partnered with the product development team to craft a comprehensive overhaul of the Shohoz super-app, incorporating new features, resulting in a significant <span className="font-semibold text-white">increase of 50,000 users</span>.</p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid md:grid-cols-[220px_1fr] gap-x-12 relative">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="hidden md:flex items-start"
            >
              <div className="sticky top-32 w-full flex items-center pt-8">
                <span className="text-[14px] text-[#CBD5E1] whitespace-nowrap">Addional Work</span>
                <div className="flex-grow border-b border-dashed border-white/10 ml-4"></div>
              </div>
            </motion.div>

            <div className="pt-8">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="card-gradient p-8 rounded-xl border border-white/5">
                <p className="text-[12px] text-[#A1A1AA] mb-1">Technology Consultant (Part-Time)</p>
                <h3 className="text-[22px] font-medium text-white mb-3 font-['Syne']">Staples Canada</h3>
                <p className="text-[12px] text-[#A1A1AA] mb-6">Canada, Windsor, On <span className="mx-2">•</span> Aug 2023 - Present</p>

                <div className="border-t border-dashed border-white/10 pt-6 mt-6">
                  <ul className="text-[13px] text-[#CBD5E1] space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-sm bg-white/40 mt-1.5 shrink-0"></span>
                      <p className="leading-relaxed">Researched and analyzed with the product development team and successfully revamped the user authentication and validation journey for <span className="font-semibold text-white">5 million users</span>, ensuring better user experience and security.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-sm bg-white/40 mt-1.5 shrink-0"></span>
                      <p className="leading-relaxed">Partnered with the product development team to craft a comprehensive overhaul of the Shohoz super-app, incorporating new features, resulting in a significant <span className="font-semibold text-white">increase of 50,000 users</span>.</p>
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
            I Help You To<br />Make Wonderful Products
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-[14px] text-[#CBD5E1] opacity-80 max-w-3xl mx-auto mb-16 mt-6 leading-relaxed"
          >
            I am a seasoned product manager with expertise in product development, project management, and team leadership. My skills include market analysis, user research, and stakeholder collaboration.
          </motion.p>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-x-12 gap-y-10 text-left pt-8"
          >
            {[
              "Product Lifecycle Management", "Business Development", "Data-Driven Decision Making",
              "Agile Methodologies", "Technical Proficiency", "Usability Testing",
              "Agile Project Management", "Competitive Analysis", "Information Architecture",
              "Market Research", "Database Management", "User Persona Creation",
              "Stakeholder Management", "Data Analysis", "Journey Mapping"
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
        <section className="container mx-auto px-6 mt-40 max-w-5xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-6 gap-4"
          >
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <SiJira size={32} className="text-[#0052CC]" />
              <span className="text-[13px] font-medium text-white">Jira</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <VscAzure size={32} className="text-[#008AD7]" />
              <span className="text-[13px] font-medium text-white">Azure</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <FaDatabase size={32} className="text-[#F29111]" />
              <span className="text-[13px] font-medium text-white">SQL</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <IoLogoTableau size={32} className="text-[#E97627]" />
              <span className="text-[13px] font-medium text-white">Tableau</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <SiFigma size={32} className="text-[#F24E1E]" />
              <span className="text-[13px] font-medium text-white">Figma</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <SiFigma size={32} className="text-[#00D084]" /> {/* Using different color figma for figjam */}
              <span className="text-[13px] font-medium text-white">FigJam</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <div className="w-8 h-8 rounded-full bg-[#A855F7] flex items-center justify-center"><div className="w-3 h-3 bg-white rotate-45"></div></div>
              <span className="text-[13px] font-medium text-white">Whimsical</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <SiMetabase size={32} className="text-[#509EE3]" />
              <span className="text-[13px] font-medium text-white">Metabase</span>
            </motion.div>

            {/* Title spanning 2 columns */}
            <motion.div variants={fadeInUp} className="col-span-2 md:col-span-2 flex items-center justify-center rounded-lg">
              <h2 className="text-[32px] md:text-[40px] font-bold font-['Syne'] text-white">Tools I Use</h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <BarChart2 size={32} className="text-[#F2C811]" />
              <span className="text-[13px] font-medium text-white">PowerBI</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <SiMysql size={32} className="text-[#4479A1]" />
              <span className="text-[13px] font-medium text-white">MySQL</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <SiPostgresql size={32} className="text-[#336791]" />
              <span className="text-[13px] font-medium text-white">Postgresql</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <SiMongodb size={32} className="text-[#47A248]" />
              <span className="text-[13px] font-medium text-white">MongoDB</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <SiGit size={32} className="text-[#F05032]" />
              <span className="text-[13px] font-medium text-white">Git</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <SiPython size={32} className="text-[#3776AB]" />
              <span className="text-[13px] font-medium text-white">Python</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <SiDocker size={32} className="text-[#2496ED]" />
              <span className="text-[13px] font-medium text-white">Docker</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="card-gradient aspect-square flex flex-col items-center justify-center rounded-lg border border-white/5 gap-3">
              <SiWordpress size={32} className="text-[#21759B]" />
              <span className="text-[13px] font-medium text-white">Wordpress</span>
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
                <h3 className="text-[28px] font-medium text-white mb-6 font-['Syne'] leading-tight">Shohoz SuperApp Homepage Revamp 3.0</h3>
                <p className="text-[14px] text-[#A1A1AA] mb-10 leading-relaxed">
                  This project involved a complete redesign of the Shohoz SuperApp homepage. We introduced several new features and services, leading to Shohoz becoming the number 1 super-app in Bangladesh with more than 5 million users across all services.
                </p>
                <a href="https://dribbble.com/shots/24239491-Portfolio-Website-Design-for-Product-Manager" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[15px] font-medium text-[#CBD5E1] hover:text-white transition-colors group">
                  View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#151922] p-4 flex items-center justify-center h-full">
                <img src="/assets/shakira_app.png" alt="Shohoz SuperApp" className="w-full rounded-lg" />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden bg-[#151922] p-4 flex items-center justify-center h-full">
                <img src="/assets/tindery_app.png" alt="Shohoz Learn App" className="w-full rounded-lg" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-[28px] font-medium text-white mb-6 font-['Syne'] leading-tight">Shohoz Learn App</h3>
                <p className="text-[14px] text-[#A1A1AA] mb-10 leading-relaxed">
                  In collaboration with Scholastic and MummyDaddyMe, we developed the Shohoz Learn App, an educational platform for children. The platform provides access to over 100 Scholastic books, audiobooks, and quizzes.
                </p>
                <a href="https://dribbble.com/shots/24239491-Portfolio-Website-Design-for-Product-Manager" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[15px] font-medium text-[#CBD5E1] hover:text-white transition-colors group">
                  View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* NEW: Recognition */}
        <section id="certification" className="container mx-auto px-6 mt-40 max-w-6xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-[32px] md:text-[40px] font-medium font-['Syne'] text-center text-white mb-20"
          >
            Recognition Of Professional Milestones
          </motion.h2>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="card-gradient rounded-xl border border-white/5 overflow-hidden flex flex-col">
              <div className="p-2 bg-white/5">
                <img src="/assets/certificate_1.png" alt="Technical Product Management" className="w-full aspect-[4/3] object-contain bg-white" />
              </div>
              <div className="p-8">
                <h3 className="text-[20px] font-medium text-white mb-6">Technical Product Management</h3>
                <a href="#" className="inline-flex items-center gap-2 text-[14px] text-[#CBD5E1] hover:text-white transition-colors group">
                  View Certificate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="card-gradient rounded-xl border border-white/5 overflow-hidden flex flex-col">
              <div className="p-2 bg-white/5">
                <img src="/assets/certificate_2.png" alt="Scrum Product Owner" className="w-full aspect-[4/3] object-contain bg-white" />
              </div>
              <div className="p-8">
                <h3 className="text-[20px] font-medium text-white mb-6">Scrum Product Owner Accredited Certification™</h3>
                <a href="#" className="inline-flex items-center gap-2 text-[14px] text-[#CBD5E1] hover:text-white transition-colors group">
                  View Certificate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
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
                <img src="/assets/avatar_ashik.png" alt="Ashik" className="w-48 h-48 object-cover rounded-full bg-white/5 border border-white/10" />
                <div className="absolute -right-20 top-1/4 transform rotate-[15deg] opacity-60">
                  {/* Mock handwritten arrow & text */}
                  <div className="font-['Caveat',cursive] text-2xl text-white">Here's my face!</div>
                  <svg className="w-16 h-16 text-white absolute -left-12 top-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
                </div>
              </div>

              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-3 text-[16px] text-white">
                  <Mail size={18} />
                  <span>Email: ashikhabib32@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-[16px] text-white">
                  <Phone size={18} />
                  <span>Phone: +1 437-848-7469</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              <motion.a variants={fadeInUp} href="#" className="card-gradient p-8 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4 group hover:border-[#1877F2]/50 transition-all">
                <div className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaFacebook size={28} />
                </div>
                <span className="text-[14px] font-medium text-[#CBD5E1] group-hover:text-white underline decoration-transparent group-hover:decoration-white underline-offset-4 transition-all">Facebook</span>
              </motion.a>

              <motion.a variants={fadeInUp} href="#" className="card-gradient p-8 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4 group hover:border-[#0A66C2]/50 transition-all">
                <div className="w-14 h-14 rounded-full bg-[#0A66C2] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaLinkedin size={28} />
                </div>
                <span className="text-[14px] font-medium text-[#CBD5E1] group-hover:text-white underline decoration-transparent group-hover:decoration-white underline-offset-4 transition-all">LinkedIn</span>
              </motion.a>

              <motion.a variants={fadeInUp} href="#" className="card-gradient p-8 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4 group hover:border-[#E4405F]/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaInstagram size={28} />
                </div>
                <span className="text-[14px] font-medium text-[#CBD5E1] group-hover:text-white underline decoration-transparent group-hover:decoration-white underline-offset-4 transition-all">Instagram</span>
              </motion.a>

              <motion.a variants={fadeInUp} href="#" className="card-gradient p-8 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4 group hover:border-[#5865F2]/50 transition-all">
                <div className="w-14 h-14 rounded-full bg-[#5865F2] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FaDiscord size={28} />
                </div>
                <span className="text-[14px] font-medium text-[#CBD5E1] group-hover:text-white underline decoration-transparent group-hover:decoration-white underline-offset-4 transition-all">Discord</span>
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

        <div className="font-['Syne'] font-medium text-[32px] text-white tracking-widest mb-4">ASHIK AL HABIB</div>
        <p className="text-[14px] text-[#A1A1AA] mb-8">Product Manager Ready For Your Service</p>

        <p className="text-[12px] text-[#A1A1AA]/60">©All Rights Reserved {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
