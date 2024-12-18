import { Col, Row } from "antd";
import styles from "./services.module.css";
function Services() {
  return (
    <div id="services" className={styles["services"]}>
      <div className={styles["title-services"]}>
        <h1>WHAT WE SERVE</h1>
        <p>Your Favorite Food Delivery Partner</p>
      </div>
      <Row justify="space-between" className={styles["content-services"]}>
        <Col xs={24} lg={8} className={styles["item-content-services"]}>
          <img
            className={styles["img-item-1"]}
            src="src/assets/easy-to-order.png"
          />
          <div>
            <h1>Easy To Order</h1>
            <p>You only need a few steps in ordering food</p>
          </div>
        </Col>
        <Col xs={24} lg={8} className={styles["item-content-services"]}>
          <img src="src/assets/fastest.png" />
          <div>
            <h1>Fastest Delivery</h1>
            <p>Delivery that is always ontime even faster</p>
          </div>
        </Col>
        <Col xs={24} lg={8} className={styles["item-content-services"]}>
          <img src="src/assets/quality.png" />
          <div>
            <h1>Best Quality</h1>
            <p>Not only fast for us quality is also number one</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Services;
