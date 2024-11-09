// Modal.js
import {} from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.element,
};

export default Modal;
