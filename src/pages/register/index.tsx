import styles from "./register.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, Divider } from "antd";
import { useNavigate } from "react-router-dom";
// import { FBIcon, GoogleIcon } from "../../assets";

function Register() {
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
        height: "100vh",
      }}
    >
      <div className={styles["bg"]}>
        {/* <BGSignUpIcon className={styles["bg"]} /> */}
        <div className={styles["content"]}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "space-evenly",
              margin: "10px 0",
            }}
          >
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "700",
                fontFamily: "Poppins",
                cursor: "pointer",
              }}
            >
              Register
            </h1>
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
          </div>

          <Form
            name="login"
            initialValues={{ remember: true }}
            style={{
              maxWidth: "80%",
              margin: "0  0 0 50px",
              display: "flex",
              flexDirection: "column",
            }}
            onFinish={onFinish}
            className={styles["form-register"]}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
              hasFeedback
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Email Address!" },
              ]}
              hasFeedback
            >
              <Input placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                { required: true, message: "Please input your Phone Number!" },
              ]}
              hasFeedback
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Confirm password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: "20%" }}>
                Submit
              </Button>
              <Divider style={{ borderColor: "#3D3D3D" }} />
              Already have an account ? <a href="/login">Sign In!</a>
            </Form.Item>
          </Form>
        </div>
        <div>
          <div className={styles["element-1"]}></div>
          <div className={styles["element-2"]}></div>
        </div>
      </div>
    </div>
  );
}
export default Register;
