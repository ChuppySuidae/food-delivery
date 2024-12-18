import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import styles from "./login.module.css";
import { FBIcon, GoogleIcon } from "../../assets";
import { useNavigate } from "react-router-dom";
function Login() {
  const onFinish = (values: string) => {
    console.log("Received values of form: ", values);
  };
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "#EB5757",
        margin: "0",
        padding: "0",
        height: "100vh",
      }}
    >
      <div className={styles["left-content"]}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="src/assets/logo.png" />
          <span
            style={{
              fontSize: "24px",
              fontWeight: "700",
              fontFamily: "Poppins",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            FUDO
          </span>
        </div>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "700",
            fontFamily: "Poppins",
            cursor: "pointer",
          }}
        >
          Sign in
        </h1>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="horizontal"
          style={{ width: "80%" }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              className={styles["input-info"]}
              prefix={<UserOutlined />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              className={styles["input-info"]}
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            or <a href="/register">Register now!</a>
          </Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <GoogleIcon className={styles["gg-icon"]} />
            <FBIcon className={styles["fb-icon"]} />
          </div>
        </Form>
      </div>
      <div className={styles["content-right"]}>
        <div className={styles["element-1"]}></div>
        <div className={styles["element-2"]}></div>
        <div className={styles["element-3"]}></div>
      </div>
      <svg
        className={styles["svg-linear"]}
        xmlns="http://www.w3.org/2000/svg"
        width="1540"
        height="189"
        viewBox="0 0 1540 189"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1540 111.261L1454.06 82.2825C1369.41 53.3038 1197.53 -4.65361 1026.93 1.14213C856.339 6.93787 684.461 76.4867 513.867 105.465C343.272 134.444 171.394 122.853 86.7385 117.057L0.799866 111.261V215.584H86.7385C171.394 215.584 343.272 215.584 513.867 215.584C684.461 215.584 856.339 215.584 1026.93 215.584C1197.53 215.584 1369.41 215.584 1454.06 215.584H1540V111.261Z"
          fill="#EE9B00"
          fill-opacity="0.2"
        />
      </svg>
      <svg
        className={styles["svg-linear-1"]}
        xmlns="http://www.w3.org/2000/svg"
        width="1540"
        height="189"
        viewBox="0 0 1540 189"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1540 111.261L1454.06 82.2825C1369.41 53.3038 1197.53 -4.65361 1026.93 1.14213C856.339 6.93787 684.461 76.4867 513.867 105.465C343.272 134.444 171.394 122.853 86.7385 117.057L0.799866 111.261V215.584H86.7385C171.394 215.584 343.272 215.584 513.867 215.584C684.461 215.584 856.339 215.584 1026.93 215.584C1197.53 215.584 1369.41 215.584 1454.06 215.584H1540V111.261Z"
          fill="#EE9B00"
          fill-opacity="0.2"
        />
      </svg>
    </div>
  );
}
export default Login;
