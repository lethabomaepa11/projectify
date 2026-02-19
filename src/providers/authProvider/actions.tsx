import { createAction } from "redux-actions";
import { IAuthStateContext, IUser } from "./context";

export enum AuthActionEnums {
  //register student
  registerStudentPending = "REGISTER_STUDENT_PENDING",
  registerStudentSuccess = "REGISTER_STUDENT_SUCCESS",
  registerStudentError = "REGISTER_STUDENT_ERROR",
  //register tutor
  registerTutorPending = "REGISTER_TUTOR_PENDING",
  registerTutorSuccess = "REGISTER_TUTOR_SUCCESS",
  registerTutorError = "REGISTER_TUTOR_ERROR",
  //login user
  loginUserPending = "LOGIN_USER_PENDING",
  loginUserSuccess = "LOGIN_USER_SUCCESS",
  loginUserError = "LOGIN_USER_ERROR",
}

//actions

//register student
export const registerStudentPending = createAction<IAuthStateContext>(
  AuthActionEnums.registerStudentPending,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const registerStudentError = createAction<IAuthStateContext>(
  AuthActionEnums.registerStudentError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
export const registerStudentSuccess = createAction<IAuthStateContext, IUser>(
  AuthActionEnums.registerStudentSuccess,
  (user: IUser) => ({
    isPending: false,
    isError: false,
    isSuccess: true,
    user,
  }),
);

//register tutor
export const registerTutorPending = createAction<IAuthStateContext>(
  AuthActionEnums.registerTutorPending,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const registerTutorError = createAction<IAuthStateContext>(
  AuthActionEnums.registerTutorError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
export const registerTutorSuccess = createAction<IAuthStateContext, IUser>(
  AuthActionEnums.registerTutorSuccess,
  (user: IUser) => ({
    isPending: false,
    isError: false,
    isSuccess: true,
    user,
  }),
);

//login user
export const loginUserPending = createAction<IAuthStateContext>(
  AuthActionEnums.loginUserPending,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const loginUserError = createAction<IAuthStateContext>(
  AuthActionEnums.loginUserError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
export const loginUserSuccess = createAction<IAuthStateContext, IUser>(
  AuthActionEnums.loginUserSuccess,
  (user: IUser) => ({
    isPending: false,
    isError: false,
    isSuccess: true,
    user,
  }),
);
