import "./styles/ProjectItem.scss";

function ProjectItem({ item }) {
  return (
    <a className="project-item" href={item.href}>
      <div className="top">
        <span>{item.id}</span>
        <span>{item.tech}</span>
      </div>
     {item.logo && <img src={item.logo} alt={item.title} />}
     {item.text && <p>{item.text}</p> }
     <div className="bottom">
      <h6>{item.title}</h6>
    <img src={require('../img/linkto.png')} alt="" />
     </div>
    </a>
  );
}

export default ProjectItem;
