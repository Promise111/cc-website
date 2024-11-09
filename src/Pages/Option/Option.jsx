import styles from "./Option.module.css";
import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";

const Option = () => {
  return (
    <div className={styles["crypto"]}>
      <h1 className={styles["h1"]}>Option</h1>
      <div>
        <h3>Options</h3>
        <p>
          These are contracts that gives the owner the right to buy or sell an
          asset at a fixed price, called the strike price, for a specific period
          of time. The “asset” may be several kinds of underlying securities.
          Some of the most common ones are stocks, indexes, or ETFs. That period
          of time could be as short as a day or as long as a couple of years,
          depending on the option. The seller of the option contract receives
          the payment from the buyer and then takes on an obligation to take the
          opposite side of the trade if the owner chooses to buy or sell the
          asset. Keep in mind, we don’t charge a fee for closing options
          positions that are 5¢ or below..
        </p>
        <p>
          Discover all the advantages of trading with Capital Coin Investments ™:
        </p>
        <div className={styles["list"]}>
          <p>
            <Icon icon={arrowRight} /> Start trading with as little as $500
          </p>
          <p>
            <Icon icon={arrowRight} /> Benefit from a wide range of today’s top
            traded cryptocurrencies.
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

export default Option;
