import { useState } from "react";
import Links from "../components/Links";
import "./styles/Menu.scss";
import { motion } from "framer-motion";
const textAnimation = {
  from: {
    translateX: "100%",
    transition: { stiffness: 100, delay: 0.1 },
  },
  to: {
    transition: { stiffness: 100, delay: 0.1 },
    translateX: "-100%",
  },
};

function Menu() {
  const [creationHover, setCreationHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [expHover, setExpHover] = useState(false);


  return (
    <motion.div initial="from" whileInView="to" className="menu">
      <div
        className="menu-item main"
        onMouseLeave={() => setCreationHover(false)}
        onMouseEnter={() => setCreationHover(true)}
      >
        {creationHover ? (
          <motion.h6  variants={textAnimation}>creating some thing</motion.h6>
        ) : (
          <h6>see creations</h6>
        )}
      </div>
      <div className="menu-items">
        <div className="menu-list">
          <div
            className="menu-item ab"
            onMouseLeave={() => setAboutHover(false)}
            onMouseEnter={() => setAboutHover(true)}
          >
            <h6>about</h6>
          </div>
          <div
            className="menu-item exp"
            onMouseLeave={() => setExpHover(false)}
            onMouseEnter={() => setExpHover(true)}
          >
            <h6>experience</h6>
          </div>
        </div>
        <div className="menu-item full">
          <Links />
        </div>
      </div>
    </motion.div>
  );
}

export default Menu;
