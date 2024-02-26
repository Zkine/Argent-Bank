import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <nav className="header_nav">
        <ul className="header_nav__ul">
          <li className="header_nav__li">
            <h1 className="header_nav__h1">
              <Link to="/" className="header_nav__link">
                <span className="header_nav__g1">Argent</span>
                <span className="header_nav__g2">Bank</span>
              </Link>
            </h1>
          </li>
          <li className="header_nav__li">
            <Link to="/sign-in" className="header_nav__link">
              <FontAwesomeIcon
                icon={faCircleUser}
                className="header_nav__icon"
              />
              <p className="header_nav__p">Sign In</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
