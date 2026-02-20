import React, { useEffect } from "react";
import {
  useProjectActions,
  useProjectState,
} from "../../providers/projectsProvider";
import { App, Button, Card, Flex, Image } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import CreateProjectModal from "../../components/createProject/CreateProjectModal";
import getUserObject from "../../utils/getUserObject";

const Projects = () => {
  const { getUserProjects, deleteProject } = useProjectActions();
  const { isPending, projects, isSuccess } = useProjectState();
  const { modal } = App.useApp();

  useEffect(() => {
    getUserProjects(getUserObject()?.id || "");
  }, []);

  return (
    <>
      <div>
        <CreateProjectModal />
      </div>
      {isSuccess && projects.length > 0 ? (
        <Flex wrap="wrap" gap="16px" style={{ overflow: "auto" }}>
          {projects.map((project) => (
            <Card
              key={project.id}
              style={{ width: 300 }}
              title={project.title}
              actions={[
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
            </Card>
          ))}
        </Flex>
      ) : (
        <div>No projects available.</div>
      )}
    </>
  );
};

export default Projects;
