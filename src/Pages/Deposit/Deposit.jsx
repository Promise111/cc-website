import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Deposit.module.css";
import Modal from "../../Components/Modal/Modal";
import instance from "../../api";
import { Icon } from "react-icons-kit";
import { ic_info_outline } from "react-icons-kit/md/ic_info_outline";

const Deposit = () => {
  const navigate = useNavigate();
  const [asset, setAsset] = useState(null);
  const [amount, setAmount] = useState(1);
  const [show, setShow] = useState(false);
  const [wallets, setWallets] = useState([]);
  const [uniqueId, setUniqueId] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/admin/wallet");
        let data = response.data?.data;
        setWallets(data);
      } catch (error) {
        console.log(error);
        setError(error.response.data.message || "something went wrong");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/user/uniqueId");
        let data = response.data?.data;
        setUniqueId(data);
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
  let selectedAsset = asset && wallets.find((wallet) => wallet?.name === asset);
  const createTransaction = async () => {
    try {
      let requestData = {
        transactionType: "deposit",
        uniqueId,
        transactionAmount: selectedAsset?.dollarAmount * amount,
      };
      console.log("requestData", requestData);
      let response = await instance.post("/user/transaction", requestData);
      console.log("deposit response", response);
      navigate("/dashboard/history");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message || "Something went wrong");
    }
  };
  return (
    <>
      <Modal onClose={onClose} show={show}>
        <div className={styles["modal-confirmation"]}>Payment Confirmation</div>
        <div className={styles["modal-confirmation-body"]}>
          <p>Your Order no. {uniqueId} has been placed successfully</p>
          <p>
            Please send {amount} {asset} (${selectedAsset?.dollarAmount}) to the
            address below.The balance will appear in your account only after
            transaction gets confirmed by our team.
          </p>
          <p className={styles["payment-text"]}>
            Payment to the following {asset} Wallet Address
          </p>
          <p className={styles["amount-text"]}>
            Send {amount} {asset} (${selectedAsset?.dollarAmount * amount})
          </p>
          <p className={styles["wallet-address"]}>
            {/* bc1qd06d9s092lq60zjn0vfxcuxprdaamupz7m6e79 */}
            {selectedAsset?.walletAddress}
          </p>
          <div className={styles["deposit-buttons"]}>
            <button onClick={createTransaction}>Confirm</button>
            <button onClick={() => setShow(false)}>Cancel</button>
          </div>

          <p className={styles["text1"]}>
            <Icon icon={ic_info_outline} />
            Kindly ensure you send exact amount as added in your deposit
          </p>
          <p className={`${styles["error-text"]} ${styles["text"]}`}>
            <Icon icon={ic_info_outline} />
            Kindly ensure you send exact amount as added in your deposit
          </p>
        </div>
      </Modal>
      <div className={styles.deposit}>
        <h1>Deposit</h1>
        <div>
          <label htmlFor="select">Select Assets</label>
          <select id="select" onChange={(e) => setAsset(e.target.value)}>
            <option value="">Select Asset</option>
            {wallets.map((wallet) => (
              <option key={wallet?.name} value={wallet?.name}>
                {wallet?.name}
              </option>
            ))}
          </select>
        </div>
        <div
          className={`${styles["input-field"]} ${asset && styles["display"]}`}
        >
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
        <p>
          *Deposit will appear in your account after payment is successfully
          made and approved by our team.
        </p>
        <button
          className={styles["deposit-button"]}
          onClick={() => {
            if ((amount, asset)) setShow(true);
          }}
        >
          Make Payment
        </button>
      </div>
    </>
  );
};

export default Deposit;
