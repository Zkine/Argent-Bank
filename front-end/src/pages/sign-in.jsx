import { useState, useEffect } from "react";
import Header from "../components/header";
import Article from "../components/article";
import Input from "../components/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/button";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Api from "../api/api";
import { useStore } from "react-redux";

export default function SignIn() {
  const store = useStore();
  const [connection, setConnection] = useState(null);
  const [profil, setProfil] = useState(store.getState().profil);
  const [isEmailError, setEmailError] = useState(false);
  const [isPasswordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function startFetching() {
      document.title = "Argent Bank - Sign-in Page";
      if (profil.email) {
        return navigate("/user");
      } else if (connection) {
        const value = await Api({ ...connection });
        if (value.status !== 400) {
          store.dispatch({ type: "ADD_PROFIL", payload: value });
          store.subscribe(() => {
            setProfil(store.getState().profil);
          });
          return navigate("/user");
        }
      }
      return {};
    }
    startFetching();
  }, [connection, navigate, profil, store]);

  function handleConnection(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    const regExpEmail = new RegExp(import.meta.env.VITE_EMAIL_REGEX);
    const regExpPassword = new RegExp(import.meta.env.VITE_PASSWORD_REGEX);

    if (!regExpEmail.test(formJson.email)) {
      return setEmailError(true);
    } else if (!regExpPassword.test(formJson.password)) {
      return setPasswordError(true);
    }

    if (formJson.checkbox) {
      localStorage.email = formJson.email;
      localStorage.checkbox = formJson.checkbox;
    } else {
      localStorage.clear();
    }
    return setConnection(formJson);
  }

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
      <main className="sing-in">
        <Article className="sing-in__article">
          <FontAwesomeIcon icon={faCircleUser} className="header_nav__icon" />
          <h2 className="sing-in__title">Sign In</h2>
          <form onSubmit={(e) => handleConnection(e)}>
            <Input
              className="sing-in__p"
              htmlFor="email"
              className2="sing-in__label"
              type="text"
              name="email"
              defaultValue={localStorage.email}
              id="email"
              className3="sing-in__input"
            >
              Email
            </Input>
            {isEmailError && (
              <span>
                {` Your email must contain an @ as well as a . at the end of the email
                is obligatory.`}
              </span>
            )}
            <Input
              className="sing-in__p"
              htmlFor="password"
              className2="sing-in__label"
              type="password"
              name="password"
              defaultValue={localStorage.password}
              id="password"
              className3="sing-in__input"
              autoComplete="off"
            >
              Password
            </Input>
            {isPasswordError && (
              <span>
                {` Your password contains a minimum of two characters with at least one letter and one number`}
              </span>
            )}
            <Input
              className="sing-in__p"
              htmlFor="checkbox"
              type="checkbox"
              name="checkbox"
              value="remember me"
              id="checkbox"
              defaultChecked={
                localStorage.length > 0 && localStorage.checkbox !== ""
                  ? true
                  : false
              }
              className3="sing-in__remember"
            >
              Remember me
            </Input>
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
