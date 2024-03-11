import Header from "../components/header";
import Article from "../components/article";
import IconChat from "../assets/icon-chat.png";
import IconMoney from "../assets/icon-money.png";
import IconSecurtity from "../assets/icon-security.png";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    document.title = "Argent Bank - Home Page";
  });

  return (
    <>
      <Header>
        <li className="header_nav__li">
          <Link to="/sign-in" className="header_nav__link">
            <FontAwesomeIcon icon={faCircleUser} className="header_nav__icon" />
            <p className="header_nav__p">Sign In</p>
          </Link>
        </li>
      </Header>
      <main>
        <section className="index_banner">
          <Article className="index_banner__article">
            <h2 className="index_banner__h2">
              No fees.
              <br />
              No minimum deposit.
              <br />
              High interest rates.
            </h2>
            <p>Open a savings account with Argent Bank today!</p>
          </Article>
        </section>
        <section className="index_section">
          <Article className="index_section__article">
            <img
              src={IconChat}
              alt="Chat Icon"
              className="index_section__img"
            />
            <h3 className="index_section__title">You are our #1 priority</h3>
            <p className="index_section__p">
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </Article>
          <Article className="index_section__article">
            <img
              src={IconMoney}
              alt="money Icon"
              className="index_section__img"
            />
            <h3 className="index_section__title">
              More savings means higher rates
            </h3>
            <p className="index_section__p">
              The more you save with us, the higher your interest rate will be!
            </p>
          </Article>
          <Article className="index_section__article">
            <img
              src={IconSecurtity}
              alt="Security Icon"
              className="index_section__img"
            />
            <h3 className="index_section__title">Security you can trust</h3>
            <p className="index_section__p">
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </Article>
        </section>
        <Footer />
      </main>
    </>
  );
}
