import { useState, useEffect } from "react";
import { ScrollRestoration, Outlet, useNavigate } from "react-router-dom";
import styles from "./RootTwo.module.css";
import DashboardNavigation from "../../Components/DashboardNavigation/DashboardNavigation";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";

const RootLayoutTwo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user?.auth_token) {
      navigate("/login");
    }
  }, []);
  const [showLeftSide, setShowLeftSide] = useState(true);
  // const [showRightSide, setShowRightSide] = useState(true);
  const onShowLeftSideBarToggle = () => {
    setShowLeftSide((prev) => !prev);
  };
  // const onShowRightSideBarToggle = () => {
  //   setShowRightSide((prev) => !prev);
  // };
  return (
    <div
      className={`${styles["wrapper1"]} ${
        !showLeftSide ? styles["no-show"] : styles["show"]
      }`}
    >
      <DashboardNavigation
        leftSideBarToggle={onShowLeftSideBarToggle}
        // rightSideBarToggle={onShowRightSideBarToggle}
      />
      <LeftSideBar show={showLeftSide} />
      <section className={styles["wrapper"]}>
        <div className={styles["main"]}>
          <ScrollRestoration />
          <Outlet />
        </div>
      </section>
    </div>
  );
};
export default RootLayoutTwo;
