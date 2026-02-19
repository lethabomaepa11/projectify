import React, { useEffect } from "react";
import {
  useProjectActions,
  useProjectState,
} from "../../providers/projectsProvider";
import { Avatar, Card, Flex, Image } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Projects = () => {
  const { getProjects } = useProjectActions();
  const { isPending, projects, isSuccess } = useProjectState();

  useEffect(() => {
    getProjects();
    console.log(projects);
  }, []);

  return (
    <>
      {isPending && <div>Loading projects...</div>}
      {isSuccess && projects.length > 0 ? (
        <Flex wrap="wrap" gap="16px" style={{ overflow: "auto" }}>
          {projects.map((project) => (
            <Card
              key={project.id}
              style={{ width: 300 }}
              title={project.title}
              actions={[
                <SettingOutlined key="setting" />,
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
