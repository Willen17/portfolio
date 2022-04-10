import "./Footer.css";
import { ReactComponent as PhoneLogo } from "../assets/icons/phone-svgrepo-com.svg";
import { ReactComponent as MailLogo } from "../assets/icons/mail-svgrepo-com.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-text">
          Designed and developed with ❤ by William Saar. © 2022
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="mailto:williamsaar@outlook.com">
            <MailLogo
              className="mail-logo"
              fill="#FBF7F5"
              width={"1rem"}
              height={"1rem"}
            />
          </a>
          <p>williamsaar@outlook.com</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="tel:+46702232081">
            <PhoneLogo
              className="phone-logo"
              fill="#FBF7F5"
              width={"1rem"}
              height={"1rem"}
            />
          </a>

          <p>+46702232081</p>
        </div>
      </div>
    </footer>
  );
}
