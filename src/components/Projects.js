import "./Projects.css";
import { ReactComponent as ReactLogo } from "../assets/icons/react-svgrepo-com.svg";
import { ReactComponent as TSLogo } from "../assets/icons/typescript-svgrepo-com.svg";

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="hero-title2">Projects</h2>
      <div className="project-wrapper">
        <div className="project-card">
          Kameraproffset
          <ReactLogo className="project-logo" />{" "}
          <TSLogo className="project-logo" />
          <p></p>
        </div>
      </div>
    </div>
  );
}
