export default function reducer(state = [], action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          time: action.payload.time,
          task: action.payload.task,
        },
      ];
    default:
      return state;
  }
}
