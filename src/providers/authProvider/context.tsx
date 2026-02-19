import { createContext } from "react";

export interface IUser {
  id: string;
  fullname: string;
  email: string;
  password: string;
  role?: string;
  avatar?: string;
}

export interface IAuthStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  user?: IUser;
}

export interface IAuthActionContext {
  registerStudent: (user: IUser) => void;
  registerTutor: (user: IUser) => void;
  loginUser: (user: IUser) => void;
}
export const INITIAL_STATE: IAuthStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

//create context
export const AuthStateContext = createContext<IAuthStateContext>(INITIAL_STATE);
export const AuthActionContext = createContext<IAuthActionContext>(undefined);
