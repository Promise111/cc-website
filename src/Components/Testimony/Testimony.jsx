import {} from "react";
import Slider from "react-slick";
import styles from "./Testimony.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Author1 from "../../assets/testimonial-images/testimony1.jpeg";
import Author2 from "../../assets/testimonial-images/testimony2.jpeg";
import Author3 from "../../assets/testimonial-images/testimony3.jpeg";
import Author4 from "../../assets/testimonial-images/testimony4.jpeg";
import Author5 from "../../assets/testimonial-images/testimony5.jpeg";

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings} className={styles["carousel"]}>
        <div className={styles["item"]}>
          <img src={Author1} alt="author 1" />
          <div>
            <p className={styles["testimony-msg"]}>
              Wow I got my profits and paid all my debts in just two weeks
            </p>
            <p className={styles["name"]}>Jeremy Ridges A.</p>
          </div>
        </div>
        <div className={styles["item"]}>
          <img src={Author2} alt="author 2" />
          <div>
            <p className={styles["testimony-msg"]}>
              Wow I got my profits and paid all my debts in just two weeks
            </p>
            <p className={styles["name"]}>Scott Dale</p>
          </div>
        </div>
        <div className={styles["item"]}>
          <img src={Author3} alt="author 3" />
          <div>
            <p className={styles["testimony-msg"]}>
              Wow I got my profits and paid all my debts in just two weeks
            </p>
            <p className={styles["name"]}>Arianna Demanche</p>
          </div>
        </div>
        <div className={styles["item"]}>
          <img src={Author4} alt="author 4" />
          <div>
            <p className={styles["testimony-msg"]}>
              Wow I got my profits and paid all my debts in just two weeks
            </p>
            <p className={styles["name"]}>Daniel Igloo</p>
          </div>
        </div>
        <div className={styles["item"]}>
          <img src={Author5} alt="author 5" />
          <div>
            <p className={styles["testimony-msg"]}>
              Wow I got my profits and paid all my debts in just two weeks
            </p>
            <p className={styles["name"]}>Peter Tor</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimony;
