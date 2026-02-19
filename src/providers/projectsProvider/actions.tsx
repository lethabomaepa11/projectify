import { createAction } from "redux-actions";
import { IProject, IProjectStateContext } from "./context";

export enum ProjectActionEnums {
  //create
  createProjectPending = "CREATE_PROJECT_PENDING",
  createProjectSuccess = "CREATE_PROJECT_SUCCESS",
  createProjectError = "CREATE_PROJECT_ERROR",
  //read
  getProjectPending = "GET_PROJECT_PENDING",
  getProjectSuccess = "GET_PROJECT_SUCCESS",
  getProjectError = "GET_PROJECT_ERROR",

  getProjectsPending = "GET_PROJECTS_PENDING",
  getProjectsSuccess = "GET_PROJECTS_SUCCESS",
  getProjectsError = "GET_PROJECTS_ERROR",
  //update
  updateProjectPending = "UPDATE_PROJECT_PENDING",
  updateProjectSuccess = "UPDATE_PROJECT_SUCCESS",
  updateProjectError = "UPDATE_PROJECT_ERROR",
  //delete
  deleteProjectPending = "DELETE_PROJECT_PENDING",
  deleteProjectSuccess = "DELETE_PROJECT_SUCCESS",
  deleteProjectError = "DELETE_PROJECT_ERROR",
}

//actions
//create
export const createProjectPending = createAction<IProjectStateContext>(
  ProjectActionEnums.createProjectPending,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const createProjectError = createAction<IProjectStateContext>(
  ProjectActionEnums.createProjectError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
export const createProjectSuccess = createAction<
  IProjectStateContext,
  IProject
>(ProjectActionEnums.createProjectSuccess, (project: IProject) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  project,
}));

//read
export const getProjectPending = createAction<IProjectStateContext>(
  ProjectActionEnums.getProjectPending,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const getProjectError = createAction<IProjectStateContext>(
  ProjectActionEnums.getProjectError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
export const getProjectSuccess = createAction<IProjectStateContext, IProject>(
  ProjectActionEnums.getProjectSuccess,
  (project: IProject) => ({
    isPending: false,
    isError: false,
    isSuccess: true,
    project,
  }),
);

export const getProjectsPending = createAction<IProjectStateContext>(
  ProjectActionEnums.getProjectsPending,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const getProjectsError = createAction<IProjectStateContext>(
  ProjectActionEnums.getProjectsError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
export const getProjectsSuccess = createAction<
  IProjectStateContext,
  IProject[]
>(ProjectActionEnums.getProjectsSuccess, (projects: IProject[]) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  projects,
}));

//update
export const updateProjectPending = createAction<IProjectStateContext>(
  ProjectActionEnums.updateProjectPending,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const updateProjectError = createAction<IProjectStateContext>(
  ProjectActionEnums.updateProjectError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
export const updateProjectSuccess = createAction<
  IProjectStateContext,
  IProject
>(ProjectActionEnums.updateProjectSuccess, (project: IProject) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  project,
}));

//delete
export const deleteProjectPending = createAction<IProjectStateContext>(
  ProjectActionEnums.deleteProjectPending,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const deleteProjectError = createAction<IProjectStateContext>(
  ProjectActionEnums.deleteProjectError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
export const deleteProjectSuccess = createAction<IProjectStateContext>(
  ProjectActionEnums.deleteProjectSuccess,
  () => ({
    isPending: false,
    isError: false,
    isSuccess: true,
  }),
);
