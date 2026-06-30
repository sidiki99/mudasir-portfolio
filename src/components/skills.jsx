import styles from "./home.module.css";
import {
  FaReact,
  FaBootstrap,
  FaWordpress,
  FaLaravel,
  FaPython,
  FaLayerGroup,
} from "react-icons/fa";

import { SiWebflow, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

// Random direction for every card
const randomDirection = () => ({
  x: Math.floor(Math.random() * 800 - 400),
  y: Math.floor(Math.random() * 800 - 400),
  rotate: Math.floor(Math.random() * 60 - 30),
});

// Skills
const skills = [
  {
    icon: <FaReact />,
    title: "React JS",
    percentage: "95%",
  },
  {
    icon: <SiWebflow />,
    title: "Webflow",
    percentage: "92%",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    percentage: "90%",
  },
  {
    icon: <FaWordpress />,
    title: "WordPress",
    percentage: "88%",
  },
  {
    icon: <FaLaravel />,
    title: "Laravel",
    percentage: "85%",
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
    percentage: "87%",
  },
  {
    icon: <FaPython />,
    title: "Python",
    percentage: "82%",
  },
];

// Parent Animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card Animation
const cardVariants = {
  hidden: (custom) => ({
    opacity: 0,
    x: custom.x,
    y: custom.y,
    rotate: custom.rotate,
    scale: 0.5,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <div>
      <div className={styles.about_section}>
        <div className={styles.gen_btn}>
          <FaLayerGroup />
          <span>My Skills</span>
        </div>

        <p className={styles.about}>
          My <span style={{ color: "#28E98C" }}>Advantages</span>
        </p>

        <motion.div
          className={styles.skills_container}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.skills_circle}
              variants={cardVariants}
              custom={randomDirection()}
            >
              <div className={styles.skills_icon}>
                {skill.icon}
              </div>

              <h2>{skill.percentage}</h2>

              <p>{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}