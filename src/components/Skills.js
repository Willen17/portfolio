import "./Skills.css";
import Tilt from "react-parallax-tilt";
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
        After about a year of web developing I have had the delight of using a
        bunch of different techniques. <br /> All from the basics such as HTML
        and CSS to different libraries like React and P5js. <br />
        <br />
        Listed beneath are techniques, programs and libraries which I am more
        than confident in using.
      </p>
      <div className="skills-wrapper">
        <Tilt tiltReverse={true}>
          <HTMLLogo className="skills-logo" />
        </Tilt>
        <Tilt tiltReverse={true}>
          <CSSLogo className="skills-logo" />
        </Tilt>
        <Tilt tiltReverse={true}>
          <JSLogo className="skills-logo" />
        </Tilt>
        <Tilt tiltReverse={true}>
          <TSLogo className="skills-logo" />
        </Tilt>{" "}
        <Tilt tiltReverse={true}>
          <ReactLogo className="skills-logo" />
        </Tilt>
        <Tilt tiltReverse={true}>
          <P5Logo className="skills-logo" style={{ fill: "#ED225D" }} />
        </Tilt>
        <Tilt tiltReverse={true}>
          <GITLogo className="skills-logo" />
        </Tilt>
        <Tilt tiltReverse={true}>
          <FigmaLogo className="skills-logo" />
        </Tilt>
        <div className="skills-wrapper">
          <Tilt tiltReverse={true}>
            <AILogo className="skills-logo" />
          </Tilt>
          <Tilt tiltReverse={true}>
            <AELogo className="skills-logo" />
          </Tilt>
          <Tilt tiltReverse={true}>
            <PSLogo className="skills-logo" />
          </Tilt>
          <Tilt tiltReverse={true}>
            <PRLogo className="skills-logo" />
          </Tilt>
        </div>
      </div>
    </div>
  );
}
