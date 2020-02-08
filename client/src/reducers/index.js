import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";

// to combine reducers
export default combineReducers({
  auth: authReducer,
  form: formReducer
});
