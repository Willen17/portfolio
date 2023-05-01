import "./Skills.css";
import Tilt from "react-parallax-tilt";
import { ReactComponent as HTMLLogo } from "../assets/icons/html-5-logo-svgrepo-com.svg";
import { ReactComponent as CSSLogo } from "../assets/icons/css-3-logo-svgrepo-com.svg";
import { ReactComponent as FirebaseLogo } from "../assets/icons/firebase-seeklogo.com.svg";
import { ReactComponent as TSLogo } from "../assets/icons/typescript-svgrepo-com.svg";
import { ReactComponent as ReactLogo } from "../assets/icons/react-svgrepo-com.svg";
import { ReactComponent as NextLogo } from "../assets/icons/nextjs-logo.svg";
import { ReactComponent as PhpLogo } from "../assets/icons/PHP-logo.svg";
import { ReactComponent as GITLogo } from "../assets/icons/git-svgrepo-com.svg";
import { ReactComponent as AILogo } from "../assets/icons/adobe-illustrator-cc-logo-svgrepo-com.svg";
import { ReactComponent as AELogo } from "../assets/icons/after-effects-cc-logo-svgrepo-com.svg";
import { ReactComponent as PSLogo } from "../assets/icons/photoshop-cc-logo-svgrepo-com.svg";
import { ReactComponent as PRLogo } from "../assets/icons/premiere-cc-logo-svgrepo-com.svg";
import { ReactComponent as FigmaLogo } from "../assets/icons/figma-svgrepo-com.svg";

export default function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h2 className="hero-title2">Skills</h2>
      <p className="skills-text">
        After around two years of web developing I have had the delight of using
        a bunch of different techniques. <br /> All from front-end libraries
        such as Vue and React to full stack solutions. <br />
        <br />
        Listed beneath are techniques, programmes and libraries in which I have
        experience working with.
      </p>
      <div className="skills-wrapper">
        <Tilt tiltReverse={true}>
          <TSLogo className="skills-logo" />
        </Tilt>
        <Tilt tiltReverse={true}>
          <ReactLogo className="skills-logo" />
        </Tilt>
        <Tilt tiltReverse={true}>
          <NextLogo className="skills-logo" />
        </Tilt>
        <Tilt tiltReverse={true}>
          <FirebaseLogo className="skills-logo" />
        </Tilt>
        <Tilt tiltReverse={true}>
          <PhpLogo className="skills-logo" />
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
      <a href="#projects" style={{ color: "unset" }}>
        <div className="bottom-button">{">>"}</div>
      </a>
    </div>
  );
}
