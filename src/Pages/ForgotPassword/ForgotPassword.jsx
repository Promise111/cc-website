import {} from "react";
import { Link } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles["login"]}>
      <div className={styles["logo"]}>
        <img src="/logo/default-monochrome-white.svg" alt="CapitalCoin" />
      </div>
      <div className={styles["form"]}>
        <form onSubmit={handleSubmit}>
          <h2>Reset password</h2>
          <p>
            If you forgot your password, well, then we’ll email you instructions
            to reset your password.
          </p>
          <div className={styles["form-input"]}>
            <label htmlFor="email">
              Email Address <span className={styles["red-asterisk"]}>*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              required
            />
          </div>

          <input
            type="submit"
            value="Send Reset Link"
            className={styles["login-button"]}
          />
          <div className={styles["links"]}>
            <Link to="/login">Return to login</Link>
          </div>
        </form>
      </div>
      <div className={styles["footer"]}>
        <div className={styles["left"]}>
          Capital Coin Investment &#169; {new Date().getFullYear()}. All Rights
          Reserved.
        </div>
        <div className={styles["right"]}>
          <Link to="/">Return to Homepage</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
