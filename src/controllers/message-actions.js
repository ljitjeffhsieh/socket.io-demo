import * as actionTypes from './action-types';

const {
	SEND_LOCAL_MESSAGE,
	SEND_GLOBAL_MESSAGE,
	SEND_BROADCAST_MESSAGE,
	UPDATE_LOCAL_MESSAGE,
	UPDATE_GLOBAL_MESSAGE,
	UPDATE_BROADCAST_MESSAGE,
} = actionTypes;

export function sendLocalMessageAction(message) {
	return {
		type: SEND_LOCAL_MESSAGE,
		message,
	}
}
export function sendGlobalMessageAction(message) {
	return {
		type: SEND_GLOBAL_MESSAGE,
		message,
	}
}
export function sendBroadcastMessageAction(message) {
	return {
		type: SEND_BROADCAST_MESSAGE,
		message,
	}
}
export function updateLocalMessageAction(message) {
	return {
		type: UPDATE_LOCAL_MESSAGE,
		message,
	}
}
export function updateGlobalMessageAction(message) {
	return {
		type: UPDATE_GLOBAL_MESSAGE,
		message,
	}
}
export function updateBroadcastMessageAction(message) {
	return {
		type: UPDATE_BROADCAST_MESSAGE,
		message,
	}
}
