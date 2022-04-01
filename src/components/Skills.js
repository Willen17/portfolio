import "./Skills.css";
import { ReactComponent as HTMLLogo } from "../assets/icons/html-5-logo-svgrepo-com.svg";
import { ReactComponent as CSSLogo } from "../assets/icons/css-3-logo-svgrepo-com.svg";
import { ReactComponent as JSLogo } from "../assets/icons/javascript-svgrepo-com.svg";
import { ReactComponent as TSLogo } from "../assets/icons/typescript-svgrepo-com.svg";
import { ReactComponent as ReactLogo } from "../assets/icons/react-svgrepo-com.svg";
import { ReactComponent as P5Logo } from "../assets/icons/p5js.svg";
import { ReactComponent as GITLogo } from "../assets/icons/git-svgrepo-com.svg";
import { ReactComponent as AILogo } from "../assets/icons/adobe-illustrator-cc-logo-svgrepo-com.svg";
import { ReactComponent as AELogo } from "../assets/icons/after-effects-cc-logo-svgrepo-com.svg";
import { ReactComponent as PSLogo } from "../assets/icons/photoshop-cc-logo-svgrepo-com.svg";
import { ReactComponent as PRLogo } from "../assets/icons/premiere-cc-logo-svgrepo-com.svg";
import { ReactComponent as FigmaLogo } from "../assets/icons/figma-svgrepo-com.svg";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="hero-title2">Skills</h2>
      <p className="skills-text">
        After about a year of web developing I have hade the delight to come
        across a bunch of different techniques. <br /> All from the basics such
        as HTML and CSS to different libraries like React and P5js. <br />
        <br />
        Listed beneath are techniques, programs and libraries which I am more
        than confident in using.
      </p>
      <div className="skills-wrapper">
        <HTMLLogo className="skills-logo" />
        <CSSLogo className="skills-logo" />
        <JSLogo className="skills-logo" />
        <TSLogo className="skills-logo" />
        <ReactLogo className="skills-logo" />
        <P5Logo className="skills-logo" style={{ fill: "#ED225D" }} />
        <GITLogo className="skills-logo" />
        <FigmaLogo className="skills-logo" />
        <div className="skills-wrapper">
          <AILogo className="skills-logo" />
          <AELogo className="skills-logo" />
          <PSLogo className="skills-logo" />
          <PRLogo className="skills-logo" />
        </div>
      </div>
    </div>
  );
}
