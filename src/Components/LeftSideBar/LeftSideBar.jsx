import styles from "./LeftSideBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_dashboard } from "react-icons-kit/md/ic_dashboard";
import { ic_insert_chart } from "react-icons-kit/md/ic_insert_chart";
import { ic_credit_card } from "react-icons-kit/md/ic_credit_card";
import { ic_account_balance_wallet } from "react-icons-kit/md/ic_account_balance_wallet";
import { ic_history } from "react-icons-kit/md/ic_history";
import { ic_verified_user } from "react-icons-kit/md/ic_verified_user";
import { ic_online_prediction } from "react-icons-kit/md/ic_online_prediction";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";
import { ic_settings } from "react-icons-kit/md/ic_settings";
import { ic_power_settings_new } from "react-icons-kit/md/ic_power_settings_new";
import PropTypes from "prop-types";

const LeftSideBar = ({ show }) => {
  const navigate = useNavigate();
  const iconSize = 20;
  const onLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div
      className={`${styles["left-side-bar"]} ${
        show ? styles.show : styles.noShow
      }`}
    >
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? styles["active"] : undefined)}
        end
      >
        <Icon icon={ic_dashboard} size={iconSize} />
        Dashboard
      </NavLink>
      {/* <p className={styles["paragraph"]}>Apps</p> */}
      <NavLink
        to="/dashboard/market"
        className={({ isActive }) => isActive ? styles["active"] : undefined}
      >
        <Icon icon={ic_insert_chart} size={iconSize} />
        Market
      </NavLink>
      <NavLink
        to="/dashboard/deposit"
        className={({ isActive }) => isActive ? styles["active"] : undefined}
      >
        <Icon icon={ic_credit_card} size={iconSize} />
        Deposit
      </NavLink>
      <NavLink
        to="/dashboard/transfer"
        className={({ isActive }) => isActive ? styles["active"] : undefined}
      >
        <Icon icon={ic_credit_card} size={iconSize} />
        Fund Transfer
      </NavLink>
      <NavLink
        to="/dashboard/withdraw"
        className={({ isActive }) => isActive ? styles["active"] : undefined}
      >
        <Icon icon={ic_account_balance_wallet} size={iconSize} />
        Withdrawal
      </NavLink>
      <NavLink
        to="/dashboard/history"
        className={({ isActive }) => isActive ? styles["active"] : undefined}
      >
        <Icon icon={ic_history} size={iconSize} />
        History
      </NavLink>
      <NavLink
        to="/dashboard/packages"
        className={({ isActive }) => isActive ? styles["active"] : undefined}
      >
        <Icon icon={ic_verified_user} size={iconSize} />
        Packages
      </NavLink>
      <NavLink
        to="/dashboard/signal"
        className={({ isActive }) => isActive ? styles["active"] : undefined}
      >
        <Icon icon={ic_online_prediction} size={iconSize} />
        Signal
      </NavLink>
      {/* <NavLink
        to="/dashboard/dashboard/kyc"
        className={({ isActive }) => isActive ? styles["active"] : undefined}
      >
        <Icon icon={ic_content_copy} size={iconSize} />
        AML/KYC
      </NavLink> */}
      <NavLink
        to="/dashboard/settings"
        className={({ isActive }) => isActive ? styles["active"] : undefined}
      >
        <Icon icon={ic_settings} size={iconSize} />
        Settings
      </NavLink>
      <a
        onClick={onLogout}
        className={({ isActive }) => isActive ? styles["active"] : undefined}
      >
        <Icon icon={ic_power_settings_new} size={iconSize} />
        Logout
      </a>
    </div>
  );
};

LeftSideBar.propTypes = {
  show: PropTypes.bool,
};

export default LeftSideBar;
