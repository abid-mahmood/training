import { ADD_REMINDER, DELETE_REMINDER } from "../constants";

function remindersReducer(state, action) {
  switch (action.type) {
    case ADD_REMINDER: {
      return state.concat(action.payload);
    }

    case DELETE_REMINDER: {
      return state.filter((el) => el.id != action.payload);
    }

    default:
      return state;
  }
}

export default remindersReducer;
