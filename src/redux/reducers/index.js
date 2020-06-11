import { combineReducers } from "redux";
import Weather from "./weather";
const appReducer = combineReducers({
  Weather,
});

export default appReducer;
