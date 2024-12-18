import styles from "./why-fudo.module.css";
import { CherryIcon, WatchVideo, StartIcon, PhoneIcon } from "../../../assets";
import { Avatar, Button, Rate } from "antd";

function WhyFudo() {
  return (
    <div id="why" className={styles["why"]}>
      <div className={styles["left-why"]}>
        <Button
          shape="round"
          style={{
            width: 204,
            height: 52,
            color: "#EB5757",
            fontSize: 15,
            fontWeight: 500,
          }}
          icon={<CherryIcon />}
          iconPosition="end"
          className={styles["button-faster"]}
        >
          More than Faster
        </Button>
        <h1>
          Be The Fastest In Delivering Your <span>Food</span>
        </h1>
        <h2>
          Our job is to filling your tummy with delicious food and with fast and
          free delivery
        </h2>
        <div className={styles["group-btn"]}>
          <Button
            shape="round"
            style={{ width: 186, height: 68, color: "#fff" }}
          >
            Get Started
          </Button>
          <div>
            <WatchVideo />
            Watch Video
          </div>
        </div>
        <div className={styles["group-avata"]}>
          <Avatar.Group size="large">
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
          </Avatar.Group>
          <div className={styles["group-avata-content"]}>
            <div>Our Happy Customer</div>
            <div>
              <StartIcon />
              <div>4,8</div>
              <p>(12.5k Review)</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["right-why"]}>
        {/* <img src="src/assets/bg-right.png" /> */}
        <div className={styles["group-btn-phone"]}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div>
            <h1>Richard Watson</h1>
            <div>Food Courier</div>
          </div>
          <PhoneIcon />
        </div>
        <div className={styles["group-rating"]}>
          <img src="src/assets/pizza.png" />
          <div>
            <div className={styles["title-rating"]}>Italian Pizza</div>
            <Rate disabled defaultValue={4} />
            <div className={styles["number-rating"]}>
              <span>$</span>7.49
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyFudo;
