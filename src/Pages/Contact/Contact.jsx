import styles from "./Contact.module.css";
import { Icon } from "react-icons-kit";
import { mapPin } from "react-icons-kit/feather/mapPin";
import { mail } from "react-icons-kit/feather/mail";
import { useState } from "react";

const Contact = () => {
  const [option, setOption] = useState({ value: null, error: null });
  const [name, setName] = useState({ value: null, error: null });
  const [email, setEmail] = useState({ value: null, error: null });
  const [message, setMessage] = useState({ value: null, error: null });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (option.value && name.value && email.value && message.value) {
      setSuccess("Informations submitted successfully!");
      return;
    }

    setError("Fill the fields appropriately!");
    return;
  };
  return (
    <div className={styles["crypto"]}>
      {success && <p className={styles["success-text"]}>{success}</p>}
      {error && <p className={styles["error-text"]}>{error}</p>}
      <h1 className={styles["h1"]}>Contact</h1>
      <section className={styles["contact"]}>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-input"]}>
            <select
              onFocus={() =>
                setOption((prev) => {
                  return { ...prev, error: "" };
                })
              }
              onBlur={() => {
                setOption((prev) => {
                  if (!prev.value)
                    return { ...prev, error: "Enter valid option" };
                  return { ...prev };
                });
              }}
              onChange={(e) => {
                setOption((prev) => ({
                  ...prev,
                  value: e.target.value,
                }));
              }}
              className={option.error && styles["error"]}
              required
            >
              <option>Select Option</option>
              <option value="Trading Question">Trading Question</option>
              <option value="Finance Question">Finance Question</option>
              <option value="Technical Question">Technical Question</option>
            </select>
          </div>
          <div className={styles["form-input"]}>
            <input
              type="text"
              placeholder="Name"
              onFocus={() =>
                setName((prev) => {
                  return { ...prev, error: "" };
                })
              }
              onBlur={() => {
                setName((prev) => {
                  if (!prev.value) return { ...prev, error: "Enter name" };
                  return { ...prev };
                });
              }}
              onChange={(e) => {
                setName((prev) => ({
                  ...prev,
                  value: e.target.value,
                }));
              }}
              value={name.value}
              className={name.error && styles["error"]}
              required
            />
            <input
              type="email"
              placeholder="Email"
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
            <textarea
              placeholder="Message"
              cols={100}
              rows={5}
              onFocus={() =>
                setMessage((prev) => {
                  return { ...prev, error: "" };
                })
              }
              onBlur={() => {
                setMessage((prev) => {
                  if (!prev.value) return { ...prev, error: "Enter message" };
                  return { ...prev };
                });
              }}
              onChange={(e) => {
                setMessage((prev) => ({
                  ...prev,
                  value: e.target.value,
                }));
              }}
              value={message.value}
              className={message.error && styles["error"]}
              required
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
        <div className={styles["mail-address"]}>
          <p>
            <Icon icon={mapPin} size={25} />
            1585 BROADWAY NEW YORK, NY 10036 .
          </p>
          <p>
            <Icon icon={mail} size={25} />
            info@capitalcoininvestments.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
