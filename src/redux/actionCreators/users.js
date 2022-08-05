import { addUser } from '../actions/users';

export function addUserActionCreator() {
  return dispatch => {
    dispatch(addUserRequest())
  }
}

export function deleteUserActionCreator() {
  return dispatch => {
    dispatch(deleteUserRequest())
  }
}