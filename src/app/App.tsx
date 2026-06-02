import { motion, useScroll, useInView, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";

const imgEllipse3 = "https://www.figma.com/api/mcp/asset/27fc7a48-b196-462f-8e82-f20cbc14cb0e";
const imgRectangle = "https://www.figma.com/api/mcp/asset/2e42fa8a-3c51-478c-bf92-d16e03fdd552";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/12025e93-0f1e-4c25-af96-0eec6db7aee7";
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/14af5311-3d36-44c0-bb4d-fa65860d6ca0";
const imgRectangle3 = "https://www.figma.com/api/mcp/asset/9972a6ee-4a76-4cdd-8dd3-a418f70dc63f";
const imgRectangle4 = "https://www.figma.com/api/mcp/asset/f41d05ce-5623-496b-9ebd-c2a089b3176c";
const imgEllipse = "https://www.figma.com/api/mcp/asset/aa5bf48f-1a28-4dad-a537-4bc9a0a3079e";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/e5c56e4d-5068-4cae-b307-83ca38d52dd0";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/264cba3e-daf2-4440-9c66-b34f41303594";
const imgEllipse5 = "https://www.figma.com/api/mcp/asset/275db583-b5a4-42b2-97b5-58f4a04d1bbb";
const imgEllipse6 = "https://www.figma.com/api/mcp/asset/6d5199d1-c22c-488b-a014-718049d805ce";

function useReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView };
}

function useCountUp(end: number, isInView: boolean, duration = 1.5) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);
  return count;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#F4DDB5] origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const aboutRef = useReveal();
  const aboutStatsRef = useReveal();
  const aboutPortraitRef = useReveal();
  const projectsRef = useReveal();
  const servicesRef = useReveal();
  const contactRef = useReveal();

  const count47 = useCountUp(47, aboutStatsRef.isInView);
  const count98 = useCountUp(98, aboutStatsRef.isInView);

  const navLinks = [
    { href: "#apropos", label: "À propos" },
    { href: "#projets", label: "Projets" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const skills = ["UI Design", "UX Research", "Figma", "Framer", "HTML / CSS", "Branding", "Motion", "Webflow", "Merch"];

  const projects = [
    { bg: "#121721", tag: "WEB · UI/UX", title: "Ateliers du bois", img: imgRectangle1, href: "https://www.figma.com/design/NpjwDYmFkmp8ZHWakGISqD/Website---Ateliers-du-bois?node-id=0-1" },
    { bg: "#17121c", tag: "APP · UI/UX", title: "Courtepaille", img: imgRectangle2, href: "https://www.figma.com/design/wGJWpgc32VSlxxaKnxycBB/Courtepaille-App?node-id=0-1" },
    { bg: "#141a17", tag: "WEB · SITE VITRINE", title: "Xavier Sport Scientist", img: imgRectangle3, href: "https://www.figma.com/design/ttWG99B1cpghAyJfOPvDJs/TP4_DG3_sitevitrine_XavierSportScientist?node-id=5468-1192" },
    { bg: "#1c1712", tag: "BRANDING · MERCH", title: "Codiac FM", img: imgRectangle4, href: "https://www.figma.com/design/tBnQCGKchoSOi8JA4FPj4n/CODIAC-MERCH-PRESENTATION?node-id=0-1" },
  ];

  const services = [
    { icon: "✦", title: "UI / UX Design", desc: "Wireframes, maquettes haute-fidélité, prototypes Figma interactifs et design systems.", price: "À partir de 2000 $" },
    { icon: "◈", title: "Site web", desc: "Design et intégration sur WordPress / Framer. Rapides, performants et optimisés.", price: "Sur devis" },
    { icon: "◇", title: "Branding & Identité", desc: "Logo, palette, typographie, charte graphique et templates. Identité complète.", price: "À partir de 3500 $" },
    { icon: "▣", title: "Design System", desc: "Systèmes scalables et documentés — composants, tokens, guidelines.", price: "À partir de 2 500 $" },
    { icon: "⊕", title: "Merch & Imprimé", desc: "Vêtements, accessoires, affiches, signalétique. De l'idée au produit fini.", price: "Sur devis" },
    { icon: "◎", title: "Direction artistique", desc: "DA pour événements, campagnes, médias sociaux et productions complètes.", price: "Sur devis" },
  ];

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-[#0d0d0f] text-[#efedea] overflow-x-hidden font-['Poppins',sans-serif]">

        {/* ── NAV ── */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-5 sm:px-10 lg:px-[60px] transition-all duration-300"
          style={{
            backgroundColor: scrolled ? "rgba(13,13,15,0.9)" : "rgba(13,13,15,0)",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: "1px solid rgba(42,42,48,0.5)",
          }}
        >
          <p className="font-semibold text-[#efedea] text-[18px] sm:text-[22px] tracking-[0.5px]">
            Kevin Nguyen
          </p>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map(({ href, label }) => (
              <motion.a key={href} href={href}
                className="relative text-[#afaeb4] text-[14px] tracking-[0.2px]"
                whileHover={{ y: -1, color: "#EFEDEA" }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.15 }}
              >
                {label}
                <motion.div className="absolute bottom-[-4px] left-0 h-[1px] bg-[#F4DDB5]"
                  initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.2 }} />
              </motion.a>
            ))}
          </div>

          {/* Hamburger */}
          <button className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <motion.div className="w-6 h-[1.5px] bg-[#efedea]" animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} />
            <motion.div className="w-6 h-[1.5px] bg-[#efedea]" animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.2 }} />
            <motion.div className="w-6 h-[1.5px] bg-[#efedea]" animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} />
          </button>
        </motion.nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-[#0d0d0f]/96 backdrop-blur-md flex flex-col items-center justify-center gap-10 md:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            >
              {navLinks.map(({ href, label }, i) => (
                <motion.a key={href} href={href}
                  className="font-semibold text-[#efedea] text-[36px] tracking-[-1px]"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  whileHover={{ color: "#F4DDB5" }}
                >
                  {label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-[72px] px-5 sm:px-10 overflow-hidden text-center">
          {/* Glows */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[min(900px,120vw)] h-[min(900px,120vw)] pointer-events-none -z-10"
            animate={{ y: [0, -18, 0], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img alt="" className="w-full h-full" src={imgEllipse} />
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/3 w-[min(500px,60vw)] h-[min(500px,60vw)] pointer-events-none -z-10"
            animate={{ y: [0, 14, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <img alt="" className="w-full h-full" src={imgEllipse1} />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-[10px] bg-[#151518] border border-[#2a2a30] px-4 h-[36px] rounded-full mb-10"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            >
              <motion.div className="w-[7px] h-[7px] bg-[#48DB87] rounded-full shrink-0"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="text-[#afaeb4] text-[11px] sm:text-[12px] tracking-[0.2px] whitespace-nowrap">
                Disponible pour de nouveaux projets
              </p>
            </motion.div>

            {/* Titres */}
            {[
              { text: "Designer.", color: "#efedea", italic: false, delay: 0.1 },
              { text: "Créateur.", color: "#efedea", italic: false, delay: 0.22 },
              { text: "Storyteller.", color: "#f4ddb5", italic: true, delay: 0.34 },
            ].map(({ text, color, italic, delay }) => (
              <motion.h1 key={text}
                className={`font-semibold tracking-[-2px] sm:tracking-[-3px] leading-[0.95] mb-1 ${italic ? "italic" : ""}`}
                style={{
                  color,
                  fontSize: "clamp(56px, 14vw, 112px)",
                }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
              >
                {text}
              </motion.h1>
            ))}

            {/* Subtitle */}
            <motion.p
              className="text-[#afaeb4] text-[15px] sm:text-[17px] leading-[28px] sm:leading-[30px] max-w-[600px] mt-10 px-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
            >
              Je conçois des expériences numériques qui captivent — interfaces épurées, identités visuelles fortes, sites qui convertissent.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }}
            >
              <motion.a href="#projets"
                className="bg-[#efedea] flex h-[52px] items-center justify-center px-8 rounded-full w-full sm:w-auto cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: "#F4DDB5" }} whileTap={{ scale: 0.97 }}
              >
                <p className="font-medium text-[#0a0a0c] text-[14px] whitespace-nowrap">Voir mes projets</p>
              </motion.a>
              <motion.a href="#contact"
                className="border border-[#2a2a30] flex h-[52px] items-center justify-center px-8 rounded-full w-full sm:w-auto cursor-pointer"
                whileHover={{ scale: 1.05, borderColor: "#F4DDB5" }} whileTap={{ scale: 0.97 }}
              >
                <p className="text-[#afaeb4] text-[14px] whitespace-nowrap">Me contacter</p>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* ── À PROPOS ── */}
        <section id="apropos" className="px-5 sm:px-10 lg:px-[120px] py-20 sm:py-32 max-w-[1440px] mx-auto">
          <div className="w-full h-px bg-[rgba(42,42,48,0.35)] mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div ref={aboutRef.ref}>
              <motion.p className="text-[#807f85] text-[11px] tracking-[3px] mb-8"
                initial={{ opacity: 0, y: 30 }} animate={aboutRef.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >À PROPOS</motion.p>

              <motion.h2 className="font-semibold text-[#efedea] tracking-[-1px] leading-tight mb-8"
                style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
                initial={{ opacity: 0, y: 30 }} animate={aboutRef.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Passionné par le design<br />qui a du sens.
              </motion.h2>

              <motion.p className="text-[#afaeb4] text-[15px] sm:text-[16px] leading-[28px] max-w-[580px] mb-10"
                initial={{ opacity: 0, y: 30 }} animate={aboutRef.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Webdesigner &amp; directeur artistique depuis 5 ans, je combine esthétique et fonctionnalité pour créer des produits digitaux mémorables. Mon approche : comprendre les objectifs, puis traduire ça en interfaces qui parlent aux utilisateurs.
              </motion.p>

              {/* Skills */}
              <motion.div className="flex flex-wrap gap-2 mb-12"
                initial={{ opacity: 0 }} animate={aboutRef.isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {skills.map((skill, i) => (
                  <motion.span key={skill}
                    className="bg-[#151518] border border-[#2a2a30] text-[#afaeb4] text-[13px] px-4 py-1.5 rounded-full"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={aboutRef.isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.08, borderColor: "#F4DDB5", color: "#EFEDEA" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Stats */}
              <div ref={aboutStatsRef.ref} className="grid grid-cols-3 gap-4 sm:gap-8">
                {[
                  { value: `${count47}+`, label: "Projets livrés" },
                  { value: "5 ans", label: "D'expérience" },
                  { value: `${count98}%`, label: "Clients satisfaits" },
                ].map(({ value, label }, i) => (
                  <motion.div key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={aboutStatsRef.isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <p className="font-semibold text-[#efedea] text-[36px] sm:text-[44px] tracking-[-1px] leading-none whitespace-nowrap">{value}</p>
                    <p className="text-[#807f85] text-[12px] sm:text-[13px] mt-2">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Portrait */}
            <motion.div
              ref={aboutPortraitRef.ref}
              className="hidden sm:flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={aboutPortraitRef.isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, rotate: 1 }}
            >
              <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]">
                <img alt="" className="w-full h-full" src={imgEllipse4} />
              </div>
              <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px]">
                <img alt="" className="w-full h-full" src={imgEllipse3} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PROJETS ── */}
        <section id="projets" className="px-5 sm:px-10 lg:px-[120px] py-20 sm:py-32 max-w-[1440px] mx-auto">
          <div className="w-full h-px bg-[rgba(42,42,48,0.35)] mb-16" />

          <div ref={projectsRef.ref}>
            <motion.p className="text-[#807f85] text-[11px] tracking-[3px] mb-4"
              initial={{ opacity: 0, y: 30 }} animate={projectsRef.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >PROJETS</motion.p>
            <motion.h2 className="font-semibold text-[#efedea] tracking-[-1px] mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
              initial={{ opacity: 0, y: 30 }} animate={projectsRef.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
            >Mes réalisations.</motion.h2>
            <motion.p className="text-[#afaeb4] text-[15px] sm:text-[16px] mb-10"
              initial={{ opacity: 0, y: 30 }} animate={projectsRef.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 }}
            >Une sélection de projets récents en branding, web et merch.</motion.p>

            {/* Hero card */}
            <motion.a
              href="https://www.figma.com/design/Du1CDjw3CyKEnp39uVnlMU/PODCAST-NB---PRESENTATION?node-id=0-1"
              target="_blank" rel="noopener noreferrer"
              className="relative bg-[#151518] rounded-2xl overflow-hidden mb-4 block cursor-pointer w-full group"
              initial={{ opacity: 0, y: 50 }} animate={projectsRef.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.015 }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <img alt="" className="w-full h-full object-cover" src={imgEllipse5} />
              </div>
              <div className="relative h-[180px] sm:h-[220px] overflow-hidden">
                <motion.img alt="" className="w-full h-full object-cover" src={imgRectangle}
                  whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }}
                />
                <motion.div className="absolute inset-0 bg-black"
                  initial={{ opacity: 0.2 }} whileHover={{ opacity: 0 }} transition={{ duration: 0.3 }}
                />
              </div>
              <div className="relative p-5 sm:p-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <span className="inline-block bg-[rgba(42,42,48,0.4)] text-[#807f85] text-[9px] tracking-[1.5px] px-3.5 py-1.5 rounded-full mb-3">
                    BRANDING · MERCH · RADIO
                  </span>
                  <p className="font-semibold text-[#efedea] text-[22px] sm:text-[32px] tracking-[-0.5px]">
                    Podcast NB — Codiac FM
                  </p>
                </div>
                <motion.p className="text-[#f4ddb5] text-[13px] whitespace-nowrap"
                  whileHover={{ x: 6 }} transition={{ duration: 0.2 }}
                >Voir le projet →</motion.p>
              </div>
            </motion.a>

            {/* 4 small cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects.map((project, i) => (
                <motion.a key={project.title}
                  href={project.href} target="_blank" rel="noopener noreferrer"
                  className="rounded-[14px] overflow-hidden block cursor-pointer group"
                  style={{ backgroundColor: project.bg }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={projectsRef.isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.04, y: -6, boxShadow: "0 0 0 1px rgba(244,221,181,0.3)" }}
                >
                  <div className="relative h-[160px] overflow-hidden">
                    <motion.img alt={project.title} className="w-full h-full object-cover"
                      src={project.img} whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[#807f85] text-[9px] tracking-[1.2px] mb-2 uppercase">{project.tag}</p>
                    <p className="font-semibold text-[#efedea] text-[18px] sm:text-[20px] mb-3 leading-tight">{project.title}</p>
                    <motion.p className="text-[#f4ddb5] text-[14px]"
                      whileHover={{ x: 5, scale: 1.2 }} transition={{ duration: 0.2 }}
                    >→</motion.p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="px-5 sm:px-10 lg:px-[120px] py-20 sm:py-32 max-w-[1440px] mx-auto">
          <div className="w-full h-px bg-[rgba(42,42,48,0.35)] mb-16" />

          <div ref={servicesRef.ref}>
            <motion.p className="text-[#807f85] text-[11px] tracking-[3px] mb-4"
              initial={{ opacity: 0, y: 30 }} animate={servicesRef.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >SERVICES</motion.p>
            <motion.h2 className="font-semibold text-[#efedea] tracking-[-1px] mb-12"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
              initial={{ opacity: 0, y: 30 }} animate={servicesRef.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
            >Ce que je propose.</motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map(({ icon, title, desc, price }, i) => (
                <motion.div key={title}
                  className="bg-[#151518] border border-[rgba(42,42,48,0.5)] rounded-[14px] p-6 flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesRef.isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -6, borderColor: "rgba(244,221,181,0.35)", boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(244,221,181,0.15)", backgroundColor: "#1a1918" }}
                >
                  {/* Icône — centrée dans son cercle */}
                  <motion.div
                    className="w-[44px] h-[44px] rounded-full border border-[#2a2a30] bg-[#0d0d0f] flex items-center justify-center mb-5 shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1, borderColor: "#F4DDB5" }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="text-[#f4ddb5] text-[18px] leading-none">{icon}</span>
                  </motion.div>

                  <p className="font-medium text-[#efedea] text-[17px] mb-3">{title}</p>
                  <p className="font-light text-[#afaeb4] text-[13px] leading-[22px] mb-auto">{desc}</p>
                  <motion.p
                    className="text-[#f4ddb5] text-[13px] mt-5"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ y: -2, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >{price}</motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="px-5 sm:px-10 lg:px-[120px] py-20 sm:py-32 max-w-[1440px] mx-auto">
          <div className="w-full h-px bg-[rgba(42,42,48,0.35)] mb-16" />

          <div ref={contactRef.ref} className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

            {/* Colonne gauche */}
            <motion.div
              className="w-full lg:w-[380px] lg:shrink-0 flex flex-col"
              style={{ minHeight: "480px" }}
              initial={{ opacity: 0, y: 40 }}
              animate={contactRef.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Top — label + titre + sous-titre */}
              <div>
                <p className="text-[#807f85] text-[11px] tracking-[3px] mb-8">CONTACT</p>
                <h2 className="font-semibold text-[#efedea] tracking-[-1px] leading-tight mb-6"
                  style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
                >
                  Parlons de votre projet.
                </h2>
                <p className="font-light text-[#afaeb4] text-[16px]">Je réponds généralement sous 24h.</p>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Bottom — infos contact */}
              <div className="flex flex-col gap-0">
                {[
                  { label: "EMAIL", value: "kevin77nguyen@gmail.com" },
                  { label: "LOCALISATION", value: "Moncton, NB" },
                  { label: "DISPONIBILITÉ", value: "Disponible dès maintenant" },
                ].map(({ label, value }, i) => (
                  <motion.div key={label} className="mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={contactRef.isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <p className="font-light text-[#807f85] text-[11px] tracking-[1.5px]">{label}</p>
                    <p className="text-[#efedea] text-[15px] mt-1 mb-3">{value}</p>
                    <div className="bg-[rgba(42,42,48,0.5)] h-px w-full" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Colonne droite — formulaire */}
            <motion.div
              className="flex flex-col gap-3 w-full lg:flex-1"
              initial={{ opacity: 0, y: 40 }}
              animate={contactRef.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                {[{ label: "Prénom", placeholder: "Jean" }, { label: "Nom", placeholder: "Garnier" }].map(({ label, placeholder }) => (
                  <div key={label} className="bg-[#151518] border border-[#2a2a30] rounded-[10px] p-4 flex-1 focus-within:border-[#F4DDB5] transition-colors">
                    <p className="font-light text-[#807f85] text-[10px] tracking-[1px] mb-1">{label}</p>
                    <input className="bg-transparent text-[#afaeb4] text-[15px] w-full outline-none border-none" placeholder={placeholder} />
                  </div>
                ))}
              </div>
              {[
                { label: "Email", placeholder: "jean.garnier@exemple.com", type: "email" },
                { label: "Type de projet", placeholder: "Branding, Web, Merch..." },
              ].map(({ label, placeholder, type }) => (
                <div key={label} className="bg-[#151518] border border-[#2a2a30] rounded-[10px] p-4 focus-within:border-[#F4DDB5] transition-colors">
                  <p className="font-light text-[#807f85] text-[10px] tracking-[1px] mb-1">{label}</p>
                  <input type={type || "text"} className="bg-transparent text-[#afaeb4] text-[15px] w-full outline-none border-none" placeholder={placeholder} />
                </div>
              ))}
              <div className="bg-[#151518] border border-[#2a2a30] rounded-[10px] p-4 focus-within:border-[#F4DDB5] transition-colors">
                <p className="font-light text-[#807f85] text-[10px] tracking-[1px] mb-1">Message</p>
                <textarea className="bg-transparent text-[#afaeb4] text-[15px] w-full h-[90px] outline-none border-none resize-none" placeholder="Décrivez votre projet..." />
              </div>

              <motion.button
                className="flex h-[52px] items-center justify-center rounded-full px-8 w-full sm:w-[220px] cursor-pointer mt-2"
                style={{ backgroundColor: "#efedea" }}
                whileHover={{ scale: 1.04, backgroundColor: "#F4DDB5" }} whileTap={{ scale: 0.97 }}
                onClick={() => { setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }}
              >
                <p className="font-medium text-[#0a0a0c] text-[14px] whitespace-nowrap">Envoyer le message →</p>
              </motion.button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    className="bg-[#151518] border border-[#48DB87]/30 rounded-xl p-4 text-[#48DB87] text-sm"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    ✓ Message envoyé ! Je te réponds sous 24h.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="px-5 sm:px-10 lg:px-[120px] py-8 max-w-[1440px] mx-auto">
          <div className="w-full h-px bg-[rgba(42,42,48,0.35)] mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="font-semibold text-[#afaeb4] text-[16px]">Kevin Nguyen</p>
            <div className="flex flex-wrap justify-center gap-3 text-[#807f85] text-[13px]">
              {navLinks.map(({ href, label }, i) => (
                <span key={label} className="flex items-center gap-3">
                  {i > 0 && <span>·</span>}
                  <motion.a href={href} whileHover={{ color: "#EFEDEA", y: -1 }} transition={{ duration: 0.15 }}>
                    {label}
                  </motion.a>
                </span>
              ))}
            </div>
            <p className="font-light text-[#807f85] text-[11px] sm:text-[12px]">
              © 2026 Kevin Nguyen · Direction artistique &amp; design
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}
