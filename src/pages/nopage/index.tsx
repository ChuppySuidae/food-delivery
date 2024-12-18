import { PageNotFoundIcon } from "../../assets";
import styles from "./nopage.module.css";
function NoPage() {
  return (
    <div className={styles["page"]}>
      <div className={styles["bg"]}></div>
      <div
        className="content"
        style={{
          position: "relative",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PageNotFoundIcon className={styles["svg-404"]} />
        <h2
          style={{
            marginBlockEnd: 0,
          }}
        >
          Page not found
        </h2>
        <p>Sorry, We can't find the page you're looking for.</p>
        <button className={styles["go-home"]}>Go home</button>
      </div>
      <div className={styles["bg-2"]}></div>
    </div>
  );
}
export default NoPage;
