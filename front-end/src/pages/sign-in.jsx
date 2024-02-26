import Header from "../components/header";
import Article from "../components/article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/footer";

export default function SignIn() {
  return (
    <>
      <Header />
      <main className="sing-in">
        <Article className="sing-in__article">
          <FontAwesomeIcon icon={faCircleUser} className="header_nav__icon" />
          <h2 className="sing-in__title">Sign In</h2>
          <form method="get" action="">
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
                  value="option3"
                  className="sing-in__remember"
                ></input>
                Remember me
              </label>
            </p>
            <button type="submit" className="sing-in__btn">
              Sign In
            </button>
          </form>
        </Article>
      </main>
      <Footer />
    </>
  );
}
