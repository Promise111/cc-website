import { useEffect, useState } from "react";
import styles from "./Withdrawal.module.css";
import Modal from "../../Components/Modal/Modal";
import { ic_info_outline } from "react-icons-kit/md/ic_info_outline";
import { Icon } from "react-icons-kit";
import { getUserData } from "../../utilities/helpers";
import instance from "../../api";

const Withdrawal = () => {
  const userData = getUserData();
  const [asset, setAsset] = useState(null);
  const [balance, setBalance] = useState(null);
  const [paypalEmail, setPayPalEmail] = useState("");
  const [ethAddress, setEthAddress] = useState("");
  const [btcAddress, setBtcAddress] = useState("");
  const [cashAppAddress, setCashAppAddress] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState(1);
  const [show, setShow] = useState(false);
  const [withdrawalPin, setWithdrawalPin] = useState("");
  const [capital, setCapital] = useState(
    userData?.capital ? userData?.capital : 0.0
  );
  const [profit, setProfit] = useState(
    userData?.profits ? userData?.profits : 0.0
  );
  const [processWithdrawal, setProcessWithdrawal] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/user/profile");
        let data = response.data?.data;
        console.log(data);
        setCapital(data?.capital);
        setProfit(data?.profits);
        setPayPalEmail(data?.payPalEmail);
        setCashAppAddress(data?.cashApp);
        setEthAddress(data?.ethAddress);
        setBtcAddress(data?.bitcoinAddress);
        setBankName(data?.bankName);
        setAccountName(data?.accountName);
        setAccountNo(data?.accountNumber);
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
        <h1>Withdrawal</h1>
        <form>
        {!processWithdrawal && (
          <div>
            <label htmlFor="select-balance">Select Balance Type</label>
            <select
              id="select-balance"
              onChange={(e) => {
                return setBalance(e.target.value);
              }}
            >
              <option value="">Select Balance Type</option>
              <option value="capital">Capital Balance (${capital})</option>
              <option value="profit">Profit Balance (${profit})</option>
            </select>
          </div>
        )}
        {!processWithdrawal && (
          <div>
            <label htmlFor="select">Select Withdrawal Method</label>
            <select
              id="select"
              onChange={(e) => {
                // console.log(e.target.value);
                return setAsset(e.target.value);
              }}
            >
              <option value="">Select Asset</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Paypal">Paypal</option>
              <option value="cashapp">CashApp</option>
            </select>
          </div>
        )}
        {asset &&
          asset.toLowerCase() === "paypal" &&
          balance &&
          !processWithdrawal && (
            <div className={`${styles["input-field"]}`}>
              <label htmlFor="paypal">PaypalEmail</label>
              <input
                className={styles["input-field-input"]}
                type="email"
                id="paypal"
                onChange={(e) => setPayPalEmail(e.target.value)}
                value={paypalEmail}
                min={1}
                required={asset.toLowerCase() === "paypal"}
              />
            </div>
          )}
        {asset &&
          asset.toLowerCase() === "eth" &&
          balance &&
          !processWithdrawal && (
            <div className={`${styles["input-field"]}`}>
              <label htmlFor="eth">Ethereum Address</label>
              <input
                className={styles["input-field-input"]}
                type="text"
                id="eth"
                onChange={(e) => setEthAddress(e.target.value)}
                value={ethAddress}
                min={1}
                required={asset.toLowerCase() === "eth"}
              />
            </div>
          )}
        {asset &&
          asset.toLowerCase() === "btc" &&
          balance &&
          !processWithdrawal && (
            <div className={`${styles["input-field"]}`}>
              <label htmlFor="btc">Bitcoin Address</label>
              <input
                className={styles["input-field-input"]}
                type="text"
                id="btc"
                onChange={(e) => setBtcAddress(e.target.value)}
                value={btcAddress}
                min={1}
                required={asset.toLowerCase() === "btc"}
              />
            </div>
          )}
        {asset &&
          asset.toLowerCase() === "cashapp" &&
          balance &&
          !processWithdrawal && (
            <div className={`${styles["input-field"]}`}>
              <label htmlFor="cashapp">Bitcoin Address</label>
              <input
                className={styles["input-field-input"]}
                type="text"
                id="cashapp"
                onChange={(e) => setCashAppAddress(e.target.value)}
                value={cashAppAddress}
                min={1}
                required={asset.toLowerCase() === "cashapp"}
              />
            </div>
          )}
        {asset &&
          asset.toLowerCase() === "bank transfer" &&
          balance &&
          !processWithdrawal && (
            <>
              <div className={`${styles["input-field"]}`}>
                <label htmlFor="accountNumber">Account Number</label>
                <input
                  className={styles["input-field-input"]}
                  type="text"
                  id="accountNumber"
                  onChange={(e) => setAccountNo(e.target.value)}
                  value={accountNo}
                  required={asset.toLowerCase() === "bank transfer"}
                />
              </div>
              <div className={`${styles["input-field"]}`}>
                <label htmlFor="accountName">Account Name</label>
                <input
                  className={styles["input-field-input"]}
                  type="text"
                  id="accountName"
                  onChange={(e) => setAccountName(e.target.value)}
                  value={accountName}
                  required={asset.toLowerCase() === "bank transfer"}
                />
              </div>
              <div className={`${styles["input-field"]}`}>
                <label htmlFor="bankName">Bank Name</label>
                <input
                  className={styles["input-field-input"]}
                  type="text"
                  id="bankName"
                  onChange={(e) => setBankName(e.target.value)}
                  value={bankName}
                  required={asset.toLowerCase() === "bank transfer"}
                />
              </div>
            </>
          )}
        {asset && balance && !processWithdrawal && (
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
        )}

        {processWithdrawal && (
          <>
            <div className={`${styles["input-field"]}`}>
              <label htmlFor="pin">Enter Withdrawal Pin</label>
              <input
                className={styles["input-field-input"]}
                type="text"
                id="pin"
                onChange={(e) => setWithdrawalPin(e.target.value)}
                value={withdrawalPin}
                min={1}
                required={processWithdrawal}
              />
            </div>
            <button
              className={styles["deposit-button"]}
            >
              Submit
            </button>
          </>
        )}
        {asset && balance && !processWithdrawal && (
          <button
            className={styles["deposit-button"]}
            onClick={() => setProcessWithdrawal((prev) => !prev)}
          >
            Process Withdrawal
          </button>
        )}
        </form>
      </div>
    </>
  );
};

export default Withdrawal;
