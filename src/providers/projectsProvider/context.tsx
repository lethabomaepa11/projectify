import { createContext } from "react";

export interface IProject {
  id: string;
  user_id: string;
  title: string;
  description: string;
  points: number;
  url: string;
  image?: string;
}

export interface IProjectStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  project?: IProject;
  projects?: IProject[];
}

export interface IProjectActionContext {
  //create
  createProject: (project: IProject) => void;
  //read
  getProject: (id: string) => void;
  getProjects: () => void;
  //update
  updateProject: (project: IProject) => void;
  //delete
  deleteProject: (id: string) => void;
}
export const INITIAL_STATE: IProjectStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};
//create context
export const ProjectStateContext =
  createContext<IProjectStateContext>(INITIAL_STATE);
export const ProjectActionContext =
  createContext<IProjectActionContext>(undefined);
