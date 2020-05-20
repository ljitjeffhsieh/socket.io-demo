import { actionTypes } from '../controllers';
const {
	UPDATE_LOCAL_MESSAGE,
	UPDATE_GLOBAL_MESSAGE,
	UPDATE_BROADCAST_MESSAGE
} = actionTypes;

const initState = {

}

export function messageReducer(state = initState, action) {
	switch (action.type) {
		case UPDATE_LOCAL_MESSAGE: {
			return { ...state, local_message: action.message };
		}
		case UPDATE_GLOBAL_MESSAGE: {
			return { ...state, global_message: action.message };
		}
		case UPDATE_BROADCAST_MESSAGE: {
			return { ...state, broadcast_message: action.message };
		}
		default:
			return state;
	}
}