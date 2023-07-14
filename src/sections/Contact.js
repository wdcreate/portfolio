import "./styles/Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <a href="mailto:createsometh@gmail.com" className="contact-btn">Contact me!</a>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/creatinglab">
          <img src={require("../img/linkedin.png")} alt="Linkedin" />
        </a>
        <a href="https://github.com/wdcreate">
          <img src={require("../img/github.png")} alt="github" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
