import "./styles/Experience.scss";
import { motion } from "framer-motion";

const RAnimation = {
  hidden: { x: "-50% " },
  opacity: 0,
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { stiffness: 100, delay: custom * 0.2 },
  }),
};
const LAnimation = {
  hidden: { x: "50%" },
  opacity: 0,
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { stiffness: 100, delay: custom * 0.2 },
  }),
};

function Experience() {
  return (
    <div className="experience" id="experience">
      <motion.div
        custom={0}
        viewport={{ amount: 0.3 }}
        initial="hidden"
        whileInView="visible"
        className="experience-item"
      >
        <motion.div
          custom={1}
          viewport={{ amount: 0.3 }}
          variants={LAnimation}
          className="l"
        >
          <div className="work-title">Freelance | Frontend developer</div>
          <p className="time">2020 - present</p>
        </motion.div>
        <motion.ul variants={RAnimation} className="text r">
          <li>transformed design concepts into functional and responsive web pages using <b>HTML, CSS, and JavaScript</b>;</li>
          <li>implemented speed optimization techniques to enhance website performance and user experience;</li>
          <li>сollaborated with multinational teams, worked closely with UX/UI designers to translate design concepts into functional and interactive web elements;</li>
          <p>I gained valuable skills in client communication, self-presentation, time management, adaptability to changes, stress resilience, and consistently improved my development processes and technical knowledge during this time.</p>
        </motion.ul>
      </motion.div>
      <motion.div
        custom={2}
        viewport={{ amount: 0.3 }}
        initial="hidden"
        whileInView="visible"
        className="experience-item"
      >
        <motion.div variants={LAnimation} className="l">
          <div className="work-title">Werbeagentur FETZ | Frontend developer</div>
          <p className="time">2021 - May 2023</p>
        </motion.div>
        <motion.ul variants={RAnimation} className="text r">
          <li>
            implemented websites from concept through deployment using <b>HTML, CSS (Bootstrap, Sass), JavaScript (CoffeeScript), Gulp</b> ;
          </li>
          <li>
            worked with designer, product manager, and 3 developers to achieve product goals;
          </li>
          <li>
            delivered responsive, cross-browser compatible and accessibility compliant websites, achieving faster load time;
          </li>
          <li>
            website speed boost from 50 to 85+;
          </li>
          <p>It was a valuable opportunity for me to develop my skills in performance optimization, web accessibility and teamwork.</p>
        </motion.ul>
      </motion.div>
      <motion.div
        custom={3}
        viewport={{ amount: 0.3 }}
        initial="hidden"
        whileInView="visible"
        className="experience-item"
      >
        <motion.div variants={LAnimation} className="l">
          <div className="work-title">Startup | React Frontend developer</div>
          <p className="time">2021 - 2022</p>
        </motion.div>
        <motion.ul variants={RAnimation} className="text r">
          <li>creating SPA from scratch using <b>ReactJS, Redux Toolkit, react-router, leaflet</b>;</li>
          <li>
            setting up authentication and data storage using <b>Firebase and Cloud Firestore</b>;
          </li>
          <li>built reusable UI components and integrated them into the application;</li>
          <li>active cooperation with other developers and designer;</li>
          <p>This project gave me the opportunity to gain hands-on experience with ReactJS and learn about Firebase, allowing me to implement secure user authentication and real-time database functionality.</p>
        </motion.ul>
      </motion.div>
      <motion.div
        custom={4}
        viewport={{ amount: 0.3 }}
        initial="hidden"
        whileInView="visible"
        className="experience-item"
      >
        <motion.div variants={LAnimation} className="l">
          <div className="work-title">OnlineStore | Frontend developer</div>
          <p className="time">May 2018 - 2019</p>
        </motion.div>
        <motion.ul variants={RAnimation} className="text r">
          <li>worked with <b>CSS and HTML</b> to create and maintain website interfaces;</li>
          <li>
            modified website content through the <b>WordPress admin area</b>;
          </li>
          <li>
            developed product pages with content;
          </li>
          <p>This job increased my interest for web development and helped me develop my skills as frontend developer.</p>
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default Experience;
