import { useEffect, useState } from "react";
import Links from "../components/Links";
import "./styles/Menu.scss";
import { motion } from "framer-motion";

function Menu() {
  const [creationHover, setCreationHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [expHover, setExpHover] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setExpHover(false);
      setAboutHover(false);
      setCreationHover(false);
    }
  }, [aboutHover, expHover]);
  return (
    <motion.div initial="from" whileInView="to" className="menu">
      <a
        href="#projects"
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
      </a>
      <div className="menu-items">
        <div className="menu-list">
          <a
            href="#about"
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
          </a>
          <a
            href="#experience"
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
          </a>
        </div>
        <div className="menu-item full">
          <Links />
        </div>
      </div>
    </motion.div>
  );
}

export default Menu;
