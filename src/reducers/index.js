import { combineReducers, } from "redux";
import { messageReducer, } from "./messageReducer";

const reducer = combineReducers({
	messageReducer,
});

export default reducer;
