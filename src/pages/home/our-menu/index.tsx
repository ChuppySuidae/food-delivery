import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import { useEffect, useRef, useState } from "react";

import styles from "./our-menu.module.css";
import { IMenu, IItem } from "../../../models/menu";

function OurMenu() {
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
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      485 * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: "prev" | "next"): boolean => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return 485 * currentIndex >= maxScrollWidth.current;
    }
    return false;
  };

  const moveOn = (index: number) => {
    setCurrentIndex(0);
    setCurrentIndexMenu(index);
  };
  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = 485 * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (carousel.current) {
      maxScrollWidth.current =
        carousel.current.scrollWidth - carousel.current.offsetWidth;
    }
  }, [data]);
  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div className={styles["our-menu"]}>
      <div className={styles["title-our-menu"]}>
        <div className={styles["group-title"]}>
          <h1>OUR MENU</h1>
          <div>Menu That Always Makes You Fall In Love</div>
        </div>
        <div className={styles["group-button-move"]}>
          <Button
            onClick={movePrev}
            disabled={isDisabled("prev")}
            style={{ width: "64px", height: "64px" }}
            type="primary"
            shape="circle"
            icon={<LeftOutlined />}
          />

          <Button
            onClick={moveNext}
            disabled={isDisabled("next")}
            style={{ width: "64px", height: "64px" }}
            type="primary"
            shape="circle"
            icon={<RightOutlined />}
          />
        </div>
      </div>
      <div className={styles["content-menu"]}>
        <div>
          <div
            id={styles["scrollableDiv"]}
            style={{
              width: 350,
              height: 580,
              padding: "0 16px",
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
                    <img
                      className={styles["img-list-menu"]}
                      src={item.urlImg}
                    />
                    <span>
                      {item.name.trimStart().split(" ")[0].toUpperCase()}
                    </span>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </div>
        <div
          className={styles["carousel-menu"]}
          ref={carousel}
          style={{
            display: "flex",
            width: "55vw",
            overflow: "auto",
            gap: "30px",
          }}
        >
          {data[currentIndexMenu]?.items?.map((item: IItem, index) => (
            <div
              className={styles["item-menu"]}
              key={index}
              style={{
                flex: "0 0 auto",
                width: "250px",
                scrollSnapAlign: "start",
                backgroundImage: "url(" + `${encodeURI(item.urlImg)}` + ")",
              }}
            >
              <h1>{item.name.trimStart().split(" ")[0]}</h1>
              <p>
                <span>$</span>
                {item.price}
              </p>
              <div>
                Order Now <RightOutlined />
              </div>
            </div>
          ))}
        </div>
        <div className={styles["mobile-group-button-move"]}>
          <Button
            onClick={movePrev}
            disabled={isDisabled("prev")}
            style={{ width: "40px", height: "40px" }}
            type="primary"
            shape="circle"
            icon={<LeftOutlined />}
          />

          <Button
            onClick={moveNext}
            disabled={isDisabled("next")}
            style={{ width: "40px", height: "40px" }}
            type="primary"
            shape="circle"
            icon={<RightOutlined />}
          />
        </div>
      </div>
    </div>
  );
}
export default OurMenu;
