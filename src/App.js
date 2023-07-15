import "./App.scss";
import Menu from "./sections/Menu";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Header from "./sections/Header";
import Projects from "./sections/Projects";

function App() {
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
    </div>
  );
}

export default App;
