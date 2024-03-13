import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function Header({ className, children }) {
  return (
    <header>
      <nav className="header_nav">
        <ul className={className}>
          <li className="header_nav__li">
            <h1 className="header_nav__h1">
              <Link to="/" className="header_nav__link">
                <span className="header_nav__g1">Argent</span>
                <span className="header_nav__g2">Bank</span>
              </Link>
            </h1>
          </li>
          {children}
        </ul>
      </nav>
    </header>
  );
}
Header.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
