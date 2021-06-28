import { io } from 'socket.io-client';

class Event {
	constructor() {
		this.socketIO = io();
	}

	/***
	 * @param {string} eventName
	 * @param {Function} task
	 */
	onReceive(eventName, task) {
		this.socketIO.on(eventName, task);
	}

	/***
	 * @param {string} eventName
	 * @param {any} data
	 */
	broadcast(eventName, data) {
		this.socketIO.emit(eventName, data);
	}
}