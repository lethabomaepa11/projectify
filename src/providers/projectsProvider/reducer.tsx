import { handleActions } from "redux-actions";
import { INITIAL_STATE, IProjectStateContext } from "./context";
import { ProjectActionEnums } from "./actions";

export const ProjectReducer = handleActions<
  IProjectStateContext,
  IProjectStateContext
>(
  {
    [ProjectActionEnums.createProjectPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.createProjectSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.createProjectError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.getProjectPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.getProjectSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.getProjectError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.getProjectsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.getProjectsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.getProjectsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.updateProjectPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.updateProjectSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.updateProjectError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.deleteProjectPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.deleteProjectSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProjectActionEnums.deleteProjectError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
