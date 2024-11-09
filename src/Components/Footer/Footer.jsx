import { Link } from "react-router-dom";
import {
  FooterGoBackUpIcon,
} from "../../assets/icons";
import styles from "./Footer.module.css";
import SSL from "../../assets/images/slider/ssl.png";
import { mapPin } from "react-icons-kit/feather/mapPin";
import { mail } from "react-icons-kit/feather/mail";
import { phone } from "react-icons-kit/feather/phone";
import { Icon } from "react-icons-kit";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <section className={styles["top"]}>
        <div className={styles["logos"]}>
          <img
            src="/logo/default-monochrome-white.svg"
            alt="capitalCoinInvestments"
          />
          <img src={SSL} alt="capitalCoinInvestments" />
        </div>
        <div className={styles["top-bottom"]}>
          <section className={styles["top-section_1"]}>
            Are you looking for a stable, reliable, guaranteed weekly income?
            Capital Coin Investments ™ offers a range of options to make the
            most off your investment. Get involved to discover the power of
            trading.
          </section>
          <section className={styles["top-section_2"]}>
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Sign Up</Link>
              </li>
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>FAQs</Link>
              </li>
              <li>
                <Link>Trade</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link>Cryptos</Link>
              </li>
              <li>
                <Link>Indices</Link>
              </li>
              <li>
                <Link>Forex</Link>
              </li>
              <li>
                <Link>Energies</Link>
              </li>
              <li>
                <Link>Shares</Link>
              </li>
            </ul>
            <p className={styles["address"]}>
              <Icon icon={mapPin} /> 1585 BROADWAY NEW YORK, NY 10036 .
            </p>
          </section>
          <section className={styles["top-section_3"]}>
            Capital Coin Investments ™ is totally different from its competitors
            trying to achieve something special starting with the website
            design, trading platform, and extremely functional.
          </section>
        </div>
      </section>
      <section className={styles["bottom"]}>
        <div className={styles["rights"]}>
          &copy; {new Date().getFullYear()} Capital Coin Investments. All rights
          reserved.
        </div>
        <div className={styles["links2"]}>
          <a href="mailto:info@capitalcoininvestments.com" target="_blank" rel="noreferrer">
            <Icon icon={mail} /> info@capitalcoininvestments.com
          </a>
          {/* <a href="tel:+2348123456789" target="_blank" rel="noreferrer">
            <Icon icon={phone} /> 08123456789
          </a> */}
        </div>
        <div onClick={scrollToTop} className={styles["back-up"]}>
          <FooterGoBackUpIcon />
          Go back to top
        </div>
      </section>
    </footer>
  );
};

export default Footer;
