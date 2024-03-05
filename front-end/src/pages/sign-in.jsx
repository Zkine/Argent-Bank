import { store } from "../store/store";
import { useState, useEffect } from "react";
import Header from "../components/header";
import Article from "../components/article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/button";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Api from "../api/api";

export default function SignIn() {
  const [connection, setConnection] = useState(null);
  const [profil, setProfil] = useState(store.getState().profil);

  const navigate = useNavigate();

  useEffect(() => {
    async function startFetching() {
      if (connection) {
        const value = await Api({ ...connection });
        if (value.status !== 400) {
          setConnection(value);
          store.dispatch({ type: "ADD_PROFIL", payload: value.body });
          store.subscribe(() => {
            setProfil(store.getState().profil);
          });
          return navigate("/user");
        }
      }
      return {};
    }
    startFetching();
  }, [connection, navigate]);

  function handleConnection(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    const userData = JSON.parse(import.meta.env.VITE_ARRAY_USER);
    const user = userData.user.filter(
      (el) =>
        el.password === formJson.password && el.firstName === formJson.username
    );
    formJson.email = user[0].email;
    delete formJson.username;
    setConnection(formJson);
  }

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
      <main className="sing-in">
        <Article className="sing-in__article">
          <FontAwesomeIcon icon={faCircleUser} className="header_nav__icon" />
          <h2 className="sing-in__title">Sign In</h2>
          <form onSubmit={(e) => handleConnection(e)}>
            <p className="sing-in__p">
              <label htmlFor="username" className="sing-in__label">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="sing-in__input"
              ></input>
            </p>
            <p className="sing-in__p">
              <label htmlFor="password" className="sing-in__label">
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                className="sing-in__input"
              ></input>
            </p>
            <p className="sing-in__p">
              <label>
                <input
                  type="checkbox"
                  name="myCheckbox"
                  value="option1"
                  className="sing-in__remember"
                ></input>
                Remember me
              </label>
            </p>
            <Button type="submit" className="sing-in__btn">
              Sign In
            </Button>
          </form>
        </Article>
      </main>
      <Footer />
    </>
  );
}
