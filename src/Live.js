import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import mqtt from 'mqtt';

const LiveSocketIO = ({ eventName }) => {
	const [content, setContent] = useState('');

	const socketIO = io();
	socketIO.on(eventName, setContent);

	return <div>{content}</div>;
};

const LiveMQTT = ({ eventName }) => {
	const [content, setContent] = useState('');
	const [connected, setConnected] = useState(false);

	const subscribe = async () => {
		while (!connected) {
			const client = mqtt.connect('mqtts://r6470512.us-east-1.emqx.cloud', {
				// host: 'mqtt://r6470512.us-east-1.emqx.cloud',
				// port: 15881,
				protocol: 'mqtts',
				username: 'ReactClient',
				password: '1998',
				'client-ID': 'react-client',
			});
			//setup the callbacks
			client.on('connect', function () {
				console.log('Connected');
			});

			client.on('error', function (error) {
				console.log(error);
			});

			client.subscribe(eventName, () => console.log('subscribed'));

			client.on('message', (topic, message) => {
				console.log(topic, message);
				setContent(message.toString());
				client.end();
			});
		};
	};

	useEffect(() => { subscribe(); });

	return (
		<div>{content}</div>
	);
};

export { LiveSocketIO, LiveMQTT };