import "./StartPage.css";
import Turtle from "./Turtle";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";

export default function StartPage() {
  return (
    <div className="start-page-container">
      <div className="hero-container">
        <div className="hero-text-container">
          <p className="element-text">{"< main >"}</p>
          <h1 className="hero-title">Hello!</h1>
          <div className="hero-text-container2">
            <h2 className="hero-title2">I am</h2>
            <h2 className="hero-title3">William</h2>
          </div>
          <span className="hero-title2">
            <Typewriter
              words={[
                "a front-end developer",
                "an espresso nerd",
                "a media creator",
              ]}
              cursor
              loop={false}
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            ></Typewriter>
          </span>
          <div className="hero-ball-container">
            <div className="hero-small-ball1">
              <i className="hero-small-ball1-shadow" />
            </div>
            <div className="hero-small-ball2">
              <i className="hero-small-ball2-shadow" />
            </div>
            <div className="hero-small-ball3">
              <i className="hero-small-ball3-shadow" />
            </div>
          </div>
        </div>
        <div>
          <Tilt
            perspective={500}
            tiltMaxAngleX="5"
            tiltMaxAngleY="5"
            trackOnWindow={true}
            tiltReverse={true}
          >
            <div className="hero-ball">
              <div className="turtle">
                <Turtle />
              </div>

              <i className="hero-ball-shadow" />
            </div>
          </Tilt>
        </div>
      </div>
      <a href="#about-me" style={{ color: "unset" }}>
        <div className="bottom-button">{">>"}</div>
      </a>
    </div>
  );
}
