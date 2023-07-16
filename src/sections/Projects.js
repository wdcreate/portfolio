import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Parallax,
} from "swiper/modules";

import "./styles/Projects.scss";
import ProjectItem from "../components/ProjectItem";
import { motion } from "framer-motion";
const CarouselAnimation = {
  hidden: { y: 50, opacity: 0,    transition: { stiffness: 100,  },
},
  visible: {
    y: 0,
    opacity: 1,
    transition: { stiffness: 100,  },

  },
};
function Projects() {
  const imgData = [
    {
      id: 1,
      src: require("../img/memorize.webp"),
      href: "https://wdcreate.github.io/memorize.me/",
      tech: "React, Redux, Firebase",
      title: "Memorize.me",
      text: `App for saving and learning words.
      Create new account or check app: 
      test@test.com password: 123123 `,
    },
    {
      id: 2,
      src: require("../img/accounter.webp"),
      href: "https://wdcreate.github.io/webaccounter/",
      tech: "React, Redux, Firebase",
      title: "Accounter",
      text: ` Take control of your subscriptions and email management. 
      Create new account or check app: 
     1@test.com password: 123123`,
    },
    {
      id: 3,
      src: require("../img/pomodoro.webp"),
      href: "https://wdcreate.github.io/pomodoro/",
      tech: "React",
      title: "Pomodoro",
      text: "App for time tracking.",
    },
    {
      id: 4,
      src: require("../img/bank-main.webp"),
      href: "https://wdcreate.github.io/bank-land/",
      tech: "HTML, CSS, JS",
      title: "Demo Banking App",
      text: "Demonstrating banking application.",
    },
    {
      id: 6,
      src: require("../img/fin-main.webp"),
      href: "https://wdcreate.github.io/finance-land/",
      tech: "HTML, CSS, JS",
      title: "Demo Finance Platform",
    },
    {
      id: 7,
      src: require("../img/game-main.webp"),
      href: "https://wdcreate.github.io/game-land/",
      tech: "HTML, CSS, JS",
      title: "Demo Game Website",
      text: "Demonstrating game.",
    },
    {
      id: 8,
      src: require("../img/q-main.webp"),
      href: "https://wdcreate.github.io/qubit-land/",
      tech: "HTML, CSS, JS",
      title: "Demo E-commerce Platform",
    },
    {
      id: 9,
      src: require("../img/rob-main.webp"),
      href: "https://wdcreate.github.io/robinhood-land/",
      tech: "HTML, CSS, JS",
      title: "Demo Banking App",
    },
    {
      id: 10,
      src: require("../img/room-main.webp"),
      href: "https://wdcreate.github.io/roomdes_land/",
      tech: "HTML, CSS, JS",
      title: "Demo Design Bureau",
    },
    {
      id: 11,
      src: require("../img/sama-main.webp"),
      href: "https://wdcreate.github.io/sama.eu-land/",
      tech: "HTML, CSS, JS",
      title: "Demo Team App",
    },
  ];

  return (
    <div className="projects">
      <motion.div  viewport={{ amount: 0.2, once: true }}
      variants={CarouselAnimation}
      initial="hidden"
      whileInView="visible">

      <Swiper 
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Autoplay, EffectFade, Parallax]}
        className="sw-projects"
        navigation
        autoplay
        effect="fade"
        parallax
      >
        {imgData.map((item) => (
          <SwiperSlide className="sw-slide" key={item.id}>
            <img src={item.src} alt="" />
            <a href={item.href}>
              <img src={require("../img/link.png")} alt="Link" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      </motion.div>
      <div className="projects-cards">
        {imgData.map((item) => (
          <ProjectItem item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;
