import { useEffect, useState } from "react";
import styles from "./DashboardNavigation.module.css";
import { Link } from "react-router-dom";
import Avatar from "../../assets/images/slider/avatar.png";
import Dollar from "../../assets/images/slider/dollar-sign.svg";
import PropTypes from "prop-types";

const DashboardNavigation = ({ leftSideBarToggle }) => {
  const [scrolling, setScrolling] = useState(false);
  const [userData, setUserData] = useState(null);
  // const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
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
    leftSideBarToggle();
  };

  return (
    <nav className={`${styles["navbar"]} ${scrolling && styles["nav-shadow"]}`}>
      <div className={styles["navbar-logo"]}>
        <button onClick={toggleNav}>☰</button>
        <Link to="/dashboard">
          <img
            src="/logo/default-monochrome-white.svg"
            className={styles["nav-bar_logo"]}
            alt="CapitalCoinInvestment"
          />
        </Link>
      </div>
      <div className={`${styles["navbar-auth"]}`}>
        <div className={styles.balance}>
          <button className={styles["trade"]}>Trade</button>
          <img src={Dollar} alt="dollar-sign" />
          <div>
            <p>Real Account</p>
            <p>0.00 USD</p>
            <p>BTC</p>
          </div>
        </div>
        <div className={styles.profile}>
          <img src={Avatar} alt="avatar" />
          <div>
            {userData?.isVerified ? (
              <p className={styles.verified}>verified</p>
            ) : (
              <p className={styles.unverified}>not-verified</p>
            )}
            <p>{userData?.userName}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

DashboardNavigation.propTypes = {
  leftSideBarToggle: PropTypes.func,
};

export default DashboardNavigation;
