import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technoligies";
import SoftSkills from "./components/SoftSkills";
import { FaArrowUp } from "react-icons/fa";

function App() {
  // State to manage button visibility
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Framer Motion animation controls
  const controls = useAnimation();

  // Create references for each section of the page
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const softSkillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);
  const navbarRef = useRef(null); // Reference for Navbar

  // Define the scroll threshold
  const scrollThreshold = 100; // The point at which the button should appear

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Check if the user has scrolled past the threshold
      const hasScrolledPastThreshold = scrollY > scrollThreshold;

      // Update button visibility based on scroll position
      setShowScrollToTop(hasScrolledPastThreshold);

      // Animate the button
      controls.start({
        opacity: hasScrolledPastThreshold ? 1 : 0,
        scale: hasScrolledPastThreshold ? 1.2 : 0.8,
        rotate: hasScrolledPastThreshold ? 0 : 360,
        boxShadow: hasScrolledPastThreshold ? "0px 4px 16px rgba(0, 0, 0, 0.4)" : "0px 2px 8px rgba(0, 0, 0, 0.2)",
        transition: {
          opacity: { duration: 0.3 },
          scale: { type: "spring", stiffness: 400, damping: 15 },
          rotate: { duration: 0.3, ease: "easeInOut" },
          boxShadow: { duration: 0.3 }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background setup */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Main container for content */}
      <div className="container mx-auto px-8">
        {/* Navigation bar */}
        <NavBar
          ref={navbarRef}
          aboutRef={aboutRef}
          technologiesRef={technologiesRef}
          softSkillsRef={softSkillsRef}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />

        {/* Section components */}
        <div ref={heroRef}>
          <Hero />
        </div>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={technologiesRef}>
          <Technologies />
        </section>
        <section ref={softSkillsRef}>
          <SoftSkills />
        </section>
        <section ref={experienceRef}>
          <Experience />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </div>

      {showScrollToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-cyan-500 text-white p-2 rounded-full shadow-lg flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300"
          aria-label="Scroll to Top"
          initial={{ opacity: 0, scale: 0.3, rotate: 360 }} // Initial state
          animate={controls} // Animate with controls
          whileHover={{ scale: 0.3, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)" }} // Hover effect
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </div>
  );
}

export default App;
