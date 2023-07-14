import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

// import required modules
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Parallax,
} from "swiper/modules";

import "./styles/Projects.scss";

function Projects() {
  const imgData = [
    {
      id: 1,
      src: require("../img/memorize.webp"),
      href: "https://wdcreate.github.io/memorize.me/",
    },
    {
      id: 2,
      src: require("../img/accounter.webp"),
      href: "https://wdcreate.github.io/webaccounter/",
    },
    {
      id: 3,
      src: require("../img/pomodoro.webp"),
      href: "https://wdcreate.github.io/pomodoro/",
    },
    {
      id: 4,
      src: require("../img/bank-main.webp"),
      href: "https://wdcreate.github.io/bank-land/",
    },
    {
      id: 6,
      src: require("../img/fin-main.webp"),
      href: "https://wdcreate.github.io/finance-land/",
    },
    {
      id: 7,
      src: require("../img/game-main.webp"),
      href: "https://wdcreate.github.io/game-land/",
    },
    {
      id: 8,
      src: require("../img/q-main.webp"),
      href: "https://wdcreate.github.io/qubit-land/",
    },
    {
      id: 9,
      src: require("../img/rob-main.webp"),
      href: "https://wdcreate.github.io/robinhood-land/",
    },
    {
      id: 10,
      src: require("../img/room-main.webp"),
      href: "https://wdcreate.github.io/roomdes_land/",
    },
    {
      id: 11,
      src: require("../img/sama-main.webp"),
      href: "https://wdcreate.github.io/sama.eu-land/",
    },
  ];

  return (
    <div className="projects">
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
    </div>
  );
}

export default Projects;
