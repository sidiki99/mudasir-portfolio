import { FaCode, FaGlobe, FaLaptopCode, FaMobileAlt, FaPalette, FaReact, FaThLarge } from 'react-icons/fa';
import styles from './home.module.css';
import { motion } from "framer-motion";
const services = [
  {
    icon: <FaGlobe />,
    title: "Website Design",
    description:
      "I create modern, responsive, and   user-  friendly websites with clean layouts and intuitive user experiences.",
    projects: "08 Projects",
  },
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description:
      "I build fast and interactive web applications using React, JavaScript, HTML, and CSS.",
    projects: "10 Projects",
  },
  {
    icon: <FaReact />,
    title: "React JS",
    description:
      "I develop scalable React applications with reusable components and modern React features.",
    projects: "12 Projects",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "I build websites that work seamlessly on desktop, tablet, and mobile devices.",
    projects: "27 Projects",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description:
      "I create digital products with unique ideas using Figma and Framer.",
    projects: "16 Projects",
  },
  {
    icon: <FaCode />,
    title: "API Integration",
    description:
      "I integrate REST APIs and third-party services for dynamic applications.",
    projects: "5 Projects",
  },
];

export default function Services({containerVariants,cardVariants}) {

  return (
    <div>
      <motion.div
      
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
          <motion.div variants={cardVariants} className={styles.about_section}>
          <div className={styles.gen_btn}>
              < FaThLarge className="icon" />
              <span>Services</span>
            </div>
            <div>
              <p className={styles.about}>
              My
              <span style={{color:"#28E98C"}}> Specializations</span>
            </p>
                      
              </div>
            </motion.div>
      </motion.div>
      

        <motion.div
        className={styles.services_container}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
      
        
        {services.map((service, index) => (
              <motion.div
                key={index}
                className={styles.services_card}
                variants={cardVariants}
              >
                <div className={styles.icons}>{service.icon}</div>

                <h2>{service.title}</h2>

                <p>{service.description}</p>

                <span>{service.projects}</span>
             </motion.div>
       ))}
    </motion.div>


      
  </div>
  )
}
