import styles from './home.module.css';
import Skills from "./skills.jsx"
import { useRef, useState, useEffect } from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // Delay between cards
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 120,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};
import {  
  FaEnvelope, 
  FaHome,
  FaLaptopCode,
  FaLayerGroup,
  FaThLarge,
  FaUser,
 
 
  // FaBriefcase,
  
  // FaThLarge,
  // FaCommentAlt,
 
 
  
} from "react-icons/fa";

import Projects from './projects.jsx';
import Contact from './contact.jsx';
import Card from './card.jsx';
import Hero from './hero.jsx';
import About from './about.jsx';
import Services from './services.jsx';

export default function Home (){
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [active, setActive] = useState("hero");

  // const scrollToSection = (ref) => {
  //   ref.current.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  const scrollToSection = (ref) => {
  ref.current?.scrollIntoView({
    behavior: "smooth",
  });
};

  useEffect(() => {
    const sections = [
    { id: "hero", ref: heroRef },
    { id: "about", ref: aboutRef },
    { id: "services", ref: serviceRef },
    { id: "skills", ref: skillsRef },
   
      {
        id: "project",
        ref: projectRef,
      },
      {
        id: "contact",
        ref: contactRef,
      },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    // sections.forEach((section) => {
    //   observer.observe(section.ref.current);
    // });

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);
   

  return(
    <div className={styles.main}>
        <Card onHireClick={()=>scrollToSection(contactRef)}/>
      <div className={styles.content}>
       
        <section id="hero" ref={heroRef}>
          <Hero onProjectsClick={() => scrollToSection(projectRef)}/>
        </section>
       <section id="about" ref={aboutRef}>
        <About />
      </section>   
       <section id="services" ref={serviceRef}>
          <Services
            containerVariants={containerVariants}
            cardVariants={cardVariants}
          />
        </section>

        <section id="skills" ref={skillsRef}>
          <Skills />
        </section>

     {/* <div>
      <Projects />
      <Contact />
     </div> */}
     
        <section id="project" ref={projectRef}>
          <Projects 
            containerVariants={containerVariants}
            cardVariants={cardVariants} 
          />
        </section>

        <section id="contact" ref={contactRef}>
          <Contact 
           containerVariants={containerVariants}
            cardVariants={cardVariants}
          />
        </section>
     
     
      </div>
      {/* <div className={styles.sidebar}>
           <a href="#" className="active" onClick={() => scrollToSection(homeRef)}
           className={active === "home" ? styles.active : ""}
        >
        <FaHome />
      </a>

      <a href="#">
        <FaUser />
      </a>

      <a href="#">
        <FaBriefcase />
      </a>

      <a href="#">
        <FaLayerGroup />
      </a>

      <a href="#">
        <FaCode />
      </a>

      <a href="#">
        <FaThLarge />
      </a>

      <a href="#">
        <FaCommentAlt />
      </a>

      <a href="#">
        <FaEnvelope onClick={() => scrollToSection(contactRef)}
        className={active === "contact" ? styles.active : ""} />
      </a> */}
      {/* </div> */}


       <div className={styles.sidebar}>
      <a
        onClick={() => scrollToSection(heroRef)}
        className={active === "hero" ? styles.active : ""}
      >
        <FaHome />
      </a>
      <a
        onClick={() => scrollToSection(aboutRef)}
        className={active === "about" ? styles.active : ""}
      >
        <FaUser />
      </a>
      <a
        onClick={() => scrollToSection(serviceRef)}
        className={active === "services" ? styles.active : ""}
      >
        <FaThLarge />
      </a>
      <a
        onClick={() => scrollToSection(skillsRef)}
        className={active === "skills" ? styles.active : ""}
      >
        <FaLayerGroup />
      </a>
      <a
        onClick={() => scrollToSection(projectRef)}
        className={active === "project" ? styles.active : ""}
      >
        <FaLaptopCode />
       
      </a>

      <a
        onClick={() => scrollToSection(contactRef)}
        className={active === "contact" ? styles.active : ""}
      >
        <FaEnvelope />
      </a>
    </div>
    </div>
   
  )
}