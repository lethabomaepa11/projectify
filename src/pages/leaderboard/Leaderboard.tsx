import React, { useEffect } from "react";
import {
  useProjectActions,
  useProjectState,
} from "../../providers/projectsProvider";
import { Table, Tag, Typography } from "antd";

const { Title } = Typography;

const Leaderboard = () => {
  const { getAllProjects } = useProjectActions();
  const { projects, isSuccess } = useProjectState();

  useEffect(() => {
    getAllProjects();
  }, []);

  const columns = [
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Project Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      render: (grade: number) => (
        <Tag color={grade >= 75 ? "green" : grade >= 50 ? "orange" : "red"}>
          {grade}%
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "graded" ? "blue" : "default"}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
  ];

  const dataSource = projects.map((project) => ({
    key: project.id,
    studentName: project.studentName || "Unknown Student",
    title: project.title,
    grade: project.grade || 0,
    status: project.status || "pending",
  }));

  return (
    <div>
      <Title level={2}>Project Leaderboard</Title>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        loading={!isSuccess}
      />
    </div>
  );
};

export default Leaderboard;
