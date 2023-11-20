import "./styles/Contact.scss";
import { motion } from "framer-motion";
const ContactAnimation = {
  hidden: { y: 50, opacity: 0,    transition: { stiffness: 100,  },
},
  visible: {
    y: 0,
    opacity: 1,
    transition: { stiffness: 100,  },

  },
};
function Contact() {
  return (
    <motion.div viewport={{ amount: 0.2, once: true }}
    variants={ContactAnimation}
    initial="hidden"
    whileInView="visible" className="contact">
      <a href="mailto:createsometh@gmail.com" className="contact-btn">Contact me!</a>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/polshchykow">
          <img src={require("../img/linkedin.png")} alt="Linkedin" />
        </a>
        <a href="https://github.com/wdcreate">
          <img src={require("../img/github.png")} alt="github" />
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
