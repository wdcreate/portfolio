import './styles/Links.scss'


function Links() {
  return (
    <div className="links">
      <h5>Contact me</h5>
      <div className="links-inner">

      <a href="https://www.linkedin.com/in/creatinglab">
      <img src={require("../img/linkedin.png")} alt="Linkedin" />
      </a>
      <a href="https://github.com/wdcreate">
      <img src={require("../img/github.png")} alt="github" />

      </a>
      <a href="mailto:createsometh@gmail.com">
      <img src={require("../img/mail.png")} alt="email" />
      </a>
      </div>
    </div>
  );
}

export default Links;
