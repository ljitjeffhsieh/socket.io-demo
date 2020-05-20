import { createStore, applyMiddleware, } from "redux";
import thunkMiddleWare from 'redux-thunk';
import socketMiddleware, { initSocket, } from "../middleWares";
import reducer from "../reducers";

function create (initState = {}) {
	const middleWares = [thunkMiddleWare, socketMiddleware];
	const store = createStore(reducer, initState, applyMiddleware(...middleWares));
	initSocket(store);

	return store;
}

export default create;