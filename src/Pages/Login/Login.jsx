import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { ic_report_gmailerrorred_outline } from "react-icons-kit/md/ic_report_gmailerrorred_outline";
import instance from "../../api";
import Modal from "../../Components/Modal/Modal";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    // if (user?.isActivated == false) {
    //   setShow(true);
    //   return;
    // }
    if (user || user?.auth_token) {
      navigate("/dashboard");
    }
  }, [navigate]);
  const icon = showPassword ? eyeOff : eye;
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = {
        email: email.value,
        password: password.value,
      };
      // let response = await axios.post(
      //   `http://localhost:8001/api/user/login`,
      //   userData,
      //   {
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );
      let response = await instance.post("/user/login", userData);
      let data = {
        ...response.data?.user,
        auth_token: response.data?.auth_token,
        password: "",
      };
      if (data?.isActivated == false) {
        localStorage.removeItem("user");
        setShow(true);
        return;
      }
      if (data?.role === "admin") {
        setError("Invalid Email or Password");
        return;
      }
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/dashboard");
    } catch (error) {
      setError(
        error.response.data.message || "An error occurred during signup"
      );
      console.log(error.response);
    }
  };
  const onClose = () => {
    // setShow(false);
  };
  return (
    <>
      <Modal onClose={onClose} show={show}>
        <div className={styles["modal-wrapper"]}>
          <div>
            <Icon icon={ic_report_gmailerrorred_outline} size={150} />
          </div>
          <div className={styles["modal-error"]}>
            <h1>ERROR!</h1>
          </div>
          <div>
            <p>Please contact site administrator to activate your account.</p>
          </div>
          <div>
            <button
              className={styles["modal-btn"]}
              onClick={() => setShow(false)}
            >
              Ok
            </button>
          </div>
        </div>
      </Modal>
      <div className={styles["login"]}>
        <div className={styles["logo"]}>
          <img src="/logo/default-monochrome-white.svg" alt="CapitalCoin" />
        </div>
        {error && <p className={styles["error-text"]}>{error}</p>}
        <div className={styles["form"]}>
          <form onSubmit={handleSubmit}>
            <h2>Login into Account</h2>
            <p>Sign in into your account using your email and password.</p>
            <div className={styles["form-input"]}>
              <label htmlFor="email">
                Email Address <span className={styles["red-asterisk"]}>*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                onFocus={() =>
                  setEmail((prev) => {
                    return { ...prev, error: "" };
                  })
                }
                onBlur={() => {
                  setEmail((prev) => {
                    const re =
                      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    let validEmail = re.test(String(prev.value).toLowerCase());
                    if (!prev.value || !validEmail)
                      return { ...prev, error: "Enter valid email" };
                    return { ...prev };
                  });
                }}
                onChange={(e) => {
                  setEmail((prev) => ({
                    ...prev,
                    value: e.target.value,
                  }));
                }}
                value={email.value}
                className={email.error && styles["error"]}
                required
              />
            </div>
            <div className={styles["form-input"]}>
              <label htmlFor="password">
                Password <span className={styles["red-asterisk"]}>*</span>
              </label>
              <div
                className={`${styles["input"]} ${
                  password.error && styles["error"]
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter password"
                  value={password?.value}
                  onFocus={() =>
                    setPassword((prev) => {
                      return { ...prev, error: "" };
                    })
                  }
                  onBlur={() => {
                    setPassword((prev) => {
                      if (!prev.value)
                        return { ...prev, error: "Enter password" };
                      return { ...prev };
                    });
                  }}
                  onChange={(e) => {
                    setPassword((prev) => ({
                      ...prev,
                      value: e.target.value,
                    }));
                  }}
                  required
                />
                <span onClick={toggleShowPassword}>
                  <Icon icon={icon} />
                </span>
              </div>
            </div>
            <input
              type="submit"
              value="Login"
              className={styles["login-button"]}
            />
            <div className={styles["links"]}>
              <Link to="/forgot-password">Forgot password?</Link>
              <Link to="/signup">Create an account</Link>
            </div>
          </form>
        </div>
        <div className={styles["footer"]}>
          <div className={styles["left"]}>
            Capital Coin Investment &#169; {new Date().getFullYear()}. All
            Rights Reserved.
          </div>
          <div className={styles["right"]}>
            <Link to="/">Return to Homepage</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
