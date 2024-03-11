import Button from "../components/button";
import Header from "../components/header";
import Article from "../components/article";
import Input from "../components/input";
import Div from "../components/div";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "react-redux";
import { useState, useEffect } from "react";
import Api from "../api/api";

export default function User() {
  const store = useStore();
  const [userData, setUserData] = useState(store.getState().profil);
  const [updateName, setupdateName] = useState(false);
  const [saveName, setsaveName] = useState(null);

  useEffect(() => {
    async function remove() {
      store.subscribe(() => {
        setUserData(store.getState().profil);
      });
      if (saveName) {
        const token = store.getState().token;
        const value = await Api({ ...saveName }, { token });

        store.dispatch({ type: "UPDATE_PROFIL", payload: value });
        store.subscribe(() => {
          setUserData(store.getState().profil);
        });
      }
    }
    remove();
  }, [store, saveName]);

  function handleSave(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    setsaveName(formJson);
  }

  return (
    <>
      <Header>
        <li className="header_nav__li header_nav__name">
          <Link to="#" className="header_nav__link">
            <FontAwesomeIcon icon={faCircleUser} className="header_nav__icon" />
            <p className="header_nav__p">{userData.firstName}</p>
          </Link>
        </li>
        <li className="header_nav__li">
          <Link to="/" className="header_nav__link">
            <Button
              type="button"
              className="btn"
              onClick={() =>
                store.dispatch({ type: "REMOVE_PROFIL", payload: {} })
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
          {updateName ? (
            <>
              <h2 className="user__h">Welcome back</h2>
              <form
                className="user__form-update"
                onSubmit={(e) => handleSave(e)}
              >
                <Input
                  className="user__p"
                  htmlFor="firstName"
                  type="text"
                  name="firstName"
                  id="firstName"
                  className3="user__input"
                  placeholder={userData.firstName}
                />
                <Input
                  className="user__p"
                  htmlFor="lastName"
                  type="text"
                  name="lastName"
                  id="lastName"
                  className3="user__input"
                  placeholder={userData.lastName}
                />
                <Button type="submit" className="user__btn-update">
                  Save
                </Button>
                <Button
                  type="button"
                  className="user__btn-update"
                  onClick={() => setupdateName(!updateName)}
                >
                  Cancel
                </Button>
              </form>
            </>
          ) : (
            <>
              <h2 className="user__h">
                Welcome back <br />
                {userData.firstName} {userData.lastName}
              </h2>
              <Button
                type="button"
                className="user__btn"
                onClick={() => setupdateName(!updateName)}
              >
                Edit Name
              </Button>
            </>
          )}
        </Article>
        <Article className="user__account">
          <Div
            className="user__content_wrapper"
            className1="user__title"
            className2="user__amount"
            className3="user__description"
          >
            Argent Bank Checking (x8349) {"$2,082.79"} Available Balance
          </Div>
          <Button type="button" className="user__button">
            View transactions
          </Button>
        </Article>
        <Article className="user__account">
          <Div
            className="user__content_wrapper"
            className1="user__title"
            className2="user__amount"
            className3="user__description"
          >
            Argent Bank Savings (x6712) {"$10,928.42"} Available Balance
          </Div>
          <Button type="button" className="user__button">
            View transactions
          </Button>
        </Article>
        <Article className="user__account">
          <Div
            className="user__content_wrapper"
            className1="user__title"
            className2="user__amount"
            className3="user__description"
          >
            Argent Bank Credit Card (x8349) {"$184.30"} Current Balance
          </Div>
          <Button type="button" className="user__button">
            View transactions
          </Button>
        </Article>
      </main>
      <Footer />
    </>
  );
}
