import { Link, useNavigate } from "react-router-dom";
import {
  DownOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu, Modal, Tooltip } from "antd";
import styles from "./header.module.css";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { LoginIcon, ShoppingCartIcon } from "../../../assets";
import { useState } from "react";

const items: MenuProps["items"] = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/menu">
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/menu">
        2nd menu item
      </a>
    ),
    key: "1",
  },
];
type MenuItem = Required<MenuProps>["items"][number];

const profileItems: MenuItem[] = [
  {
    label: <Avatar size="large" icon={<UserOutlined />} />,
    key: "SubMenu",

    children: [
      { label: "Option 1", key: "setting:1" },
      { label: "Option 2", key: "setting:2" },
    ],
  },
];
function Header() {
  const showCartModal = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const [islogin, setIsLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className={styles["nav-header"]}>
        <Link to="/" className={styles["nav-logo"]}>
          <img src="src/assets/logo.png" />
          <div>Fudo</div>
        </Link>

        <div className={styles["nav-link"]}>
          <Link
            to="#why"
            onClick={() => {
              window.location.href = "#why";
            }}
          >
            Why Fudo?
          </Link>

          <Link
            to="/#services"
            onClick={() => {
              window.location.href = "#services";
            }}
          >
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Services
                  <DownOutlined style={{ color: "#EB5757" }} />
                </Space>
              </a>
            </Dropdown>
          </Link>
          <Link to="/menu">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Menu
                  <DownOutlined style={{ color: "#EB5757" }} />
                </Space>
              </a>
            </Dropdown>
          </Link>
          <Link
            to="/#contact"
            onClick={() => {
              window.location.href = "#footer";
            }}
          >
            Contact
          </Link>
        </div>

        <div className={styles["nav-btn"]}>
          <Tooltip title="Search">
            <SearchOutlined style={{ fontSize: "22px" }} />
          </Tooltip>
          <Tooltip title="Cart">
            <ShoppingCartIcon onClick={showCartModal} />
          </Tooltip>
          {!islogin && (
            <Button
              shape="round"
              style={{ width: 120, height: 40, color: "#FFF" }}
              icon={<LoginIcon />}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          )}
          {islogin && (
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={profileItems}
              style={{ background: "transparent" }}
            ></Menu>
          )}
          <Modal
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable={false}
            className={styles["modal-cart"]}
          >
            <div>
              <h1>Shopping cart</h1>
              <span>You have 3 item in your cart</span>
              <div
                style={{ height: "300px", width: "55%", overflowY: "scroll" }}
              >
                <div
                  style={{
                    gap: "20px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                  }}
                >
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>abc defg hijkl mnop</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>a</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>abc defg hijkl mnop</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>abc defg hijkl mnop</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>abc defg hijkl mnop</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>abc defg hijkl mnop</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>abc defg hijkl mnop</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>abc defg hijkl mnop</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>abc defg hijkl mnop</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>abc defg hijkl mnop</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>abc defg hijkl mnop</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>abc defg hijkl mnop</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                  <div className={styles["item"]}>
                    <img src="src/assets/pizza.png" />
                    <span>abc defg hijkl mnop</span>
                    <span>256$</span>
                    <div className={styles["gr-amount"]}>
                      <MinusCircleOutlined className={styles["icon"]} />
                      <span>5</span>
                      <PlusCircleOutlined className={styles["icon"]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </Modal>
          ;
        </div>
      </nav>
    </>
  );
}

export default Header;
