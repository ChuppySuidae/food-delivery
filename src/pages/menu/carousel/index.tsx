import styles from "./carousel.module.css";
import { useState, useEffect } from "react";
import { IMenu } from "../../../models/menu";
function Carousel() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IMenu[]>([]);
  const [currentIndexMenu, setCurrentIndexMenu] = useState(0);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch("src/apis/data_1.json")
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        setData(body);
        console.log(data);

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div className={styles["slider"]}>
      <div
        className={styles["slide-track"]}
        style={{ width: `calc(250px * ${data?.length})` }}
      >
        {data &&
          data.map((item: IMenu, index) => (
            <div className={styles["slide"]}>
              <img src={item.urlImg} key={index} />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Carousel;
