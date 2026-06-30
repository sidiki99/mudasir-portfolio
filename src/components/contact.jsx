// import styles from './home.module.css';
// import { FaEnvelope } from 'react-icons/fa';
// export default function Contact() {
//   return (
//     <div>
//       <div className={styles.about_section}>
//              <div className={styles.gen_btn}>
//                 <FaEnvelope className="icon" />
//                 <span>Contact us</span>
//               </div>
//               <div>
//                         <p className={styles.about}>
//                           Let's Work
//                           <span style={{color:"#28E98C"}}> Together</span>
//                           <p style={{
//                             fontSize:"29px",
                            
//                           }}>  msidiki075@gmail.com
//                           </p>
                   
//                         </p>
                        
                                 
//              </div>
//       </div>
      
//     </div>
//   )
// }

import style from "./home.module.css";
import styles from "./contact.module.css";
import { FaCloudUploadAlt,FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact({containerVariants,cardVariants}) {
  return (
    <section className={styles.contact}>
      <motion.div
        className={styles.services_container}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
      <motion.div variants={cardVariants}>
        <div className={style.gen_btn}>
              <FaEnvelope className="icon" />
                <span>Contact us</span>
      </div>
       <div>
                        <p className={style.about}>
                         Let's Work
                        <span style={{color:"#28E98C"}}> Together</span>
                         <p style={{
                           fontSize:"29px",
                            
                          }}>  msidiki075@gmail.com
                         </p>
                   
                       </p>
                        
                                 
            </div>
      </motion.div>
            </motion.div>
          
      <form className={styles.form}>

        <div className={styles.inputGroup}>
          <label>FULL NAME <span>*</span></label>
          <input type="text" placeholder="Your full name" />
        </div>

        <div className={styles.inputGroup}>
          <label>EMAIL <span>*</span></label>
          <input type="email" placeholder="Your email address" />
        </div>

        <div className={styles.inputGroup}>
          <label>PHONE (OPTIONAL)</label>
          <input type="text" placeholder="Your number phone" />
        </div>

        <div className={styles.inputGroup}>
          <label>SUBJECT <span>*</span></label>
          <input type="text" placeholder="Subject" />
        </div>

        <div className={styles.inputGroup}>
          <label>YOUR BUDGET (OPTIONAL)</label>
          <input type="text" placeholder="A range budget for your project" />
        </div>

        <div className={styles.inputGroup}>
          <label>COMPANY (OPTIONAL)</label>
          <input type="text" placeholder="Company name" />
        </div>

        <div className={`${styles.inputGroup} ${styles.full}`}>
          <label>MESSAGE</label>
          <textarea
            rows="6"
            placeholder="Write your message here ..."
          ></textarea>
        </div>

        <div className={styles.full}>
          <label className={styles.upload}>
            <FaCloudUploadAlt />
            <span>Add an attachment</span>
            <input type="file" hidden />
          </label>
        </div>

        <div className={styles.full}>
          <button type="submit" className={styles.btn}>
            SEND MESSAGE
          </button>
        </div>

      </form>
    </section>
  );
}
