import styles from "./Crypto.module.css";
import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";

const Crypto = () => {
  return (
    <div className={styles["crypto"]}>
      <h1 className={styles["h1"]}>Cryptocurrencies</h1>
      <div>
        <h3>What is a Cryptocurrency?</h3>
        <p>
          Cryptocurrencies (Crypto) are virtual currencies that typically use a
          decentralised network to carry out secure financial transactions. With
          Coin Capital Investement ™ trading platform you can trade Crypto –
          such as Bitcoin, Ripple XRP, Ethereum and more.
        </p>
      </div>
      <div>
        <h3>Why Trade Cryptocurrencies with Coin Capital Investment ™</h3>
        <p>
          We offers all traders the opportunity to trade a wide range of
          top-ranked digital coins 24/7. Due to the massive popularity of
          cryptocurrencies over the past couple of years, they have become a
          conventional and popular asset. The main purpose of this new
          technology is to allow people to buy, trade and invest without having
          to rely on banks or any other financial institutions.
        </p>
        <p>
          Discover all the advantages of trading cryptocurrencies with Coin Capital Investment ™
        </p>
        <div className={styles["list"]}>
          <p>
            <Icon icon={arrowRight} /> Start trading with as little as $500
          </p>
          <p>
            <Icon icon={arrowRight} /> Benefit from a wide range of today’s top
            traded cryptocurrencies
          </p>
          <p>
            <Icon icon={arrowRight} /> No risk of wallet hacking or theft
          </p>
          <p>
            <Icon icon={arrowRight} /> Around-the-clock service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
