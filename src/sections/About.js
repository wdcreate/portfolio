import "./styles/About.scss";

function About() {
  return (
    <div className="about">
      <div class="about-description">
        <p>
          I am currently a freelancer <b>Web Developer</b> on <b>Fiverr</b>,
          where I develop and maintain websites for various clients.
          Additionally, I specialize in implementing responsive design
          techniques to ensure that websites are optimized for mobile devices.{" "}
          <br />I also have experience creating single-page applications (SPAs)
          using the React framework.
        </p>
        <p>
          Outside of work, I'm interested in following innovations, football,
          F1, books. I also play video games. And take photos.
        </p>
      </div>
      <div className="tech">
        <div class="stack">
          Here are some technologies I have been working with:
        </div>
        <ul class="tech-stack">
          <li>React JS</li>
          <li>Javascript ES6+</li>
          <li>HTML &amp; CSS</li>
          <li>JS libraries</li>
          <li>CSS libraries</li>
          <li>SASS, SCSS</li>
          <li>Firebase</li>
          <li>Git</li>
          <li>Wordpress</li>
          <li>Wix</li>
          <li>Gulp</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
