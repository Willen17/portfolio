import "./AboutMe.css";

import { ReactComponent as BeerLogo } from "../assets/icons/beer-svgrepo-com.svg";
import { ReactComponent as DeveloperLogo } from "../assets/icons/web-development-svgrepo-com.svg";

export default function AboutMe() {
  return (
    <div className="about-me-container" id="about-me">
      <div className="about-me-top">
        <p className="element-text-about-me">{"< section >"}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 className="hero-title2">About me</h2>
          <div className="img-aboutme-container">
            <div className="beer-logo-aboutme-container">
              <BeerLogo className="beer-logo-aboutme" fill="#555555" />
            </div>
            <div className="ball-aboutme">
              <i className="ball-aboutme-shadow" />
              <div className="hero-img" />
            </div>

            <div className="developer-logo-aboutme-container">
              <DeveloperLogo
                className="developer-logo-aboutme"
                fill="#555555"
              />
            </div>
          </div>
        </div>

        <div className="about-me-text-container">
          <p>
            I'm a Front End developer based in Gothenburg. I describe myself as
            a passionate and creative developer who loves coding, design, and
            the web platform. <br /> <br /> Aside from my job, I always strive
            to learn more and expand my knowledge in developing. I often find
            myself spending way too much time watching videos and reading about
            new smart solutions and projects. <br />
            <br /> In my free time you can find me longboarding, traveling, in
            some local pub watching football or on tech meetups and conferences
            around Gothenburg.
          </p>
        </div>
      </div>
      <div className="cloud-container">
        <div className="cloud">
          <div className="cloud-circle" />
          <BeerLogo className="beer-logo" fill="#555555" />
          <DeveloperLogo className="developer-logo" fill="#555555" />
          <div className="cloud-circle2" />
        </div>
      </div>
      <a href="#skills" style={{ color: "unset" }}>
        <div className="bottom-button">{">>"}</div>
      </a>
    </div>
  );
}
