import React, { useEffect, useState } from "react";
import {
  useProjectActions,
  useProjectState,
} from "../../providers/projectsProvider";
import { App, Button, Card, Flex, Image, Tag, Typography } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import GradeProjectModal from "../../components/gradeProject/GradeProjectModal";
import { IProject } from "../../providers/projectsProvider/context";

const { Text } = Typography;

const Tutor = () => {
  const { getAllProjects, updateProject, deleteProject } = useProjectActions();
  const { projects, isSuccess } = useProjectState();
  const { modal } = App.useApp();
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    getAllProjects();
  }, []);

  const handleGradeSubmit = (grade: number) => {
    if (selectedProject) {
      const updatedProject = {
        ...selectedProject,
        grade: grade,
        status: "graded",
      };
      updateProject(updatedProject);
      setIsModalVisible(false);
      setSelectedProject(null);
    }
  };

  return (
    <>
      {isSuccess && projects.length > 0 ? (
        <Flex wrap="wrap" gap="16px" style={{ overflow: "auto" }}>
          {projects.map((project) => (
            <Card
              key={project.id}
              style={{ width: 300 }}
              title={project.title}
              actions={[
                <Button
                  type="primary"
                  icon={<CheckCircleOutlined />}
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalVisible(true);
                  }}
                  disabled={project.status === "graded"}
                  key="grade"
                >
                  {project.status === "graded" ? "Graded" : "Grade"}
                </Button>,
                <DeleteOutlined
                  onClick={() => {
                    modal.confirm({
                      title: "Delete Project",
                      content: "Are you sure you want to delete this project?",
                      onOk: () => deleteProject(project.id),
                    });
                  }}
                  style={{ color: "red" }}
                  key="delete"
                />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Image
                preview={false}
                style={{ pointerEvents: "none" }}
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
              />
              <div style={{ marginTop: 16 }}>
                <Text strong>Student: </Text>
                <Text>{project.studentName || "Unknown Student"}</Text>
              </div>
              <div style={{ marginTop: 8 }}>
                <Text strong>Status: </Text>
                <Tag color={project.status === "graded" ? "blue" : "default"}>
                  {project.status || "pending"}
                </Tag>
              </div>
              {project.grade && (
                <div style={{ marginTop: 8 }}>
                  <Text strong>Grade: </Text>
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
                </div>
              )}
            </Card>
          ))}
        </Flex>
      ) : (
        <div>No projects available.</div>
      )}
      <GradeProjectModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onGrade={handleGradeSubmit}
        project={selectedProject}
      />
    </>
  );
};

export default Tutor;
