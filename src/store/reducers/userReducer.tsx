export default function userReducer(state = [0], action) {
  switch (action.type) {
    case "addUser":
      console.log("User added");
      return [...state, state[state.length - 1] + 1];
    case "removeUser":
      console.log("User removed");
      return [...state, state[state.length - 1] + 2];
    default:
      return state;
  }
}
