import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, {
  reminders: [{ text: "make a reminder app", time: "10:00 PM", id: 1 }],
});

export default store;
