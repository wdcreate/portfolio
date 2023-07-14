import Links from "../components/Links";
import "./styles/Menu.scss";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-item main">
        <h6>see creations</h6>
      </div>
      <div className="menu-items">
        <div className="menu-list">
          <div className="menu-item ab">
            <h6>about</h6>
          </div>
          <div className="menu-item exp">
            <h6>experience</h6>
          </div>
        </div>
        <div className="menu-item full">
          <Links />
        </div>
      </div>
    </div>
  );
}

export default Menu;
