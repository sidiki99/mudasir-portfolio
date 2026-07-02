import styles from "./home.module.css";
import { FaFacebook, FaLinkedin, FaGithub,  FaEnvelope, FaCog, FaInstagram,} from "react-icons/fa";

export default function Card({onHireClick}) {
  return (
    <div>
      <div className={styles.card}>
              
              <div className={styles.card_content}>
              <div className={styles.spinner}><FaCog/>  </div>
                
              <div className={styles.name_sec}>
                <h1>
                    Mudassir
                    <span className={styles.small_m}>M</span>
                </h1>
                  
                <div
                  style={{
                    marginTop: "33px",
                    fontSize:"16px",
                    
                  }}
                >
                  React  Developer 
               </div>
            </div>
            <img src="/portfolio6.jpeg" alt="Profile"  className={styles.profile_img}/>
            <div className={styles.loc_detail}>
            <p>msidiki075@gmail.com</p>
            <p>Based in Lodhran ,Pakistan</p>
            <span
             style={{
                    marginTop: "10px",
                    fontSize:"12px",
                    textAlign:"center"
                    
                  }} >© 2026 Mudassir Siddiqui. All Rights Reserved
              </span>
            </div>
            <div className={styles.social_icons}>
            <a href="https://www.facebook.com/profile.php?id=100094358614179"><FaFacebook /></a>
            <a href="www.linkedin.com/in/mudassir-siddiqui-881a12305">
            <FaLinkedin /></a>
            <a href="https://github.com/sidiki99/"><FaGithub /></a>
            <a href="https://www.instagram.com/sidikii96?igsh=bW1pcW91MnJjdTll"><FaInstagram /></a>
      
            </div>
            <button className={styles.btn}onClick={onHireClick}>
               <FaEnvelope />HIRE ME!
            </button>
            </div>
      
            </div>
      
    </div>
  )
}
