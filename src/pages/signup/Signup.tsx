import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import { useAuthActions } from "../../providers/authProvider";
import { IUser } from "../../providers/authProvider/context";

type FieldType = {
  email?: string;
  fullname?: string;
  password?: string;
};

const Signup = () => {
  const { registerStudent } = useAuthActions();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values: IUser) => {
    await registerStudent(values);
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1>Create an Account</h1>
      <Form.Item<FieldType>
        label="Full name"
        name="fullname"
        rules={[{ required: true, message: "Please input your fullname!" }]}
      >
        <Input />
      </Form.Item>
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

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Create Account
        </Button>
      </Form.Item>

      <p>
        Already have an account? <NavLink to="/login">Login</NavLink>
      </p>
    </Form>
  );
};

export default Signup;
