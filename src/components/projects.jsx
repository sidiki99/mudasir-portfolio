
import styles from './projects.module.css';
import style from './home.module.css';
import {FaCode, } from  "react-icons/fa";
import { motion } from "framer-motion";

import project1 from "../assets/portfolio.jpeg";
import project2 from "../assets/eat_split.jpg";
import project3 from "../assets/smarthire.jpeg";

const services = [
  {
    image: project1,
    title: "Modern Portfolio Website",
    tech: ["CSS", "Javascript", "React Js"],
    link: "https://mudasir-portfolio-nine.vercel.app/",
  },
  {
    image: project2,
    title: "Business Landing Page",
    tech: ["HTML", "CSS", "JavaScript","React Js"],
    link: "https://eat-n-split-nu-lemon.vercel.app/",
  },
  {
    image: project3,
    title: "Job Portal and Admin Panel",
    tech: ["React", "Javascript", "CSS"],
     link: "https://react-smart-hire-ftiz.vercel.app/",
  },
];
export default function Projects({containerVariants,cardVariants}) {
  return (
    <div>
       <motion.div
          className={styles.services_container}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
    
                <motion.div variants={cardVariants} 
                 className={style. about_section}>
                  <div className={style.gen_btn}>
                    <FaCode/>
                    <span>My Projects</span>
                  </div>
                        <p className={style.about}>
                          Featured
                            <span style={{color:"#28E98C"}}> Projects</span>
                          </p>
                  </motion.div>
          </motion.div>

              <div>
                
                   
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
    

                        <div className={styles.tech_container}>
                          {service.tech.map((item, i) => (
                            <span key={i} className={styles.tech}>
                              {item}
                            </span>
                          ))}
                        
                          <div
                            className={styles.project_image}
                            style={{
                              backgroundImage: `url(${service.image})`,
                              
                              backgroundSize: "cover",
                              backgroundPosition: "left",
                              backgroundRepeat: "no-repeat",
                            }}
                          >

                            
                          </div>
                          <p>{service.title}</p>

                          {/* <p>{service.description}</p> */}
                          <br></br>
                          <a
                              href={service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Project
                            </a>

                          </div>

     
                          </motion.div>
              ))}
            </motion.div>
              </div>

      
    </div>
  )
}
