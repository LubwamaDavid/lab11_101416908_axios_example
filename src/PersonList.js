import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './PersonList.css';

function PersonList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=10') 
            .then(response => {
                setUsers(response.data.results);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);

    return (
        <Container className="user-list-container">
            <h1 className="text-center user-list-title">User List</h1>
            <Row>
                {users.map((user, index) => (
                    <Col key={index} md={12} className="mb-4">
                        <Card className="user-card">
                            <Card.Body>
                                <Row>
                                    <Col md={3} className="text-center">
                                        <Card.Img
                                            variant="top"
                                            src={user.picture.large}
                                            alt={`${user.name.first} ${user.name.last}`}
                                            className="user-image"
                                        />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Title className="user-name">
                                            {user.name.title} {user.name.first} {user.name.last}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            User Name: {user.login.username}
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <strong>Gender:</strong> {user.gender.toUpperCase()} <br />
                                            <strong>Time Zone Description:</strong> {user.location.timezone.description} <br />
                                            <strong>Address:</strong> {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country} - {user.location.postcode} <br />
                                            <strong>Email:</strong> {user.email} <br />
                                            <strong>Birth Date and Age:</strong> {user.dob.date.substring(0, 10)} ({user.dob.age}) <br />
                                            <strong>Register Date:</strong> {user.registered.date.substring(0, 10)} <br />
                                            <strong>Phone#:</strong> {user.phone} <br />
                                            <strong>Cell#:</strong> {user.cell}
                                        </Card.Text>
                                        <Button variant="info">Details</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PersonList;
