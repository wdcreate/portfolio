import "./styles/About.scss";
import { motion } from "framer-motion";
const AboutAnimation = {
  hidden: { y: 50, opacity: 0,    transition: { stiffness: 100,  },
},
  visible: {
    y: 0,
    opacity: 1,
    transition: { stiffness: 100,  },

  },
};
function About() {
  return (
    <motion.div
      viewport={{ amount: 0.2, once: true }}
      variants={AboutAnimation}
      initial="hidden"
      whileInView="visible"    
      className="about"
      id="about"
    >
      <div className="about-description">
        <p>
          I am currently a freelancer <b>Web Developer</b> on <b>Fiverr</b>,
          where I develop and maintain websites for various clients.
          Additionally, I specialize in implementing responsive design
          techniques to ensure that websites are optimized for mobile devices.{" "}
          <br />I also have experience creating single-page applications (SPAs)
          using the React framework.
        </p>
        <p>
          Outside of work, I'm interested in following innovations, football,
          F1, books. I also play video games. And take photos.
        </p>
      </div>
      <div className="tech">
        <div className="stack">
          Here are some technologies I have been working with:
        </div>
        <ul className="tech-stack">
          <li>React JS</li>
          <li>Javascript</li>
          <li>HTML &amp; CSS</li>
          <li>JS libraries</li>
          <li>CSS libraries</li>
          <li>SASS, SCSS</li>
          <li>Firebase</li>
          <li>Git</li>
          <li>Wordpress</li>
          <li>Wix</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default About;
