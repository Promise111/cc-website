import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import instance from "../../api";

const Signup = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user || user?.auth_token) {
      navigate("/dashboard");
    }
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState({ value: "", error: "" });
  const [userName, setUserName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });
  const [country, setCountry] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  // const disableSubmit =
  //   fullName.error &&
  //   userName.error &&
  //   email.error &&
  //   phone.error &&
  //   country.error &&
  //   password.error &&
  //   confirmPassword.error;
  // console.log("hello", disableSubmit);
  const icon = showPassword ? eyeOff : eye;
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (password.value !== confirmPassword.value) {
        setConfirmPassword((prev) => ({
          ...prev,
          error: "Enter matching Passwords",
        }));
        setError("Enter matching Passwords");
        return;
      }
      console.log(!country.value, country);
      if (!country.value) {
        setError(country.error || "Select valid country");
        return;
      }
      const userData = {
        fullName: fullName.value,
        userName: userName.value,
        email: email.value,
        phoneNo: phone.value,
        country: country.value,
        password: password.value,
        confirm_password: confirmPassword.value,
      };

      // let response = await axios.post(
      //   `http://localhost:8001/api/user/signup`,
      //   userData,
      //   {
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );
      let response = await instance.post(`/user/signup`, userData);
      setSuccess(response.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error.response);
      setError(
        error.response.data.message || "An error occurred during signup"
      );
    }
  };
  return (
    <div className={styles["login"]}>
      <div className={styles["logo"]}>
        <img src="/logo/default-monochrome-white.svg" alt="CapitalCoin" />
      </div>
      {error && <p className={styles["error-text"]}>{error}</p>}
      {success && <p className={styles["success-text"]}>{success}</p>}
      <div className={styles["form"]}>
        <form onSubmit={handleSubmit}>
          <h2>Create an Account</h2>
          <p>Sign up with your email and get started with your free account.</p>
          <div className={styles["form-input"]}>
            <label htmlFor="fullname">
              Full Name <span className={styles["red-asterisk"]}>*</span>
            </label>
            <input
              type="text"
              id="fullname"
              onFocus={() =>
                setFullName((prev) => {
                  return { ...prev, error: "" };
                })
              }
              onBlur={() => {
                setFullName((prev) => {
                  if (!prev.value) return { ...prev, error: "Enter fullname" };
                  return { ...prev };
                });
              }}
              onChange={(e) => {
                setFullName((prev) => ({
                  ...prev,
                  value: e.target.value,
                }));
              }}
              value={fullName.value}
              className={fullName.error && styles["error"]}
              required
            />
          </div>
          <div className={styles["form-input"]}>
            <label htmlFor="username">
              Username <span className={styles["red-asterisk"]}>*</span>
            </label>
            <input
              type="text"
              id="username"
              onFocus={() =>
                setUserName((prev) => {
                  return { ...prev, error: "" };
                })
              }
              onBlur={() => {
                setUserName((prev) => {
                  if (!prev.value) return { ...prev, error: "Enter username" };
                  return { ...prev };
                });
              }}
              onChange={(e) => {
                setUserName((prev) => ({
                  ...prev,
                  value: e.target.value,
                }));
              }}
              value={userName.value}
              className={userName.error && styles["error"]}
              required
            />
          </div>
          <div className={styles["form-input"]}>
            <label htmlFor="email">
              Email Address <span className={styles["red-asterisk"]}>*</span>
            </label>
            <input
              type="email"
              id="email"
              onFocus={() =>
                setEmail((prev) => {
                  return { ...prev, error: "" };
                })
              }
              onBlur={() => {
                setEmail((prev) => {
                  // const re =
                  //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
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
            <label htmlFor="phone">
              Phone Number <span className={styles["red-asterisk"]}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              onFocus={() =>
                setPhone((prev) => {
                  return { ...prev, error: "" };
                })
              }
              onBlur={() => {
                setPhone((prev) => {
                  if (!prev.value)
                    return { ...prev, error: "Enter valid phone number" };
                  return { ...prev };
                });
              }}
              onChange={(e) => {
                setPhone((prev) => ({
                  ...prev,
                  value: e.target.value,
                }));
              }}
              value={phone.value}
              className={phone.error && styles["error"]}
              required
            />
          </div>
          <div className={styles["form-input"]}>
            <label htmlFor="country">
              Country <span className={styles["red-asterisk"]}>*</span>
            </label>
            {/* <input type="tel" id="phone" required /> */}
            <select
              id="country"
              onFocus={() =>
                setCountry((prev) => {
                  return { ...prev, error: "" };
                })
              }
              onBlur={() => {
                setCountry((prev) => {
                  if (!prev.value)
                    return { ...prev, error: "Enter company size" };
                  return { ...prev };
                });
              }}
              onChange={(e) => {
                setCountry((prev) => ({
                  ...prev,
                  value: e.target.value,
                }));
              }}
              className={country.error && styles["error"]}
              required
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
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
          <div className={styles["form-input"]}>
            <label htmlFor="confirm-pass">
              Confirm Password <span className={styles["red-asterisk"]}>*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-pass"
              value={confirmPassword?.value}
              onFocus={() =>
                setConfirmPassword((prev) => {
                  return { ...prev, error: "" };
                })
              }
              onBlur={() => {
                setConfirmPassword((prev) => {
                  if (!prev.value)
                    return { ...prev, error: "Enter password name" };
                  if (prev.value != password.value)
                    return { ...prev, error: "Confirm password must match" };
                  return { ...prev };
                });
              }}
              onChange={(e) => {
                setConfirmPassword((prev) => ({
                  ...prev,
                  value: e.target.value,
                }));
              }}
              className={confirmPassword.error && styles["error"]}
              required
            />
          </div>

          <input
            type="submit"
            value="Register"
            className={styles["login-button"]}
          />
          <div className={styles["links"]}>
            <Link to="/login">Sign in instead</Link>
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

export default Signup;
