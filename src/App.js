import React, { useState, useEffect, } from 'react';
import { Card, Input, Button, } from 'antd';
import { connect } from 'react-redux';
import { messageActions, } from './controllers';
import 'antd/dist/antd.css';
import './App.css';

const {
	sendLocalMessageAction,
	sendGlobalMessageAction,
	sendBroadcastMessageAction,
} = messageActions;

function App({
	sendLocalMessageAction,
	sendGlobalMessageAction,
	sendBroadcastMessageAction,
	messageReducer,
}) {
	const [message, setMessage] = useState('');
	function _handleClickLocalMessage() {
		sendLocalMessageAction(message);
		setMessage('')
	}
	function _handleClickGlobalMessage() {
		sendGlobalMessageAction(message);
		setMessage('')
	}
	function _handleClickBroadCastMessage() {
		sendBroadcastMessageAction(message);
		setMessage('')
	}
	return (
		<div className="App">
			<header className="App-header">
			<div className="title">Stock.io demo (messages)</div>
			<Card>
				<p>Local: {messageReducer.local_message}</p>
				<p>Global: {messageReducer.global_message}</p>
				<p>Broadcast: {messageReducer.broadcast_message}</p>
			</Card>
			<Input onChange={e => setMessage(e.target.value)} value={message} />
			<div className="buttons">
				<Button onClick={() => { _handleClickLocalMessage()}} >Local message</Button>
				<Button onClick={() => { _handleClickGlobalMessage() }} >Global message</Button>
				<Button onClick={() => { _handleClickBroadCastMessage() }} >Broadcast message</Button>
			</div>
			</header>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		messageReducer: { ...state.messageReducer },
	};
}

function mapDispatchToProps(dispatch) {
	return {
		sendLocalMessageAction: (message) => dispatch(sendLocalMessageAction(message)),
		sendGlobalMessageAction: (message) => dispatch(sendGlobalMessageAction(message)),
		sendBroadcastMessageAction: (message) => dispatch(sendBroadcastMessageAction(message)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
