import { createStore, combineReducers, applyMiddleware } from "redux";
import mainReducer from "./reducers/mainReducer.tsx";
import userReducer from "./reducers/userReducer.tsx";
import productReducer from "./reducers/productReducer.tsx";

const logger = (store) => (next) => (action) => {
  console.log("Logged Action: ", action);
  next(action);
};
const store = createStore(mainReducer, [], applyMiddleware(logger));
const rootReducer = combineReducers({
  userReducer,
  productReducer,
});

const tempStore = createStore(rootReducer);
export { store, tempStore };
