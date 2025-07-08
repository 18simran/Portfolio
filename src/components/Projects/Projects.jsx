import "../../styles/projects.css";
import "../../styles/mediaqueries.css";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <p className="title-projects">
          My <span>Projects</span>{" "}
        </p>
        <div className="projects-section d-flex justify-content-center align-items-center  flex-wrap gap-4">
          {projects.map((p, id) => (
            <div className="project" key={id}>
              <img src={p.image} />
              <div className="project-overlay d-flex justify-content-center align-items-center">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  className="link  d-flex justify-content-center align-items-center "
                >
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </div>
            </div>
          ))}

          <div className="project "></div>
        </div>
      </div>
    </>
  );
};
export default Projects;
