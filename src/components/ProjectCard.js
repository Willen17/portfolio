import "./ProjectCard.css";
import { ReactComponent as ReactLogo } from "../assets/icons/react-svgrepo-com.svg";
import { ReactComponent as TSLogo } from "../assets/icons/typescript-svgrepo-com.svg";
import { ReactComponent as GithubLogo } from "../assets/icons/github-svgrepo-com.svg";
import { ReactComponent as LinkLogo } from "../assets/icons/link-svgrepo-com.svg";
import { ReactComponent as MuiLogo } from "../assets/icons/material-ui-svgrepo-com.svg";

import ReadMore from "./ReadMore";
import HoverText from "./HoverText";

const ProjectCard = ({ title, gif, text, repo, demo }) => {
  return (
    <div className="project-card">
      <h2 style={{ letterSpacing: ".05rem" }}>{title}</h2>
      <div className="preview-wrapper">
        <img
          className="project-preview"
          src={require(`../assets/imgs/${gif}`)}
          alt={title}
        />
      </div>
      <span>
        <ReadMore>{text}</ReadMore>
      </span>
      <div style={{ display: "flex", alignItems: "center" }}>
        Created using:
        <HoverText text="React">
          <ReactLogo className="project-logo" />
        </HoverText>
        <HoverText text="Typescript">
          <TSLogo className="project-logo" />
        </HoverText>
        <HoverText text="Material UI">
          <MuiLogo className="project-logo" />
        </HoverText>
      </div>
      <div>
        <a href={repo} target="_blank" rel="noopener noreferrer">
          <GithubLogo className="project-link" />
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <LinkLogo className="project-link" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
