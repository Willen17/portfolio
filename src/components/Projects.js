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
          repo="https://github.com/Willen17/Kamerproffset-webshop"
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
          figma={true}
        />
        <ProjectCard
          title="Interactive CV"
          gif="interactivecv.gif"
          text="I was bored of all the traditional resumes and decided to take on a different twist. What I ended up creating is an interactive resume inspired by traditional platform-games, such as Mario. The site is also fully responsive."
          repo="https://github.com/Willen17/Redesign-of-website"
          demo="https://willen17.github.io/Interactive-CV/"
          html={true}
          css={true}
          js={true}
        />
        <ProjectCard
          title="Store.se"
          gif="storese.gif"
          text="A basic react webshop created by me and two classmates. The shop has 10 products which we fetch from an API. Since we didn't know about contexts we used callback-functions and props to control the data flow between the components."
          repo="https://github.com/Willen17/Store.se-webshop"
          demo="https://storese.netlify.app/"
          react={true}
          css={true}
          ts={true}
        />
        <ProjectCard
          title="Italian plumber guy"
          gif="italianplumber.gif"
          text="This is a text adventure game where you're stuck in a giant castle and your wife Peach has been kidnapped by an evil turtle named Bowser. Your mission is to navigate thru the castle and save Peach. However, you face some challenges along the way."
          repo="https://github.com/Willen17/Textspel"
          demo="https://willen17.github.io/Textspel/"
          html={true}
          js={true}
          css={true}
        />
        <ProjectCard
          title="Cum Pane"
          gif="cumpane.gif"
          text="Me and my classmate modernized an outdated website. The original website, cumpane.coop, is very outdated, lacks responsiveness and decent UX. We made our best to fix this and ended up with a way better version."
          repo="https://github.com/Willen17/Redesign-of-website"
          demo="https://willen17.github.io/Redesign-of-website/"
          html={true}
          css={true}
        />
      </div>
    </div>
  );
}
