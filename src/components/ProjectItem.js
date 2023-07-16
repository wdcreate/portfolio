import "./styles/ProjectItem.scss";
import { motion } from "framer-motion";

const projectAnimation = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    transition: {  stiffness: 100, delay: 0.1 },
  },
  visible: {
    transition: { stiffness: 100, delay: 0.1 },
    scale: 1,

    opacity: 1,
  },
};

function ProjectItem({ item }) {
  return (
    <motion.a
      viewport={{ amount: 0.2, once: true }}
      variants={projectAnimation}
      initial="hidden"
      whileInView="visible"
      className="project-item"
      href={item.href}
    >
      <div className="top">
        <span>{item.id}</span>
        <span>{item.tech}</span>
      </div>
      {item.logo && <img src={item.logo} alt={item.title} />}
      {item.text && <p>{item.text}</p>}
      <div className="bottom">
        <h6>{item.title}</h6>
        <img src={require("../img/linkto.png")} alt="" />
      </div>
    </motion.a>
  );
}

export default ProjectItem;
