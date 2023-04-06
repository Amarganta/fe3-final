import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";
import { GlobalContext } from "../Context/GlobalContext";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleToggleTheme = () => {
    dispatch({ type: "toggle_theme" });
  };

  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm ${
          state.theme === "light"
            ? "navbar-light bg-light"
            : "navbar-dark bg-dark"
        }`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home">
            DH Dental Care
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/favs">
                  Favs
                </Link>
              </li>

              <li className={`nav-item`}>
                <button
                  className={`btn btn-light ${styles.btnStyle}`}
                  onClick={handleToggleTheme}
                >
                  {state.theme === "light" ? "☀️" : "🌙"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
