/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useReducer } from "react";
import { getAxiosInstance } from "../../utils/axiosInstance";
import {
  loginUserError,
  loginUserPending,
  loginUserSuccess,
  registerStudentError,
  registerStudentPending,
  registerStudentSuccess,
  registerTutorError,
  registerTutorPending,
  registerTutorSuccess,
} from "./actions";
import {
  AuthActionContext,
  AuthStateContext,
  INITIAL_STATE,
  IUser,
} from "./context";
import { AuthReducer } from "./reducer";
import { useNavigate } from "react-router-dom";
import { App } from "antd";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const instance = getAxiosInstance();
  const navigate = useNavigate();
  const { notification } = App.useApp();

  const registerStudent = async (user: IUser) => {
    dispatch(registerStudentPending());
    await instance
      .post("/users", user)
      .then(() => {
        dispatch(registerStudentSuccess(user));
        notification.success({
          title: "Successfully signed up",
        });

        navigate("/login");
      })
      .catch((error) => {
        notification.error({
          title: "Failed to signup",
          description: error,
        });

        dispatch(registerStudentError());
        notification.success({
          title: "Successfully signed up",
        });
      });
  };
  const registerTutor = async (user: IUser) => {
    dispatch(registerTutorPending());
    await instance
      .post("/users", { ...user, isTutor: true })
      .then(() => {
        dispatch(registerTutorSuccess(user));
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        notification.error({ title: "Failed to signup", description: error });
        dispatch(registerTutorError());
      });
  };

  const loginUser = async (user: IUser) => {
    dispatch(loginUserPending());
    notification.info({ title: "Loading..." });
    await instance
      .get("/users")
      .then((response) => {
        const sessionUser = response.data.find(
          (dbUser) =>
            dbUser.email == user.email && dbUser.password == user.password,
        );
        if (sessionUser?.id) {
          localStorage.setItem("auth_token", btoa(JSON.stringify(sessionUser)));
          dispatch(loginUserSuccess(sessionUser));
          notification.success({ title: "Logged in successfully" });
          if (sessionUser.isTutor) {
            navigate("/tutor");
          } else {
            navigate("/projects");
          }
        } else {
          notification.error({ title: "Failed to login" });
          dispatch(loginUserError());
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch(loginUserError());
      });
  };

  return (
    <AuthStateContext.Provider value={state}>
      <AuthActionContext.Provider
        value={{ registerStudent, registerTutor, loginUser }}
      >
        {children}
      </AuthActionContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
};

export const useAuthActions = () => {
  const context = useContext(AuthActionContext);
  if (!context) {
    throw new Error("useAuthActions must be used within a AuthProvider");
  }
  return context;
};
