import rootReducer from "./Reducer/CombineReducer";
import { createStore } from "redux";

const store =createStore(rootReducer)
export default store