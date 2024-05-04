import { combineReducers } from "redux";
import Form from "./form.reducer";

const rootReducer = combineReducers({
  form: Form,
});

const appReducer = (state, action) => {
  return rootReducer(state, action);
};

export default appReducer;
