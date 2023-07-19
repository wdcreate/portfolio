import "./App.scss";
import Menu from "./sections/Menu";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import React, { useState, useEffect } from 'react';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 800) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);

  return (
    <div className="App">
      <Header />
      <Menu />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer>
        <span>2023</span>
      </footer>
    {showTopBtn &&  <a href="#header" className="top-btn">
        <img src={require("../src/img/to-top.png")} alt="to top" />
      </a>}
    </div>
  );
}

export default App;
