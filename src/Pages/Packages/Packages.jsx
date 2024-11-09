import { useEffect, useState } from "react";
import styles from "./Packages.module.css";
import Modal from "../../Components/Modal/Modal";
import { ic_check_circle } from "react-icons-kit/md/ic_check_circle";
import { ic_info_outline } from "react-icons-kit/md/ic_info_outline";
import { Icon } from "react-icons-kit";
import { getUserData } from "../../utilities/helpers";
import instance from "../../api";

const Packages = () => {
  const userData = getUserData();
  const [show, setShow] = useState(false);
  const [balance, setBalance] = useState(userData.accumulatingBalance);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/user/profile");
        let data = response.data?.data;
        let resBalance = data?.accumulatingBalance;
        // console.log(resBalance);
        setBalance(resBalance);
      } catch (error) {
        console.log(error);
        setError(error.response.data.message || "something went wrong");
      }
    };

    fetchData();
  }, []);

  const onClose = () => {
    setShow(false);
  };
  // const packagesArray = [
  //   {
  //     name: "Silver",
  //     range: "$1000 - 4999",
  //     btcAmount: "0.02320475 BTC",
  //     interest: "Weekly Interest: 30%",
  //     investment: "Investment Sum: $1000",
  //     commission: "Trading/Withdrawal Commission: 10%",
  //     referral: "Referral Bonus: 5%",
  //   },
  //   {
  //     name: "Gold",
  //     range: "$5000 - $14999",
  //     btcAmount: "0.11602376 BTC",
  //     interest: "Weekly Interest: 40%",
  //     investment: "Investment Sum: $5000",
  //     commission: "Trading/Withdrawal Commission: 10%",
  //     referral: "Referral Bonus: 5%",
  //   },
  //   {
  //     name: "Diamond",
  //     range: "$15000 - $49999",
  //     btcAmount: "0.34807128 BTC",
  //     interest: "Weekly Interest: 40%",
  //     investment: "Investment Sum: $15000",
  //     commission: "Trading/Withdrawal Commission: 10%",
  //     referral: "Referral Bonus: 5%",
  //   },
  //   {
  //     name: "Elite",
  //     range: "$50000 - $100000",
  //     btcAmount: "1.1602376 BTC",
  //     interest: "Weekly Interest: 45%",
  //     investment: "Investment Sum: $50000",
  //     commission: "Trading/Withdrawal Commission: 10%",
  //     referral: "Referral Bonus: 5%",
  //   },
  //   {
  //     name: "Exclusive",
  //     range: "$100000 - $10000000",
  //     btcAmount: "2.3204752 BTC",
  //     interest: "Weekly Interest: 50%",
  //     investment: "Investment Sum: $100000",
  //     commission: "Trading/Withdrawal Commission: 10%",
  //     referral: "Referral Bonus: 5%",
  //   },
  // ];
  const packagesArray = [
    {
      name: "Silver",
      range: "$3000 - $10000",
      btcAmount: "0.04569 BTC",
      interest: "Weekly Interest: 30%",
      investment: "Investment Sum: $1000",
      commission: "Trading/Withdrawal Commission: 10%",
      referral: "Referral Bonus: 5%",
    },
    {
      name: "Gold",
      range: "$10000 - $25000",
      btcAmount: "0.15233 BTC",
      interest: "Weekly Interest: 40%",
      investment: "Investment Sum: $5000",
      commission: "Trading/Withdrawal Commission: 10%",
      referral: "Referral Bonus: 5%",
    },
    {
      name: "Diamond",
      range: "$25000 - $50000",
      btcAmount: "0.38081 BTC",
      interest: "Weekly Interest: 40%",
      investment: "Investment Sum: $15000",
      commission: "Trading/Withdrawal Commission: 10%",
      referral: "Referral Bonus: 5%",
    },
    {
      name: "Elite",
      range: "$50000 - $100000",
      btcAmount: "1.1602376 BTC",
      interest: "Weekly Interest: 45%",
      investment: "Investment Sum: $50000",
      commission: "Trading/Withdrawal Commission: 10%",
      referral: "Referral Bonus: 5%",
    },
    {
      name: "Exclusive",
      range: "$100000 - $10000000",
      btcAmount: "2.3204752 BTC",
      interest: "Weekly Interest: 50%",
      investment: "Investment Sum: $100000",
      commission: "Trading/Withdrawal Commission: 10%",
      referral: "Referral Bonus: 5%",
    },
  ];
  const handlePackageClick = (packageOfChoice) => {
    console.log(packageOfChoice);
    if (balance <= 0) {
      setShow(true);
    }
  };
  console.log(error);

  return (
    <>
      <Modal onClose={onClose} show={show}>
        {balance <= 0 && (
          <>
            <div className={styles["modal-wrapper"]}>
              <div>
                <Icon icon={ic_info_outline} size={100} />
              </div>
              <div className={styles["modal-error"]}>
                <h1>ERROR!</h1>
              </div>
              <div>
                <p>Insufficient Funds</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Ok
                </button>
              </div>
            </div>
          </>
        )}
      </Modal>
      <div className={styles["packages"]}>
        <h1>Loyalty Level Upgrade</h1>
        <section className={styles["packages-section"]}>
          {packagesArray.map((packag) => (
            <div key={packag.name} className={styles["package"]}>
              <h2>{packag.name}</h2>
              <h4>{packag.range}</h4>
              <p>
                <Icon icon={ic_check_circle} />
                {packag.btcAmount}
              </p>
              <p>
                <Icon icon={ic_check_circle} />
                {packag.interest}
              </p>
              <p>
                <Icon icon={ic_check_circle} />
                {packag.investment}
              </p>
              <p>
                <Icon icon={ic_check_circle} />
                {packag.commission}
              </p>
              <p>
                <Icon icon={ic_check_circle} />
                {packag.referral}
              </p>
              <button onClick={() => handlePackageClick(packag.name)}>
                Choose this plan
              </button>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Packages;
