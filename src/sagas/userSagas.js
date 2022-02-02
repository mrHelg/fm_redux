import * as API from '../api';
import { put } from 'redux-saga/effects';
import * as UserActionCreators from '../actions/userCreators';

export function* createUserSaga(action) {
  try {
    const {
      data: {
        data: [user],
      },
    } = yield API.createUser(action.payload);
    yield put(UserActionCreators.createUserSuccess(user));
  } catch (error) {
    yield put(UserActionCreators.createUserError(error));
  }
}

export function* getUsersSaga(action) {
  try {
    const {
      data: { data: users },
    } = yield API.getUsers(action.payload);
    yield put(UserActionCreators.getUsersSuccess({users}));
  } catch (error) {
    yield put(UserActionCreators.getUsersError({error}));
  }
}
