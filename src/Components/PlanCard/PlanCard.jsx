import { useState } from "react";
import styles from "./PlanCard.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { user } from "react-icons-kit/feather/user";
import { Icon } from "react-icons-kit";

const PlanCard = ({ planName, percentage, time, min, max, rangeValue }) => {
  const [range, setRange] = useState(rangeValue);
  const handleRangeChange = (e) => {
    setRange(e.target.value);
  };
  return (
    <div className={styles["card"]}>
      <header>
        <h2>{planName}</h2>
        <p>{percentage}% Daily</p>
      </header>
      <section>
        <p className={styles.daily}>
          <span>DAILY</span> RETURN
        </p>
        <p className={styles.percentage}>
          Compounding <span>Total of </span>
          {percentage}%
        </p>
        <p className={styles.time}>
          <span>HASHING FOR</span> {time}
        </p>
        <div className={styles["description"]}>
          <div className={styles["minmax"]}>
            <h5>Minimum</h5>
            <p>$ {min}</p>
          </div>
          <div className={styles["minmax"]}>
            <h5>Maximum</h5>
            <p>$ {max}</p>
          </div>
        </div>
        <div className={styles["range"]}>
          <p>${range}</p>
          <input
            type="range"
            min={min}
            max={max}
            value={range}
            onChange={handleRangeChange}
          />
        </div>
        <Link className={styles["register"]} to={`/signup?plan=${planName}`}>
          <button>
            Sign up <Icon icon={user} />
          </button>
        </Link>
      </section>
    </div>
  );
};

PlanCard.propTypes = {
  planName: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  time: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  rangeValue: PropTypes.number.isRequired,
};

export default PlanCard;
