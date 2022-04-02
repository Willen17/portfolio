import "./Projects.css";
import { ReactComponent as ReactLogo } from "../assets/icons/react-svgrepo-com.svg";
import { ReactComponent as TSLogo } from "../assets/icons/typescript-svgrepo-com.svg";
import { ReactComponent as GithubLogo } from "../assets/icons/github-svgrepo-com.svg";
import { ReactComponent as LinkLogo } from "../assets/icons/link-svgrepo-com.svg";
import Kameraproffset from "../assets/imgs/kameraproffser.gif";
import ReadMore from "./ReadMore";

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="hero-title2">Projects</h2>
      <div className="projects-wrapper">
        <div className="project-card">
          Kameraproffset
          <img
            className="project-preview"
            src={Kameraproffset}
            alt="Kameraproffset"
          />
          <p>
            <ReadMore>
              Together with three classmates I created a camera web shop. The
              web shop contains the whole customer experience - from adding a
              product to going thru with a purchase and getting a unique order
              number. In addition to the customer flow, we have also created an
              admin page where we can change products according to the CRUD
              principle.
            </ReadMore>
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            Created using: <ReactLogo className="project-logo" />
            <TSLogo className="project-logo" />
          </div>
          <div>
            <GithubLogo className="project-logo" />{" "}
            <LinkLogo className="project-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
