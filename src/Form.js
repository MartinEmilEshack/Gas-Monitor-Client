import React, { Component } from 'react';
import { Navbar, Container, Card } from 'react-bootstrap';
import { Col, Row } from 'antd';
import img from './air-aqua.png';
import img2 from './MQ3.jpg';
import { LiveMQTT } from './Live.js';

class Form extends Component {
	render() {
		return (
			<div>
				<div>
					<Navbar bg="dark" variant="dark">
						<Navbar.Brand >
							<img
								alt=""
								src={img}
								width="40"
								height="40"
								className="d-inline-block align-top"
							/>{' '}
                    IOT Based Air Pollution Monitor System
                    </Navbar.Brand>
					</Navbar>
					<br />
					<Navbar bg="light">
						<Navbar.Brand>Ahmed - Omar - Marwan - Martin - Maria</Navbar.Brand>
					</Navbar>
					<br />
				</div>
				<div  >
					<Container className="site-card-wrapper" >
						<Row gutter={16}>
							<Col span={8}>
								<Card style={{ width: '14rem' }}>
									<Card.Img variant="top" src={img2} />
									<Card.Body>
										<Card.Title>Alcohol Density</Card.Title>
										<Card.Text>
											<LiveMQTT eventName='alcohol_density' />
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default Form;