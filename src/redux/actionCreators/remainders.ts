import { type } from "@testing-library/user-event/dist/type";
import { addRemainderAction } from "../actions/remainders";

// FSA {
//   type,
//   meta,
//   payload,
//   error,
// }

export type AddReminder = typeof addRemainder;
export const addRemainder = () => dispatch => {
  dispatch(addRemainderAction());
}

export type DeletReminder = typeof deleteReminder;
export const deleteReminder = () => dispatch => {
  dispatch(addRemainderAction());
}

type ReminderActions = AddReminder | DeletReminder;