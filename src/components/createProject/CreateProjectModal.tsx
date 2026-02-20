import React, { useState } from "react";
import { Button, Form, FormProps, Input, Modal } from "antd";
import { IProject } from "../../providers/projectsProvider/context";
import { useProjectActions } from "../../providers/projectsProvider";
import getUserObject from "../../utils/getUserObject";
type FieldType = {
  title?: string;
  description?: string;
  url?: string;
};
const CreateProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { createProject } = useProjectActions();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish: FormProps<FieldType>["onFinish"] = async (
    values: IProject,
  ) => {
    createProject({ ...values, user_id: getUserObject()?.id || "" });
    setIsModalOpen(false);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button style={{ margin: 20 }} type="primary" onClick={showModal}>
        Add Project
      </Button>
      <Modal
        title="Create a Project"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          style={{ maxWidth: 600, padding: 50 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1>Create a Project</h1>
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[
              { required: true, message: "Please input your project title!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your project description!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="url"
            name="url"
            rules={[
              { required: true, message: "Please input your project url!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Create Project
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateProjectModal;
