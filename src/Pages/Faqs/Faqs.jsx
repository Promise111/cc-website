import { useState } from "react";
import styles from "./Faqs.module.css";
import { Icon } from "react-icons-kit";
import { ic_add_circle_outline_outline } from "react-icons-kit/md/ic_add_circle_outline_outline";

const Faqs = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);
  const selectFaq = (selectedFaqValue) => {
    if (selectedFaqValue === selectedFaq) {
      setSelectedFaq(() => null);
      return;
    }
    setSelectedFaq(() => selectedFaqValue);
  };
  return (
    <div className={styles["Faqs"]}>
      <header>
        <h1>FAQ Coin Capital Investments ™</h1>
      </header>
      <section>
        <h2>Frequently Asked Questions</h2>
        <p>
          Many of our customers have specific questions and concerns about our
          Professional trading services. Here are just a few of the questions
          asked and the answers to them.
        </p>
        <h3>General Questions</h3>
        <div className={styles["faq-wrapper"]}>
          <div
            className={`${styles["faq"]} ${
              selectedFaq === 1 && styles["show"]
            }`}
            onClick={() => selectFaq(1)}
          >
            <div className={styles["faq-head"]}>
              <Icon icon={ic_add_circle_outline_outline} size="50" />
              <p>What are the risks and guarantees for your customers?</p>
            </div>
            <div className={styles["faq-body"]}>
              <p>
                There are risks in Trading all assets, that is exactly why there
                is Capital Coin Investment ™ , all trade risk are borne by us,
                if there is any loss that stalls the trading,the Investor will
                be Refunded his Capital.
              </p>
            </div>
          </div>
          <div
            className={`${styles["faq"]} ${
              selectedFaq === 2 && styles["show"]
            }`}
            onClick={() => selectFaq(2)}
          >
            <div className={styles["faq-head"]}>
              <Icon icon={ic_add_circle_outline_outline} size="50" />
              <p>
                What is the minimum and the maximum amounts that I can invest?
              </p>
            </div>
            <div className={styles["faq-body"]}>
              <p>
                The minimum deposit is only 500 USD, the maximum deposit is not
                limited.
              </p>
            </div>
          </div>
          <div
            className={`${styles["faq"]} ${
              selectedFaq === 3 && styles["show"]
            }`}
            onClick={() => selectFaq(3)}
          >
            <div className={styles["faq-head"]}>
              <Icon icon={ic_add_circle_outline_outline} size="50" />
              <p>What is the schedule for my profit accrual?</p>
            </div>
            <div className={styles["faq-body"]}>
              <p>
                Profit is returned to investments at every 24 hours from their
                time of activation.
              </p>
            </div>
          </div>
          <div
            className={`${styles["faq"]} ${
              selectedFaq === 4 && styles["show"]
            }`}
            onClick={() => selectFaq(4)}
          >
            <div className={styles["faq-head"]}>
              <Icon icon={ic_add_circle_outline_outline} size="50" />
              <p>What are the payment systems you operates with?</p>
            </div>
            <div className={styles["faq-body"]}>
              <p>
                Deposits and Withdrawals to and from Capital Coin Investment ™
                are processed through Bitcoin & Ethereum.
              </p>
            </div>
          </div>
        </div>
        <h3>Deposits Questions</h3>
        <div className={styles["faq-wrapper"]}>
          <div
            className={`${styles["faq"]} ${
              selectedFaq === 5 && styles["show"]
            }`}
            onClick={() => selectFaq(5)}
          >
            <div className={styles["faq-head"]}>
              <Icon icon={ic_add_circle_outline_outline} size="50" />
              <p>Are my funds at risk in case of Insolvency/Bankruptcy?</p>
            </div>
            <div className={styles["faq-body"]}>
              <p>
                No, we have a Backup account holding funds in Relation to the
                amount of invested funds, though we are confident of a foul
                proof trading technique ,we will not claim to be perfect and
                that is why we offer an assurance to return 100% of investors
                Capital if there is any issue.
              </p>
            </div>
          </div>
          <div
            className={`${styles["faq"]} ${
              selectedFaq === 6 && styles["show"]
            }`}
            onClick={() => selectFaq(6)}
          >
            <div className={styles["faq-head"]}>
              <Icon icon={ic_add_circle_outline_outline} size="50" />
              <p>How to make a deposit?</p>
            </div>
            <div className={styles["faq-body"]}>
              <p>
                Read the terms of the proposed investment strategy and make a
                deposit to your desired plan using the deposit section in your
                account. Send the Indicated amount from any Bitcoin wallet or
                Ethereum Wallet to the wallet address generated for your
                account. The deposit will be credited as soon as the funds are
                confirmed.
              </p>
            </div>
          </div>
        </div>
        <h3>Withdrawal Questions</h3>
        <div className={styles["faq-wrapper"]}>
          <div
            className={`${styles["faq"]} ${
              selectedFaq === 7 && styles["show"]
            }`}
            onClick={() => selectFaq(7)}
          >
            <div className={styles["faq-head"]}>
              <Icon icon={ic_add_circle_outline_outline} size="50" />
              <p>
                When can I withdraw my profit? When can I withdraw my profit?
              </p>
            </div>
            <div className={styles["faq-body"]}>
              <p>
                You can withdraw your profit from all of our investment plans
                once the trading period of such package elapses. You can also
                accumulate your profit to your desired amount till withdrawal.
                Always ensure to be in contact with your account manager. Also,
                our support is always available if assistance or enquiries
                needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
