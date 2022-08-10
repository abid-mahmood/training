export default function productReducer(state = [0], action) {
  switch (action.type) {
    case "addProduct":
      console.log("Product added");
      return [...state, state[state.length - 1] + 1];
    case "removeProduct":
      console.log("Product removed");
      return [...state, state[state.length - 1] + 2];
    default:
      return state;
  }
}
