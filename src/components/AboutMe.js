import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-top">
        <div>
          <h2 className="hero-title2">About me</h2>
          <div className="hero-ball">
            <i className="hero-ball-shadow" />
            <div className="hero-img" />
          </div>
        </div>

        <div>
          Hi! I'm William! <br /> <br /> I'm a Front End developer based in
          Gothenburg. I describe myself as a passionate and creative developer
          who loves coding, design, and the web platform. <br /> <br /> Aside
          from my job, I always strive to learn more and expand my knowledge in
          developing. I often find myself spending way too much time watching
          videos and reading about new smart solutions and projects. <br />
          <br /> In my free time you can find me longboarding, traveling, in
          some local pub watching football or on tech meetups and conferences
          around Gothenburg.
        </div>
      </div>
      <div>circles</div>
    </div>
  );
}
