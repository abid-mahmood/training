import remindersReducer from "./reminders";

export default function rootReducer(state = {}, action) {
  return {
    reminders: remindersReducer(state.reminders, action),
  };
}
