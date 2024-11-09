import { useEffect, useState } from "react";
import styles from "./Transfer.module.css";
import Modal from "../../Components/Modal/Modal";
import { ic_info_outline } from "react-icons-kit/md/ic_info_outline";
import { Icon } from "react-icons-kit";
import { getUserData } from "../../utilities/helpers";
import instance from "../../api";

const Transfer = () => {
  const userData = getUserData();
  const [asset, setAsset] = useState(null);
  const [amount, setAmount] = useState(1);
  const [show, setShow] = useState(false);
  const [capital, setCapital] = useState(
    userData?.capital ? userData?.capital : 0.0
  );
  const [profit, setProfit] = useState(
    userData?.profits ? userData?.profits : 0.0
  );
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/user/profile");
        let data = response.data?.data;
        console.log(data);
        setCapital(data?.capital);
        setProfit(data?.profits);
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
  return (
    <>
      <Modal onClose={onClose} show={show}>
        <div className={styles["modal-wrapper"]}>
          <div>
            <Icon icon={ic_info_outline} size={50} />
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
                if ((amount, asset)) setShow(false);
              }}
            >
              Ok
            </button>
          </div>
        </div>
      </Modal>
      <div className={styles.deposit}>
        <h1>Deposit</h1>
        <div>
          <label htmlFor="select">Select Assets</label>
          <select id="select" onChange={(e) => setAsset(e.target.value)}>
            <option value="">Select Asset</option>
            <option value="profit">
              Profit to capital (${profit} - ${profit})
            </option>
            <option value="capital">
              Bonus to capital (${capital} - ${capital})
            </option>
          </select>
        </div>
        <div className={`${styles["input-field"]}`}>
          <label htmlFor="amount">Amount</label>
          <input
            className={styles["input-field-input"]}
            type="number"
            id="amount"
            onChange={(e) => setAmount(+e.target.value)}
            value={amount}
            min={1}
          />
        </div>
        <button
          className={styles["deposit-button"]}
          onClick={() => {
            if ((amount, asset)) setShow(true);
          }}
        >
          Transfer
        </button>
      </div>
    </>
  );
};

export default Transfer;
