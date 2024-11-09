import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { Icon } from "react-icons-kit";
import { ic_account_balance_wallet } from "react-icons-kit/md/ic_account_balance_wallet";
import { ic_compare_arrows } from "react-icons-kit/md/ic_compare_arrows";
import { ic_card_giftcard } from "react-icons-kit/md/ic_card_giftcard";
import { ic_arrow_drop_down } from "react-icons-kit/md/ic_arrow_drop_down";
import { ic_arrow_drop_up } from "react-icons-kit/md/ic_arrow_drop_up";
import instance from "../../api";
import { getUserData } from "../../utilities/helpers";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const userData = getUserData();
  const [userName, setUserName] = useState(
    userData?.firstName && userData?.lastName
      ? `${userData?.firstName} ${userData?.lastName}`
      : userData?.userName
  );
  const [capital, setCapital] = useState(
    userData?.capital ? userData?.capital : 0.0
  );
  const [accumulatingBalance, setAccumulatingBalance] = useState(
    userData?.accumulatingBalance ? userData?.accumulatingBalance : 0.0
  );
  const [profit, setProfit] = useState(
    userData?.profits ? userData?.profits : 0.0
  );
  const [totalWon, setTotalWon] = useState(0.0);
  const [totalLoss, setTotalLoss] = useState(0.0);
  const [error, setError] = useState(null);
  if (userData.role === "admin") {
    localStorage.removeItem("user");
    navigate("/login");
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/user/profile");
        let data = response.data?.data;
        console.log(data);
        setUserName(
          data?.firstName && data?.lastName
            ? `${data?.firstName} ${data?.lastName}`
            : data?.userName
        );
        setAccumulatingBalance(data?.accumulatingBalance);
        setCapital(data?.capital);
        setProfit(data?.profits);
        setTotalWon(data?.totalWon);
        setTotalLoss(data?.totalLoss);
      } catch (error) {
        console.log(error);
        setError(error.response.data.message || "something went wrong");
      }
    };

    fetchData();
  }, []);
  const iconSize = 25;
  return (
    <div className={styles["dashboard"]}>
      <iframe
        className={styles["pricingMarquee"]}
        src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22morgangroupinveco.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22morgangroupinveco.com%2Fen%2Findex-2.html%22%7D"
      />
      <div className={styles["first-flex"]}>
        <div>
          <div>
            <p>Capital</p>
            <p>${capital}</p>
            <p>BTC 0</p>
          </div>
          <div>
            <Icon icon={ic_account_balance_wallet} size={iconSize} />
          </div>
        </div>
        <div>
          <div>
            <p>Accumulating Balance</p>
            <p>${accumulatingBalance}</p>
            <p>BTC 0</p>
          </div>
          <div>
            <Icon icon={ic_compare_arrows} size={iconSize} />
            <p>Bonus</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <div className={styles["second-flex"]}>
        <div>
          <p>Trading Status</p>
          <div className={styles["won"]}>
            <div>
              <Icon icon={ic_arrow_drop_up} color="green" size={iconSize} />
              <div>
                <p>{totalWon}</p>
                <p>Total Won</p>
              </div>
            </div>
            <div>
              <Icon icon={ic_arrow_drop_down} color="red" size={iconSize} />
              <div>
                <p>{totalLoss}</p>
                <p>Total Won</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>Crypto Plan</p>
            <p>---</p>
            <p>Package Status</p>
          </div>
          <div>
            <Icon icon={ic_card_giftcard} size={iconSize} />
            <p>Bonus</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <div className={styles["third"]}>
        <div>
          <p>Profit</p>
          <p>${profit}</p>
          <p>BTC 0</p>
        </div>
        <div>
          <Icon icon={ic_compare_arrows} size={iconSize} />
        </div>
      </div>
      <iframe
        className={styles["iframe2"]}
        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_01a5c&symbol=COINBASE%3ABTCUSD&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=BB%40tv-basicstudies&theme=dark&style=9&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=ppgg.cdfswave.com&utm_medium=widget_new&utm_campaign=chart&utm_term=COINBASE%3ABTCUSD"
      />
    </div>
  );
};

export default Dashboard;
