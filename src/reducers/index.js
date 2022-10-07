import { combineReducers } from "redux";
import todoReducer from "./toDoReducer";

const rootReducer = combineReducers({
    todos:todoReducer
})

export default rootReducer;