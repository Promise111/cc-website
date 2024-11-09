import { useEffect, useState } from "react";
import styles from "./Signal.module.css";
import Modal from "../../Components/Modal/Modal";
import { ic_check_circle } from "react-icons-kit/md/ic_check_circle";
import { ic_info_outline } from "react-icons-kit/md/ic_info_outline";
import { Icon } from "react-icons-kit";
import { getUserData } from "../../utilities/helpers";
import instance from "../../api";

const Signal = () => {
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
  const planArray = [
    {
      name: "1 Month Plan",
      listItem: [
        "Direct Trading Signals from the Brokerage.",
        "24/7 access to trading.",
        "Increased asset leverage: up-to 70x.",
      ],
      prevPrice: "",
      price: "$1,500",
    },
    {
      name: "2 Month Plan",
      listItem: [
        "Direct Trading Signals from the Brokerage.",
        "24/7 access to trading.",
        "Exclusive Account manager features.",
        "Daily Market Reviews and Financial research.",
        "Increased asset leverage: up-to 70x.",
      ],
      prevPrice: "",
      price: "$2,000",
    },
    {
      name: "3 Month Plan",
      listItem: [
        "Direct Trading Signals from the Brokerage.",
        "24/7 access to trading.",
        "Exclusive Account manager features.",
        "Daily Market Reviews and Financial research.",
        "Priority Futures Market trading.",
        "Increased asset leverage: up-to 70x.",
      ],
      prevPrice: "$3,500",
      price: "$1,500",
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
        <h1>TRADING SIGNAL PLANS</h1>
        <section className={styles["packages-section"]}>
          {planArray.map((plan) => (
            <div key={plan.name} className={styles["package"]}>
              <h2>{plan.name}</h2>
              <div className={styles["items"]}>
                {plan.listItem.map((item) => (
                  <p key={item} className={styles["item"]}>
                    <Icon icon={ic_check_circle} /> {item}
                  </p>
                ))}
              </div>
              <h3>
                Price:{" "}
                <span className={styles["prevPlan"]}>{plan.prevPrice}</span>
                {plan.price}
              </h3>
              <button onClick={() => handlePackageClick(plan.name)}>
                BUY PLAN
              </button>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Signal;
