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
    <div className="experience">
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
          <div className="work-title">Freelance | Web developer</div>
          <p className="time">2020 - present</p>
        </motion.div>
        <motion.ul variants={RAnimation} className="text r">
          <li>converting designs to html/css/js;</li>
          <li>creating email templates;</li>
          <li>website maintenance, speed optimisation;</li>
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
          <div className="work-title">Werbeagentur FETZ | Web developer</div>
          <p className="time">2021 - May 2023</p>
        </motion.div>
        <motion.ul variants={RAnimation} className="text r">
          <li>
            implemented websites and landing pages from concept through
            deployment;
          </li>
          <li>
            worked with 2 designers, product manager, and 3 developers to
            achieve design goals;
          </li>
          <li>
            delivered responsive, cross-browser compatible and accessibility
            compliant websites, achieving faster load time;
          </li>
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
          <div className="work-title">Startup | React Web developer</div>
          <p className="time">2021 - 2022</p>
        </motion.div>
        <motion.ul variants={RAnimation} className="text r">
          <li>creating SPA from scratch;</li>
          <li>
            setting up authentication and data storage using Firebase and Cloud
            Firestore;
          </li>
          <li>active cooperation with other developers and designer;</li>
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
          <div className="work-title">OnlineStore | Web developer</div>
          <p className="time">May 2018 - 2019</p>
        </motion.div>
        <motion.ul variants={RAnimation} className="text r">
          <li>changing site content from the WordPress admin area;</li>
          <li>
            creation of new pages with products and filling them with content;
          </li>
          <li>
            translating UI/UX design wireframes into codeusing HTML5 and CSS3;
          </li>
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default Experience;
