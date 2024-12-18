import { Button } from "antd";
import styles from "./download.module.css";

function Download() {
  return (
    // <div style={{ position: "relative" }}>
    <div className={styles["download"]}>
      <h1>DOWNLOAD APP</h1>
      <h2>Get Started With Fudo Today!</h2>
      <p>
        Discover food wherever and whenever and get your food delivered quickly.
      </p>
      <Button shape="round" style={{ width: 186, height: 68, color: "#fff" }}>
        Get The App
      </Button>
    </div>
    // </div>
  );
}
export default Download;
