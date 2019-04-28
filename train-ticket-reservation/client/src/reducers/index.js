import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  ticket: itemReducer,
  error: errorReducer,
  auth: authReducer
});
