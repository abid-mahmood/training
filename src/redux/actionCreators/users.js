import { addUser } from '../actions/users';

export function addUserActionCreator() {
  return dispatch => {
    dispatch(addUser())
  }
}