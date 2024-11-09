import {} from "react";
import { ScrollRestoration, Outlet } from "react-router-dom";
import styles from "./Root.module.css";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import PricingMarguee from "../../Components/PricingMarguee/PricingMarguee";
import CountryPopup from "../../Components/CountryPopup/CountryPopup";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <section className={styles["wrapper"]}>
        <div className={styles["main"]}>
          <ScrollRestoration />
          <Outlet />
        </div>
        <Footer />
        <CountryPopup />
        <PricingMarguee />
      </section>
    </>
  );
};
export default RootLayout;
