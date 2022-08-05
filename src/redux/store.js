import { createStore } from "react-redux";
import { applyMiddlewares } from 'redux';
import thunk from 'redux-thunk';
import saga from 'redux-saga';
import logic from 'redux-logic';
import logger from 'redux-logger';

const middlewares = applyMiddlewares([
  thunk,
  saga,
  logger,
  logic,
]);

createStore(reducers, initialState, middlewares);