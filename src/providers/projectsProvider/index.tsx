import { useContext, useReducer } from "react";
import { getAxiosInstance } from "../../utils/axiosInstance";
import {
  INITIAL_STATE,
  IProject,
  ProjectActionContext,
  ProjectStateContext,
} from "./context";
import { ProjectReducer } from "./reducer";
import {
  createProjectError,
  createProjectPending,
  createProjectSuccess,
  deleteProjectError,
  deleteProjectPending,
  deleteProjectSuccess,
  getProjectsError,
  getProjectsPending,
  getProjectsSuccess,
  getProjectSuccess,
  updateProjectError,
  updateProjectPending,
  updateProjectSuccess,
} from "./actions";
import { App } from "antd";

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const instance = getAxiosInstance();
  const [state, dispatch] = useReducer(ProjectReducer, INITIAL_STATE);
  const { notification } = App.useApp();

  const getAllProjects = async () => {
    dispatch(getProjectsPending());
    await instance
      .get("/projects")
      .then((response) => {
        dispatch(getProjectsSuccess(response.data));
        notification.success({
          title: "Successfully fetched projects",
        });
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        dispatch(getProjectsError());
        notification.error({
          title: "Failed to fetch projects",
          description: error.message,
        });
      });
  };

  const getUserProjects = async (userId: string) => {
    dispatch(getProjectsPending());
    await instance
      .get("/projects")
      .then((response) => {
        const userProjects = response.data.filter(
          (project: IProject) => project.user_id === userId,
        );

        if (userProjects.length === 0) {
          notification.info({
            title: "No projects found for this user",
          });
          return;
        }

        dispatch(getProjectsSuccess(userProjects));
        notification.success({
          title: "Successfully fetched projects",
        });
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        dispatch(getProjectsError());
        notification.error({
          title: "Failed to fetch projects",
          description: error.message,
        });
      });
  };
  const getProject = async (id: string) => {
    dispatch(getProjectsPending());
    await instance
      .get(`/projects/${id}`)
      .then((response) => {
        dispatch(getProjectSuccess(response.data));
        notification.success({
          title: "Successfully fetched project",
        });
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
        dispatch(getProjectsError());
        notification.error({
          title: "Failed to fetch project",
          description: error.message,
        });
      });
  };
  const createProject = async (project: IProject) => {
    dispatch(createProjectPending());
    await instance
      .post("/projects", project)
      .then((response) => {
        dispatch(createProjectSuccess(response.data));
        getUserProjects(project.user_id);
        state.projects.sort((a, b) => b.grade - a.grade);
        notification.success({
          title: "Successfully created project",
        });
      })
      .catch((error) => {
        console.error("Error creating project:", error);
        dispatch(createProjectError());
        notification.error({
          title: "Failed to create project",
          description: error.message,
        });
      });
  };

  const updateProject = async (project: IProject) => {
    dispatch(updateProjectPending());
    await instance
      .put(`/projects/${project.id}`, project)
      .then((response) => {
        dispatch(updateProjectSuccess(response.data));
        notification.success({
          title: "Successfully updated project",
        });
      })
      .catch((error) => {
        console.error("Error updating project:", error);
        dispatch(updateProjectError());
        notification.error({
          title: "Failed to update project",
          description: error.message,
        });
      });
  };
  const deleteProject = async (id: string) => {
    dispatch(deleteProjectPending());
    await instance
      .delete(`/projects/${id}`)
      .then(() => {
        dispatch(
          deleteProjectSuccess(
            state.projects?.filter((project) => project.id !== id) || [],
          ),
        );
        notification.success({
          title: "Successfully deleted project",
        });
      })
      .catch((error) => {
        console.error("Error deleting project:", error);
        dispatch(deleteProjectError());
        notification.error({
          title: "Failed to delete project",
          description: error.message,
        });
      });
  };

  return (
    <ProjectStateContext.Provider value={state}>
      <ProjectActionContext.Provider
        value={{
          createProject,
          getProject,
          getAllProjects,
          getUserProjects,
          updateProject,
          deleteProject,
        }}
      >
        {children}
      </ProjectActionContext.Provider>
    </ProjectStateContext.Provider>
  );
};

export const useProjectState = () => {
  const context = useContext(ProjectStateContext);
  if (!context) {
    throw new Error("useProjectState must be used within a ProjectProvider");
  }
  return context;
};

export const useProjectActions = () => {
  const context = useContext(ProjectActionContext);
  if (!context) {
    throw new Error("useProjectActions must be used within a ProjectProvider");
  }
  return context;
};
