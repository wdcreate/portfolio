import { useState } from "react";
import Links from "../components/Links";
import "./styles/Menu.scss";
import { motion } from "framer-motion";
/* const textAnimation = {
  from: {
    translate: "-1000%",
    transition: { stiffness: 100, delay: 0.1 },
  },
  to: {
    transition: { stiffness: 100, delay: 0.1 },
    translate: "1000%",
  },
}; */

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
        {!creationHover && (
          <div className="title-wrapper">
            <h1 className="menu-item-title">Check out my projects </h1>
            <h1 className="menu-item-title">Check out my projects </h1>
          </div>
        )}
        <h6>see creations</h6>
      </div>
      <div className="menu-items">
        <div className="menu-list">
          <div
            className="menu-item ab"
            onMouseLeave={() => setAboutHover(false)}
            onMouseEnter={() => setAboutHover(true)}
          >
            {aboutHover && (
              <div className="title-wrapper">
                <h1 className="menu-item-title">
                  Find out more information about me
                </h1>
                <h1 className="menu-item-title">
                  Find out more information about me{" "}
                </h1>
              </div>
            )}
            {!aboutHover && <h6>about</h6>}
          </div>
          <div
            className="menu-item exp"
            onMouseLeave={() => setExpHover(false)}
            onMouseEnter={() => setExpHover(true)}
          >
            {expHover && (
              <div className="title-wrapper">
                <h1 className="menu-item-title">More about my experience</h1>
                <h1 className="menu-item-title">More about my experience</h1>
              </div>
            )}
            {!expHover && <h6>experience</h6>}
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
