import { handleActions } from "redux-actions";
import { IAuthStateContext, INITIAL_STATE } from "./context";
import { AuthActionEnums } from "./actions";

export const AuthReducer = handleActions<IAuthStateContext, IAuthStateContext>(
  {
    [AuthActionEnums.registerStudentPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.registerStudentSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.registerStudentError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.registerTutorPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.registerTutorSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.registerTutorError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.loginUserPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.loginUserSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.loginUserError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
