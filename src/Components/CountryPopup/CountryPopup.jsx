import { useState, useEffect } from "react";
import styles from "./CountryPopup.module.css";

const CountryPopup = () => {
  const [display, setDisplay] = useState(false);
  const [country, setCountry] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomCountry = getRandomCountry();
      const randomAmount = getRandomAmount();

      setCountry(randomCountry);
      setAmount(randomAmount);
      setDisplay(true);

      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const getRandomCountry = () => {
    const countries = [
      "United States",
      "Canada",
      "United Kingdom",
      "Germany",
      "France",
      "Japan",
      "Australia",
      "Italy",
      "Netherlands",
      "Sweden",
      "Switzerland",
      "Belgium",
      "Norway",
      "Denmark",
      "Finland",
      "Austria",
      "Singapore",
      "South Korea",
      "New Zealand",
      "Ireland",
      "Nigeria",
      "Philippines",
      "China",
      "South Africa",
      "Egypt",
      "Japan",
      "India",
    ];
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  };

  const getRandomAmount = () => {
    // return Math.floor(Math.random() * 1000) + 1;
    return Math.floor(Math.random() * 49001 + 1000);
  };

  return (
    <div className={`${styles["countryDiv"]} ${display && styles["display"]}`}>
      <p>
        Someone from{" "}
        <span
          style={{
            fontSize: "0.9rem",
            fontWeight: "900",
            fontFamily: "Axiforma Bold",
          }}
        >
          {country}
        </span>{" "}
        just earned <br />{" "}
        <span
          style={{
            fontSize: "0.9rem",
            fontWeight: "900",
            color: "#f2d516",
            fontFamily: "Axiforma Bold",
          }}
        >{`$${amount}`}</span>
      </p>
    </div>
  );
};

export default CountryPopup;
