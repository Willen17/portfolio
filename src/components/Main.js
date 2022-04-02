import AboutMe from "./AboutMe";
import "./Main.css";
import Projects from "./Projects";
import Skills from "./Skills";
import StartPage from "./StartPage";

export default function Main() {
  return (
    <main>
      <StartPage />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}
