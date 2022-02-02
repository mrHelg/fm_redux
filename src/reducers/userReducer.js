import produce from 'immer';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

const handlerRequest = produce((draftState, action) => {
  draftState.isFetching = true;
});

const handlerError = produce((draftState, action) => {
  const {
    payload: { error },
  } = action;
  draftState.error = error;
});

const handlers = {
  [ACTION_TYPES.CLEAR_USER_ERROR]: produce((draftState, action) => {
    draftState.error = null;
    draftState.isFetching = false;
  }),
  [ACTION_TYPES.GET_USERS_REQUEST]: handlerRequest,
  [ACTION_TYPES.CREATE_USER_REQUEST]: handlerRequest,
  [ACTION_TYPES.GET_USERS_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { users: newUsers },
    } = action;
    draftState.isFetching = false;
    draftState.users.push(...newUsers);
  }),
  [ACTION_TYPES.CREATE_USER_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { user },
    } = action;
    draftState.isFetching = false;
    draftState.users.push(user);
  }),

  [ACTION_TYPES.GET_USERS_ERROR]: handlerError,
  [ACTION_TYPES.CREATE_USER_ERROR]: handlerError,
};

function userReducer(state = initialState, action) {
  const { type } = action;
  const handler = handlers[type];
  if (handler) {
    return handler(state, action);
  }
  return state;
}

export default userReducer;
