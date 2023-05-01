import "./Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2 className="hero-title2">Projects</h2>
      <div className="projects-wrapper">
        <ProjectCard
          title="Blueprint"
          video="blueprint"
          text="Blueprint is a digital picture wall planner that assists you with creating your ideal art wall. It is used to simulate your home setting and visualize your desired picture wall. The frameworks we used were Next.js, Konva, Firebase, MUI, and it's deployed with Vercel."
          repo="https://github.com/Willen17/Blueprint"
          demo="https://blue-print.vercel.app/"
          next
          ts
          firebase
        />
        <ProjectCard
          title="Hyrstacken"
          video="hyrstacken"
          text="Hyrstacken is a site where you can rent/rent out items to/from other people in your area in Gothenburg. The project is a fullstack application where users can sign up and post their own items."
          repo="https://github.com/Willen17/Hyrstacken"
          demo="https://hyrstacken.vercel.app/"
          next
          prisma
          ts
        />
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
      </div>
    </div>
  );
}
