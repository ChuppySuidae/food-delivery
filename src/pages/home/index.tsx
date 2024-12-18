import Download from "./download";
import styles from "./home.module.css";
import OurMenu from "./our-menu";
import Reviewer from "./reviewer";
import Services from "./services";
import WhyFudo from "./why-fudo";

function Home() {
  return (
    <div className={styles["home"]}>
      <WhyFudo />
      <Services />
      <OurMenu />
      <Reviewer />
      <Download />
    </div>
  );
}
export default Home;
