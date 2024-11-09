import styles from "./Indicies.module.css";
import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";

const Indicies = () => {
  return (
    <div className={styles["crypto"]}>
      <h1 className={styles["h1"]}>Indicies</h1>
      <div>
        <h3>Indicies</h3>
        <p>
          Every major stock market around the world has an index, or several
          indices, which reflect the status of a specific segment of that
          market. Indices are considered more stable than individual stocks
          since they contain many different assets, which tend to balance each
          other out. For example, the NASDAQ index on Wall Street aggregates
          major companies from the tech sector, such as Apple and Google, and
          since it contains rival companies, if one falls, sometimes its
          competitor will rise, keeping the index’s overall balance. Since
          companies vary in size and market cap, each stock has a different
          effect on the index, meaning some carry more weight. For example,
          since Apple has more weight than smaller companies within the NASDAQ
          index, if Apple’s stock rises significantly, it could lift the entire
          index’s value.
        </p>
        <p>Some of our popular indices include:</p>
        <div className={styles["list"]}>
          <p>
            <Icon icon={arrowRight} /> Nasdaq (NSDQ100)
          </p>
          <p>
            <Icon icon={arrowRight} /> DAX Index (GER30)
          </p>
          <p>
            <Icon icon={arrowRight} /> Dow Jones (DJ30)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Indicies;
