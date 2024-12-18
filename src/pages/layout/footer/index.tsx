import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import {
  FacebookIcon,
  InstagramIcon,
  SendIcon,
  TwitterIcon,
} from "../../../assets";
function Footer() {
  return (
    <Row id="footer" className={styles["footer"]}>
      <Col xs={24} lg={6} className={styles["item-footer"]}>
        <Link to="/" className={styles["logo"]}>
          <img src="src/assets/logo.png" />
          <div>Fudo</div>
        </Link>
        <p>
          Our job is to filling your tummy with delicious food and with fast and
          free delivery.
        </p>
        <div>
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </Col>
      <Col xs={12} sm={12} lg={4} className={styles["item-footer"]}>
        <h1>About</h1>
        <div>About Us</div>
        <div>Features</div>
        <div>News</div>
        <div>Menu</div>
      </Col>
      <Col xs={12} sm={12} lg={4} className={styles["item-footer"]}>
        <h1>Company</h1>
        <div>Why Fudo?</div>
        <div>Partner With Us</div>
        <div>FAQ</div>
        <div>Blog</div>
      </Col>
      <Col xs={12} sm={12} lg={4} className={styles["item-footer"]}>
        <h1>Support</h1>
        <div>Account</div>
        <div>Support Center</div>
        <div>Feedback</div>
        <div>Contact Us</div>
        <div>Accessibilty</div>
      </Col>
      <Col xs={12} sm={12} lg={4} className={styles["item-footer"]}>
        <h1>Get in Touch</h1>
        <div>Question or feedback?</div>
        <div>We'd love to hear from you</div>
        <Button
          icon={<SendIcon />}
          iconPosition="end"
          shape="round"
          style={{ width: 186, height: 45, backgroundColor: "#fff" }}
        >
          Email address
        </Button>
      </Col>
    </Row>
  );
}
export default Footer;
