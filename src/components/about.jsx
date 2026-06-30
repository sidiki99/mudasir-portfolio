import { FaUser } from 'react-icons/fa';
import styles from './home.module.css';

export default function About() {
  return (
    <div>
       <div className={styles.about_section}>
             <div className={styles.gen_btn}>
                <FaUser className="icon" />
                <span>About</span>
              </div>
              <p className={styles.about}>
                Every great design begin with
                an even <span style={{color:"#28E98C"}}>better story</span>
              </p>
              <p className={styles.para}>
                Since beginning my journey as a freelance designer nearly 1 year ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
              </p>
          </div>
      
    </div>
  )
}
