import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const createStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
