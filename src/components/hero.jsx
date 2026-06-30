import { FaArrowDown, FaHome } from 'react-icons/fa';
import styles from './home.module.css';

export default function Hero({onProjectsClick}) {
  return (
    <div>
      <div className={styles.gen_btn}>
                <FaHome className="icon" />
                <span>INTRODUCE</span>
              </div>
      
              <div className={styles.intro_section}>
                <p className={styles.intro}>
                  Say Hi from <span style={{color:"#28E98C"}}>Siddiqui</span>,  Webflow Designer and  React Developer
                </p>
                <p className={styles.para}>
                  I design and code beautifully simple things and i love what i do.<br></br> Just simple like that!
                </p>
                 
            <div>
      
            <div className={styles.proj_spin_btn}onClick={onProjectsClick}>
      
            <div className={styles.rotate}>
              <svg viewBox="0 0 200 200">
                <defs>
                  <path
                    id="circlePath"
                    d="
                      M100,100
                      m-75,0
                      a75,75 0 1,1 150,0
                      a75,75 0 1,1 -150,0
                    "
                  />
                </defs>
      
                <text className={styles.circleText}>
                  <textPath href="#circlePath">
                    • MY PROJECTS • MY PROJECTS •
                  </textPath>
                </text>
              </svg>
            </div>
      
            <div className={styles.arrow}>
              <FaArrowDown />
            </div>
      
          </div>
          <div style={{
            display:"flex",
            justifyContent:"start"
          }}>
            <div className={styles.info}>
              <h2 style={{
                color:"#28E98C",
                marginBottom:"5px"
              }}>1+</h2>
              <p>Years of
                 Experience
              </p>
            </div>
      
            <div className={styles.info}>
              <h2 style={{
                color:"#28E98C",
                marginBottom:"5px"
              }}>5+</h2>
              <p>
                 Projects Completed
              </p>
            </div>
      
          </div>
      
          </div>
      </div>
      
    </div>
  )
}
