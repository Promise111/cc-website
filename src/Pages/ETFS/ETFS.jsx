import styles from "./ETFS.module.css";
import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";

const ETFS = () => {
  return (
    <div className={styles["crypto"]}>
      <h1 className={styles["h1"]}>Etfs</h1>
      <div>
        <h3>Etfs</h3>
        <p>
          An exchange-traded fund (ETF) is a financial instrument comprised of
          several assets grouped together to serve as one tradable asset. Each
          fund follows a certain market strategy or index and is designed to
          either suit the hedging needs of a specific financial institution, or
          to be a low-risk option for investors. ETFs are created by financial
          bodies using a team of experts who tailor each fund to meet its
          specific goal. The assets within the fund are owned by its creators,
          and just like stocks, dividends can be distributed to investors from
          time to time. ETFs are usually considered to be long-term investment
          tools, as they are geared towards low-risk, and are designed to yield
          steady profits over time.
        </p>
        <p>Some of our popular ETFs include:</p>
        <div className={styles["list"]}>
          <p>
            <Icon icon={arrowRight} /> Proshares Ultra S&P 500 (SSO)
          </p>
          <p>
            <Icon icon={arrowRight} /> SPDR Gold (GLD)
          </p>
          <p>
            <Icon icon={arrowRight} /> Emerging Markets Index (EEM)
          </p>
        </div>
      </div>
      <div>
        <h3>Professional Customer Support</h3>
        <p>
          Capital Coin Investments ™ customers enjoy high standard customer
          support around the clock via email and chat. Our representatives will
          gladly answer all of your questions.
        </p>
      </div>
    </div>
  );
};

export default ETFS;
