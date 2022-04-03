import "./ProjectCard.css";
import { ReactComponent as ReactLogo } from "../assets/icons/react-svgrepo-com.svg";
import { ReactComponent as TSLogo } from "../assets/icons/typescript-svgrepo-com.svg";
import { ReactComponent as GithubLogo } from "../assets/icons/github-svgrepo-com.svg";
import { ReactComponent as LinkLogo } from "../assets/icons/link-svgrepo-com.svg";
import { ReactComponent as MuiLogo } from "../assets/icons/material-ui-svgrepo-com.svg";
import { ReactComponent as FigmaLogo } from "../assets/icons/figma-svgrepo-com.svg";
import { ReactComponent as P5Logo } from "../assets/icons/p5js.svg";
import { ReactComponent as HTMLLogo } from "../assets/icons/html-5-logo-svgrepo-com.svg";
import { ReactComponent as CSSLogo } from "../assets/icons/css-3-logo-svgrepo-com.svg";
import { ReactComponent as JSLogo } from "../assets/icons/javascript-svgrepo-com.svg";

import Tilt from "react-parallax-tilt";

import ReadMore from "./ReadMore";
import HoverText from "./HoverText";

const ProjectCard = ({
  title,
  gif,
  text,
  repo,
  demo,
  react,
  ts,
  mui,
  figma,
  p5,
  html,
  css,
  js,
}) => {
  return (
    <Tilt tiltReverse={true} tiltMaxAngleX="5" tiltMaxAngleY="5">
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
          {html ? (
            <HoverText text="HTML">
              <HTMLLogo className="project-logo" />
            </HoverText>
          ) : null}
          {css ? (
            <HoverText text="CSS">
              <CSSLogo className="project-logo" />
            </HoverText>
          ) : null}
          {js ? (
            <HoverText text="Javascript">
              <JSLogo className="project-logo" />
            </HoverText>
          ) : null}
          {react ? (
            <HoverText text="React">
              <ReactLogo className="project-logo" />
            </HoverText>
          ) : null}
          {ts ? (
            <HoverText text="Typescript">
              <TSLogo className="project-logo" />
            </HoverText>
          ) : null}
          {mui ? (
            <HoverText text="Material UI">
              <MuiLogo className="project-logo" />
            </HoverText>
          ) : null}
          {figma ? (
            <HoverText text="Figma">
              <FigmaLogo className="project-logo" />
            </HoverText>
          ) : null}
          {p5 ? (
            <HoverText text="P5js">
              <P5Logo className="project-logo" />
            </HoverText>
          ) : null}
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
    </Tilt>
  );
};

export default ProjectCard;
