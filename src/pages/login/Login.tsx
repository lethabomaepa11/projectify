import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import { useAuthActions } from "../../providers/authProvider";
import { IUser } from "../../providers/authProvider/context";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const { loginUser } = useAuthActions();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values: IUser) => {
    await loginUser(values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      style={{ maxWidth: 600, padding: 50 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1>Login to your account</h1>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        label={null}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <p>
        Do not have an account? <NavLink to="/signup">Signup</NavLink>
      </p>
    </Form>
  );
};

export default Login;
