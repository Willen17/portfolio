import "./StartPage.css";
import Turtle from "./Turtle";
import Tilt from "react-parallax-tilt";

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
          <h3 className="hero-title2">a front-end developer</h3>
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
            tiltMaxAngleX="10"
            tiltMaxAngleY="10"
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

      <div className="bottom-button">{">>"}</div>
    </div>
  );
}
