import io from "socket.io-client";
import { actionTypes, messageActions, } from '../controllers';

const {
	SEND_LOCAL_MESSAGE,
	SEND_GLOBAL_MESSAGE,
	SEND_BROADCAST_MESSAGE,
} = actionTypes;
const {
	updateLocalMessageAction,
	updateGlobalMessageAction,
	updateBroadcastMessageAction,
} = messageActions;

const socket = io.connect("http://localhost:3000", {
	reconnection: true,
	reconnectionDelay: 1000,
	reconnectionDelayMax: 5000,
	reconnectionAttempts: Infinity
});

const socketMiddleware = ({ dispatch, getState }) => next => action => {
	const result = next(action);

	if (socket) {
		switch (action.type) {
			case SEND_LOCAL_MESSAGE: {
				socket.emit(action.type, action.message);
				break;
			}
			case SEND_GLOBAL_MESSAGE: {
				socket.emit(action.type, action.message);
				break;
			}
			case SEND_BROADCAST_MESSAGE: {
				socket.emit(action.type, action.message);
				break;
			}
			default:
				break;
		}
	}
	return result;
};

export default socketMiddleware;

export const initSocket = ({ dispatch, }) => {
	if (socket) {
		socket.on(SEND_LOCAL_MESSAGE, message => {
			// subscribe and do something.
			console.log(message);
			dispatch(updateLocalMessageAction(message));
		})
		socket.on(SEND_GLOBAL_MESSAGE, message => {
			// subscribe and do something.
			console.log(message);
			dispatch(updateGlobalMessageAction(message));
		})
		socket.on(SEND_BROADCAST_MESSAGE, message => {
			// subscribe and do something.
			console.log(message);
			dispatch(updateBroadcastMessageAction(message));
		})
	}
};
