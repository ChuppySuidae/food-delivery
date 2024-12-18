import { Col, Rate, Row } from "antd";
import styles from "./reviewer.module.css";
function Reviewer() {
  return (
    <div style={{ marginTop: 50 }}>
      <Row justify="space-between" className={styles[""]}>
        <Col xs={24} lg={12} className={styles["title-reviewer"]}>
          <h1>WHAT THEY SAY</h1>
          <img style={{ width: "100%" }} src="src/assets/Reviewer.png" />
        </Col>
        <Col xs={24} lg={12} className={styles["content-reviewer"]}>
          <h1>WHAT THEY SAY</h1>
          <div>
            <h1>What Our Customers Say About Us</h1>
            <p>
              “Fudo is the best. Besides the many and delicious meals, the
              service is also very good, especially in the very fast delivey. I
              highly recommend Fudo to you”.
            </p>
            <div className={styles["card-user"]}>
              <img
                style={{ width: 64, height: 64, borderRadius: 64 }}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
              <div>
                <h1>Theresa Jordan</h1>
                <p>Food Enthusiast</p>
              </div>
            </div>
            <div className={styles["rate-info"]}>
              <Rate disabled defaultValue={4} />
              <span>4.8</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Reviewer;
