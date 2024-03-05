import Button from "../components/button";
import Header from "../components/header";
import Article from "../components/article";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "react-redux";
import { useState, useEffect } from "react";

export default function User() {
  const store = useStore();
  const [userData, setUserData] = useState(store.getState().profil);
  console.log(store.getState().profil);
  useEffect(() => {
    function remove() {
      store.subscribe(() => {
        setUserData(store.getState().profil);
      });
    }
    remove();
  }, [store]);

  return (
    <>
      <Header>
        <li className="header_nav__li header_nav__name">
          <Link to="#" className="header_nav__link">
            <FontAwesomeIcon icon={faCircleUser} className="header_nav__icon" />
            <p className="header_nav__p">{userData[0].firstName}</p>
          </Link>
        </li>
        <li className="header_nav__li">
          <Link to="/" className="header_nav__link">
            <Button
              type="button"
              className="btn"
              onClick={() =>
                store.dispatch({ type: "REMOVE_PROFIL", payload: "" })
              }
            >
              <FontAwesomeIcon icon={faSignOut} className="header_nav__icon" />
              Sign Out
            </Button>
          </Link>
        </li>
      </Header>
      <main className="user">
        <Article className="user__article_h">
          <h2 className="user__h">
            Welcome back <br />
            {userData[0].firstName} {userData[0].lastName}
          </h2>
          <Button type="button" className="user__btn">
            Edit Name
          </Button>
        </Article>
        <Article className="user__account">
          <div className="user__content_wrapper">
            <h3 className="user__title">Argent Bank Checking (x8349)</h3>
            <p className="user__amount">$2,082.79</p>
            <p className="user__description">Available Balance</p>
          </div>
          <Button type="button" className="user__button">
            View transactions
          </Button>
        </Article>
        <Article className="user__account">
          <div className="user__content_wrapper">
            <h3 className="user__title">Argent Bank Savings (x6712)</h3>
            <p className="user__amount">$10,928.42</p>
            <p className="user__description">Available Balance</p>
          </div>
          <Button type="button" className="user__button">
            View transactions
          </Button>
        </Article>
        <Article className="user__account">
          <div className="user__content_wrapper">
            <h3 className="user__title">Argent Bank Credit Card (x8349)</h3>
            <p className="user__amount">$184.30</p>
            <p className="user__description">Current Balance</p>
          </div>
          <Button type="button" className="user__button">
            View transactions
          </Button>
        </Article>
      </main>
      <Footer />
    </>
  );
}
