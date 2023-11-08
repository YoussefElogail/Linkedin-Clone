import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import articlesReducer from "../reducers/articlesReducer";

export const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articlesReducer
})
