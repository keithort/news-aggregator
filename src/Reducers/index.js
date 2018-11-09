import { combineReducers } from "redux";
import articles from "./ArticlesReducer";

const rootReducer = combineReducers({
  articles
});

export default rootReducer;
