import { Button, Col, Flex, Form, Input, Row } from "antd";
import styles from "./share-opinion.module.css";

function ShareOpinion() {
  const [form] = Form.useForm();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "50px",
        marginTop: "50px",
      }}
    >
      <Form
        form={form}
        scrollToFirstError
        style={{
          paddingBlock: 32,
          backgroundColor: "#F6F6F6",
          borderRadius: "24px",
          width: "80%",
        }}
        // labelCol={{ span: 6 }}
        wrapperCol={{ offset: 1 }}
      >
        <Row justify="center">
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <h1
              className={styles["title"]}
              style={{ textAlign: "center", width: "300px" }}
            >
              Share your opinion with us
            </h1>
          </Col>
          <Col span={18} sm={10}>
            <Form.Item
              name="name"
              className={styles["infor-user"]}
              rules={[{ required: true }]}
            >
              <Input placeholder="Your name" />
            </Form.Item>

            <Form.Item
              name="email"
              className={styles["infor-user"]}
              rules={[{ required: true }]}
            >
              <Input placeholder="Your email" />
            </Form.Item>
          </Col>
          <Col span={18} sm={10}>
            <Form.Item name="opinion" className={styles["opinion-user"]}>
              <Input.TextArea placeholder="Write something" rows={4} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
            className={styles["submit-btn"]}
          >
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default ShareOpinion;
