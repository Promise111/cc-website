import styles from "./Home.module.css";
import TradeTable from "../../Components/TradeTable/TradeTable";
import TradingOdometer from "../../assets/images/slider/slider.png";
import { Link } from "react-router-dom";
import PlanCard from "../../Components/PlanCard/PlanCard";
import ETH from "../../assets/images/slider/ethereum.png";
import BTC from "../../assets/images/slider/bitcoin.png";
import TETHER from "../../assets/images/slider/tether.png";
import Testimony from "../../Components/Testimony/Testimony";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <div className={styles["hero"]}>
        <div className={styles["left"]}>
          <h1>RELIABLE, SIMPLE AND INNOVATIVE</h1>
          <p>
            Trade Cryptocurrencies, Stock indexes, Commodities and Forex with a
            single Forex-based platform
          </p>
          <Link to="/signup">
            <button>Register</button>
          </Link>
        </div>
        <div className={styles["left"]}>
          <img src={TradingOdometer} />
        </div>
      </div>
      <TradeTable />
      <div className={styles["how-it-works"]}>
        <h3>How it works</h3>
        <div className={styles["how-wrapper"]}>
          <div className={styles["description"]}>
            <h4>Deposit</h4>
            <p>
              Open real account and add funds. We work with more than 20 payment
              systems.
            </p>
          </div>
          <div className={styles["description"]}>
            <h4>Trade</h4>
            <p>
              Trade any of 100 assets and stocks. Use technical analysis and
              trade the news
            </p>
          </div>
          <div className={styles["description"]}>
            <h4>Withdraw</h4>
            <p>
              Get funds easily to your bank card or e-wallet. We take no
              commission.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["features"]}>
        <h4>Features</h4>
        <p>
          We provide fastest trading using modern technologies. No delays in
          order executions and most accurate quotes. Our trading platform is
          available around the clock and on weekends. Morgans Group Investment
          Inc customer service is available 24/7. We are continuously adding new
          financial instruments.
        </p>
      </div>
      <div className={styles["cards-wrapper"]}>
        <h4>Our Trading Plans</h4>
        <div className={styles["cards"]}>
          <PlanCard
            {...{
              planName: "PLAN A",
              percentage: 5,
              time: "24 Hours",
              min: 100,
              max: 5000,
              rangeValue: 800,
            }}
          />
          <PlanCard
            {...{
              planName: "PLAN B",
              percentage: 15,
              time: "48 Hours",
              min: 6000,
              max: 30000,
              rangeValue: 7500,
            }}
          />
          <PlanCard
            {...{
              planName: "PLAN C",
              percentage: 25,
              time: "120 Hours",
              min: 31000,
              max: 50000,
              rangeValue: 30000,
            }}
          />
          <PlanCard
            {...{
              planName: "PLAN D",
              percentage: 40,
              time: "7 Days",
              min: 51000,
              max: 400000,
              rangeValue: 75000,
            }}
          />
        </div>
      </div>
      <div className={styles["we-accept"]}>
        <h2>We Accept</h2>
        <p>Payment Methods for Deposits and Withdrawals</p>
        <div className={styles["crypto"]}>
          <img src={ETH} alt="ethereum" />
          <img src={BTC} alt="bitcoin" />
          <img src={TETHER} alt="tether" />
        </div>
      </div>
      <div className={styles["testimony"]}>
        <h2>TESTIMONIES</h2>
        <p>Happy Investors sharing their testimonies</p>
        <Testimony />
      </div>
    </div>
  );
};

export default Home;
