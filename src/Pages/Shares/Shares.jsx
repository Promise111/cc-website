import styles from "./Shares.module.css";
import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";

const Shares = () => {
  return (
    <div className={styles["crypto"]}>
      <h1 className={styles["h1"]}>Shares</h1>
      <div>
        <h3>Trade Popular Shares</h3>
        <p>
          Trade shares like Lloyds, Apple and Tesla Motors. Take advantage of
          falling or rising markets by opening Sell or Buy positions.
        </p>
      </div>
      <div>
        <h3>
          Trade Cannabis Index and Share CFDs at Capital Coin Investments ™
        </h3>
        <p>
          Trade smokin’-hot medical marijuana index and stocks: Aphria, Aurora
          Cannabis, Canopy Growth, Tilray and more with our leading CFD trading
          platform.
        </p>
        <p>
          Discover all the advantages of trading shares with Capital Coin
          Investments ™:
        </p>
        <div className={styles["list"]}>
          <p>
            <Icon icon={arrowRight} /> Start trading with as little as $250
          </p>
          <p>
            <Icon icon={arrowRight} /> Trade with confidence – Capital Coin
            Investments ™ is an internationally regulated broker.
          </p>
          <p>
            <Icon icon={arrowRight} /> No risk of wallet hacking or theft
          </p>
          <p>
            <Icon icon={arrowRight} /> Best in class customer service – 24/5
            multi-lingual live support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shares;
