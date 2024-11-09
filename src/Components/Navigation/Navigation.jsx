import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { chevronDown } from "react-icons-kit/feather/chevronDown";
import { chevronRight } from "react-icons-kit/feather/chevronRight";

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setShowNavBar((prevState) => (prevState = !prevState));
  };
  return (
    <nav
      className={`${styles["navbar"]} ${
        (scrolling || showNavBar) && styles["nav-shadow"]
      }`}
    >
      <div className={styles["navbar-logo"]}>
        <Link to="/">
          <img
            src="/logo/default-monochrome-white.svg"
            className={styles["nav-bar_logo"]}
            alt="CapitalCoinInvestment"
          />
        </Link>
        <button onClick={toggleNav}>☰</button>
      </div>
      <div
        className={`${styles["navbar-links"]} ${
          showNavBar ? styles["show"] : ""
        }`}
      >
        <ul>
          <li className={styles["market"]}>
            <Link to="/">
              MARKETS <Icon icon={chevronDown} />
            </Link>
            <div className={styles["market-options"]}>
              <Link to="/crypto">
                <Icon icon={chevronRight} />
                CRYPTOS
              </Link>
              <Link to="/indicies">
                <Icon icon={chevronRight} />
                INDICES
              </Link>
              <Link to="/forex">
                <Icon icon={chevronRight} />
                FOREX
              </Link>
              <Link to="/energies">
                <Icon icon={chevronRight} />
                ENERGIES
              </Link>
              <Link to="/shares">
                <Icon icon={chevronRight} />
                SHARES
              </Link>
              <Link to="/option">
                <Icon icon={chevronRight} />
                OPTION
              </Link>
              <Link to="/etfs">
                <Icon icon={chevronRight} />
                ETFS
              </Link>
            </div>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => isActive && styles["active"]}
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) => isActive && styles["active"]}
            >
              FAQS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) => isActive && styles["active"]}
            >
              CONTACTS
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/trade"
              className={({ isActive }) => isActive && styles["active"]}
            >
              TRADE
            </NavLink>
          </li> */}
        </ul>
      </div>
      <div
        className={`${styles["navbar-auth"]} ${
          showNavBar ? styles["show"] : ""
        }`}
      >
        <Link to="/login" className={styles["login-link"]}>
          Login
        </Link>
        <Link to="/signup" className={styles["get-started-btn"]}>
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
