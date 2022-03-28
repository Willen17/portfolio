import "./Header.css";
import { ReactComponent as LinkedInLogo } from "../assets/icons/linkedin-svgrepo-com.svg";
import { ReactComponent as GithubLogo } from "../assets/icons/github-svgrepo-com.svg";

export default function Header() {
  return (
    <header>
      <p className="header-text">{"< HEADER >"}</p>
      <div>
        <LinkedInLogo
          className="linkedin-logo"
          fill="#FBF7F5"
          width={"2rem"}
          height={"2rem"}
        />
        <GithubLogo
          className="github-logo"
          fill="#FBF7F5"
          width={"2rem"}
          height={"2rem"}
        />
      </div>
    </header>
  );
}
