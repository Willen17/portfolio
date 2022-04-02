import "./Projects.css";
import { ReactComponent as ReactLogo } from "../assets/icons/react-svgrepo-com.svg";
import { ReactComponent as TSLogo } from "../assets/icons/typescript-svgrepo-com.svg";
import { ReactComponent as GithubLogo } from "../assets/icons/github-svgrepo-com.svg";
import { ReactComponent as LinkLogo } from "../assets/icons/link-svgrepo-com.svg";
import { ReactComponent as MuiLogo } from "../assets/icons/material-ui-svgrepo-com.svg";

import Kameraproffset from "../assets/imgs/kameraproffser.gif";
import ReadMore from "./ReadMore";
import HoverText from "./HoverText";

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="hero-title2">Projects</h2>
      <div className="projects-wrapper">
        <div className="project-card">
          <h2 style={{ letterSpacing: ".05rem" }}>Kameraproffset</h2>
          <div className="preview-wrapper">
            <img
              className="project-preview"
              src={Kameraproffset}
              alt="Kameraproffset"
            />
          </div>
          <span>
            <ReadMore>
              Together with three classmates I created a camera web shop. The
              web shop contains the whole customer experience - from adding a
              product to going thru with a purchase and getting a unique order
              number. In addition to the customer flow, we have also created an
              admin page where we can change products according to the CRUD
              principle.
            </ReadMore>
          </span>
          <div style={{ display: "flex", alignItems: "center" }}>
            Created using:
            <HoverText text="React">
              <ReactLogo className="project-logo" />
            </HoverText>
            <HoverText text="Typescript">
              <TSLogo className="project-logo" />
            </HoverText>
            <HoverText text="Material">
              <MuiLogo className="project-logo" />
            </HoverText>
          </div>
          <div>
            <a
              href="https://github.com/Willen17/miniprojekt2-webbshop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo className="project-link" />
            </a>
            <a
              href="https://kameraproffset.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkLogo className="project-link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
