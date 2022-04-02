import "./Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="hero-title2">Projects</h2>
      <div className="projects-wrapper">
        <ProjectCard
          title="Kameraproffset"
          gif="kameraproffser.gif"
          text="Together with three classmates I created a camera web shop. The web
          shop contains the whole customer experience - from adding a product to
          going thru with a purchase and getting a unique order number. In
          addition to the customer flow, we have also created an admin page
          where we can change products according to the CRUD principle."
          repo="https://github.com/Willen17/miniprojekt2-webbshop"
          demo="https://kameraproffset.netlify.app/"
          react={true}
          ts={true}
          mui={true}
        />
        <ProjectCard
          title="Space Patrol"
          gif="spacepatrol.gif"
          text="A game I created with three classmates using the p5js library. The game takes place in space where dangerous asteroids are threatening the planet. You will be positioned in a spacecraft. Your weapon is a laserbeam. Save our planet by shooting down asteroids with the laser."
          repo="https://github.com/Willen17/Space-Patrol-Game"
          demo="https://spacepatrol.netlify.app/"
          p5={true}
          ts={true}
        />
      </div>
    </div>
  );
}
