import { Col, Row } from "antd";
import styles from "./introduction.module.css";
function Introduction() {
  return (
    <Row className={styles["introduction"]} justify="space-between">
      <Col xs={24} lg={12} className={styles["content"]}>
        <h1 className={styles["animate-charcter"]}>
          The fastest delivery in your city
        </h1>
        <p>
          Visit our restaurant to taste our italian cuisine or simply order it
          from our website.
        </p>
        <button>Order now</button>
      </Col>
      <Col className={styles["content-right"]} xs={24} lg={12}>
        <img src="src/assets/menu/fast-food.png" className={styles["bg-img"]} />
      </Col>
    </Row>
  );
}
export default Introduction;
