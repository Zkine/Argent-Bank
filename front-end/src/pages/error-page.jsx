import Header from "../components/header";
import Article from "../components/article";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ErrorPage() {
  useEffect(() => {
    document.title = "Argent Bank - Error Page";
  });
  return (
    <>
      <Header className="header_nav__ul">
        <li className="header_nav__li">
          <Link to="/sign-in" className="header_nav__link">
            <FontAwesomeIcon icon={faCircleUser} className="header_nav__icon" />
            <p className="header_nav__p">Sign In</p>
          </Link>
        </li>
      </Header>
      <Article className="error-page">
        <div className="error-page__div">
          <h2 className="error-page__h2">
            No fees.
            <br />
            No minimum deposit.
            <br />
            High interest rates.
          </h2>
          <p className="error-page__p1">Sorry, the page cannot be found.</p>
          <p className="error-page__p2">{"page 404"}</p>
          <Link to="/">
            <p>click to return to home</p>
          </Link>
        </div>
      </Article>
      <Footer />
    </>
  );
}
