import "./Header.css";
import { ReactComponent as LinkedInLogo } from "../assets/icons/linkedin-svgrepo-com.svg";
import { ReactComponent as GithubLogo } from "../assets/icons/github-svgrepo-com.svg";

export default function Header() {
  return (
    <header>
      <p className="header-text">{"< HEADER >"}</p>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/williamsaar99/"
        >
          <LinkedInLogo
            className="linkedin-logo"
            fill="#FBF7F5"
            width={"2rem"}
            height={"2rem"}
          />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Willen17">
          <GithubLogo
            className="github-logo"
            fill="#FBF7F5"
            width={"2rem"}
            height={"2rem"}
          />
        </a>
      </div>
    </header>
  );
}
