import styles from "./Energies.module.css";
import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";

const Energies = () => {
  return (
    <div className={styles["crypto"]}>
      <h1 className={styles["h1"]}>Commodities</h1>
      <div>
        <h3>Commodities</h3>
        <p>
          Trading commodities is one of the most ancient trading practices in
          the world, dating back thousands of years. Commodities are unique,
          given that they have a real-world physical representation. Whether
          it’s an energy source, such as oil, or a precious metal like gold or
          platinum, commodities exist in the real world and therefore are also
          affected by real-world events. For example, if oil reservoirs are in
          surplus, it is likely that prices will drop accordingly. Additionally,
          some commodities are considered safe-haven assets, meaning they can
          add stability to a portfolio which consists of highly-volatile assets.
          For example, many foreign currency traders turn to gold futures when
          the market becomes too volatile, as gold prices are more stable
          overall, while still relating to the foreign-exchange market.
        </p>
        <p>Some of our popular Commodities include:</p>
        <div className={styles["list"]}>
          <p>
            <Icon icon={arrowRight} /> Oil
          </p>
          <p>
            <Icon icon={arrowRight} /> Gold
          </p>
          <p>
            <Icon icon={arrowRight} /> Gas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Energies;
