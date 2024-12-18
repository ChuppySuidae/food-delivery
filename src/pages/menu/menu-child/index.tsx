import { List } from "antd";
import { AddIcon, LineIcon, MenuIcon } from "../../../assets";
import styles from "./menu-child.module.css";
import { useEffect, useState } from "react";
import { IMenu, IItem } from "../../../models/menu";
function MenuChild() {
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveOn = (index: number) => {
    setCurrentIndexMenu(index);
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div>
      <div className={styles["menu"]}>
        <div className={styles["title-menu"]}>
          <MenuIcon />
          <h1>Menu</h1>
        </div>
        <div
          id={styles["scrollableDiv"]}
          style={{
            width: "80%",
            height: "150px",
          }}
        >
          <List
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <div
                  onClick={() => moveOn(index)}
                  className={
                    index === currentIndexMenu
                      ? styles["list-menu-active"]
                      : styles["list-menu"]
                  }
                >
                  <img className={styles["img-list-menu"]} src={item.urlImg} />
                  <LineIcon className={styles["svg-line"]} />
                  <span>
                    {item.name.trimStart().split(" ")[0].toUpperCase()}
                  </span>
                  <AddIcon className={styles["icon-add"]} />
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
      <h1 className={styles["title-Fudo"]}>Popular Pizzas of Fudo</h1>
      <div className={styles["gr-container"]}>
        {data[currentIndexMenu]?.items?.map((item: IItem, index) => (
          <div
            className={
              index % 2 === 0
                ? styles["container-left"]
                : styles["container-right"]
            }
            key={index}
          >
            <img src={item?.urlImg} />
            <div className={styles["content"]}>
              <div className={styles["content-title"]}>
                <h1>{item?.name}</h1>
                <p>
                  <span>$</span>
                  {item?.price}
                </p>
              </div>
              <div className={styles["gr-ingredient"]}>
                <ul className={styles["ingredient"]}>
                  {item?.ingredients?.map((ingredient) => (
                    <li>{ingredient}</li>
                  ))}
                </ul>
                <button className={styles["button-add"]}>Add to Get</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MenuChild;
