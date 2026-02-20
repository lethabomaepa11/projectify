import React, { useState } from "react";
import { Modal, InputNumber, Space, Typography, Tag } from "antd";
import { IProject } from "../../providers/projectsProvider/context";

const { Text } = Typography;

interface GradeProjectModalProps {
  visible: boolean;
  onCancel: () => void;
  onGrade: (grade: number) => void;
  project: IProject | null;
}

const GradeProjectModal: React.FC<GradeProjectModalProps> = ({
  visible,
  onCancel,
  onGrade,
  project,
}) => {
  const [grade, setGrade] = useState<number>(project?.grade || 0);

  if (!project) return null;

  return (
    <Modal
      title={`Grade Project: ${project.title}`}
      open={visible}
      onCancel={onCancel}
      onOk={() => onGrade(grade)}
      okText="Submit Grade"
      cancelText="Cancel"
      width={600}
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        <div>
          <Text strong>Student: </Text>
          <Text>{project.studentName || "Unknown Student"}</Text>
        </div>
        <div>
          <Text strong>Project URL: </Text>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.url}
          </a>
        </div>
        <div style={{ marginTop: 16 }}>
          <Text strong>Current Grade: </Text>
          {project.grade ? (
            <Tag
              color={
                project.grade >= 75
                  ? "green"
                  : project.grade >= 50
                    ? "orange"
                    : "red"
              }
            >
              {project.grade}%
            </Tag>
          ) : (
            <Tag color="default">Not graded yet</Tag>
          )}
        </div>
        <div style={{ marginTop: 16 }}>
          <Text strong>Enter New Grade (0-100): </Text>
          <InputNumber
            min={0}
            max={100}
            defaultValue={project.grade || 0}
            style={{ width: "100%" }}
            onChange={(value) => setGrade(value || 0)}
          />
        </div>
      </Space>
    </Modal>
  );
};

export default GradeProjectModal;
