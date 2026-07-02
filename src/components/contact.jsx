import { useState } from "react";
import emailjs from "@emailjs/browser";

import style from "./home.module.css";
import styles from "./contact.module.css";

import { FaCloudUploadAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact({ containerVariants, cardVariants }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    budget: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_l6qpkt9",
        "template_9a1u0wi",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          budget: formData.budget,
          company: formData.company,
          message: formData.message,
        },
        "VAiGVmALdL_2RlAnp"
      )
      .then(() => {
        alert("Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          budget: "",
          company: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
        setLoading(false);
      });
  };

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
              <span style={{ color: "#28E98C" }}> Together</span>
            </p>

            <p
              style={{
                fontSize: "29px",
              }}
            >
              msidiki075@gmail.com
            </p>
          </div>
        </motion.div>
      </motion.div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>
            FULL NAME <span>*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>
            EMAIL <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>PHONE (OPTIONAL)</label>
          <input
            type="text"
            name="phone"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>
            SUBJECT <span>*</span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>YOUR BUDGET (OPTIONAL)</label>
          <input
            type="text"
            name="budget"
            placeholder="A range budget for your project"
            value={formData.budget}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>COMPANY (OPTIONAL)</label>
          <input
            type="text"
            name="company"
            placeholder="Company name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.inputGroup} ${styles.full}`}>
          <label>MESSAGE</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* EmailJS doesn't support file uploads directly */}
        <div className={styles.full}>
          <label className={styles.upload}>
            <FaCloudUploadAlt />
            <span>Attachment not supported with EmailJS</span>
          </label>
        </div>

        <div className={styles.full}>
          <button
            type="submit"
            className={styles.btn}
            disabled={loading}
          >
            {loading ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </div>
      </form>
    </section>
  );
}