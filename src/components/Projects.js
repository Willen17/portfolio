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
        />
      </div>
    </div>
  );
}
