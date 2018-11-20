import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const INITIAL_STATE = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose()
  )
);

export default store;
