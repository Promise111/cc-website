import styles from "./Forex.module.css";
import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";

const Forex = () => {
  return (
    <div className={styles["crypto"]}>
      <h1 className={styles["h1"]}>Forex</h1>
      <div>
        <h3>Online Forex Trading</h3>
        <p>
          Foreign Exchange trading, also known as Forex or FX trading, has
          gained enormous popularity in recent years among layman individuals
          due to the growth of online brokers and the technological development
          of online trading platforms. With high liquidity, non-stop opening
          hours 5 days a week, and great opportunities, it is no wonder that the
          forex market is the world’s most traded market with a daily trading
          volume of $5 trillion USD.
        </p>
      </div>
      <div>
        <h3>What is FX Trading?</h3>
        <p>
          When trading Forex, you are buying one currency by using another.
          Therefore, the FX trader is trading currency pairs and not each
          currency individually. Take for example the EURUSD, when buying the
          pair – it means you are buying EUR using (selling) USD. When selling
          the pair – it means you are buying USD using (selling) EUR.
        </p>
        <p>
          Discover all the advantages of trading forex with Morgans Group
          Investment Inc ™
        </p>
        <div className={styles["list"]}>
          <p>
            <Icon icon={arrowRight} /> Start trading with as little as $500
          </p>
          <p>
            <Icon icon={arrowRight} /> Trade with confidence – Morgans Group
            Investment Inc ™ is an internationally regulated broker.
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

export default Forex;
