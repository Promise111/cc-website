import styles from "./AboutUs.module.css";
import { Icon } from "react-icons-kit";
import { ic_lock_outline } from "react-icons-kit/md/ic_lock_outline";
import { ic_check_circle_outline_outline } from "react-icons-kit/md/ic_check_circle_outline_outline";
import { ic_multiple_stop_outline } from "react-icons-kit/md/ic_multiple_stop_outline";
import Niko from "../../assets/images/slider/niko-chaluska.jpeg";
import Samuel from "../../assets/images/slider/samuel_frenchie.jpeg";
import Katya from "../../assets/images/slider/katya_donetsk.jpeg";

const AboutUs = () => {
  return (
    <div className={styles["Faqs"]}>
      <header>
        <h1> We make trading available for everybody</h1>
      </header>
      <section>
        <div className={styles["first-row"]}>
          <div>
            <h2>About</h2>
            <p>
              Capital Coin Investment ™ is founded with vision to create 100%
              transparent digital trading experience for its clients.
            </p>
            <p>
              We provide easy to use trading platform and spend lots of time
              providing education for our customers.
            </p>
            <p>
              Our company is interested in successful and prosperous traders who
              will create high trading volume. We are proud that we helped many
              customers to make revenue.
            </p>
          </div>
          <div>
            <h2>Our Values</h2>
            <div className={styles["values-card"]}>
              <p>01</p>
              <p>
                <span>Clients</span>: Providing best customer service is our
                primary value. More than 100 account managers are focused on
                needs of our clients
              </p>
            </div>
            <div className={styles["values-card"]}>
              <p>02</p>
              <p>
                <span>Reliability</span>: Being industry leader we provide our
                clients with extra solidity. We are doing more than anyone else
                to satisfy needs of our clients.
              </p>
            </div>
            <div className={styles["values-card"]}>
              <p>03</p>
              <p>
                <span>Simplicity</span>: Everybody can become a trader with our
                easiest to use trading platform. ExpertOption is available on
                all modern platforms: Web, Windows, MacOS, iPhone, iPad and
                Android.
              </p>
            </div>
            <div className={styles["values-card"]}>
              <p>04</p>
              <p>
                <span>Speed</span>: We provide fastest trading using
                cutting-edge technologies. No delays in order executions and
                lags in user interface.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["our-company"]}>
        <h2>Our Company</h2>
        <p>
          Coin Capital Investment ™ is an Optimal Wealth Management Company with
          emphasis on Wealth Management, Wealth Creation, Trades and Digital
          Assets usage. We offer various insured services capable of generating
          and returning good profit yield on crypto assets in the Blockchain
          through trading on a wide range of Instrument Categories. Coin Capital
          Investment ™ has qualified financiers/traders that manage and provide
          financial consulting services to her investors. We pride ourselves
          with a world class professional customer service, unique trading
          strategies, optimum transparency and fidelity. Funds Invested with
          Coin Capital Investment ™ can with Withdrawn, Transferred or
          Reinvested at will.
        </p>
      </section>
      <section className={styles["our-standard"]}>
        <div>
          <h3>
            <Icon icon={ic_multiple_stop_outline} size={30} />
            Multiplatform
          </h3>
          <p>Our trading platform is available on all devices</p>
        </div>
        <div>
          <h3>
            <Icon icon={ic_lock_outline} size={30} />
            Security standards
          </h3>
          <p>
            Verified by Visa and MasterCard All data is encrypted with strongest
            cryptographic algorithm
          </p>
        </div>
        <div>
          <h3>
            <Icon icon={ic_check_circle_outline_outline} size={30} />
            Accurate quotes
          </h3>
          <p>Real-time market data provided by leading analytical agencies</p>
        </div>
      </section>
      <section className={styles["our-team"]}>
        <h2>Our Team</h2>
        <div className={styles["our-team-images"]}>
          <div>
            <img src={Niko} alt="Niko" />
            <p>Niko Frenchie</p>
            <p>Account Manager</p>
          </div>
          <div>
            <img src={Samuel} alt="Samuel" />
            <p>Samuel Altman</p>
            <p>CEO</p>
          </div>
          <div>
            <img src={Katya} alt="Natasha" />
            <p>Natasha Donetsk</p>
            <p>Consultant</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
