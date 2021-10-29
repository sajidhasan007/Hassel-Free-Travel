import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { user } = useAuth();
    const { eventid } = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {

        fetch(`http://localhost:5000/event/${eventid}`)
            .then(res => res.json())
            .then(data => setEvent(data[0]))

    }, [])
    //console.log(event);

    return (
        <div className='mb-5'>
            <div>
                <h1>Please Confirm Your Booking</h1>
                <h2>Your Event Name: {event.event_name}</h2>
                <h3>Event Fee: {event.event_fee}</h3>
                <h3>Starting Date: {event.date}</h3>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='book-from'>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={user.email} disabled='disabled' />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={user.name} disabled='disabled' />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Selec Your Starting Station</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Abdullah Pur</option>
                                    <option>Gaptoli</option>
                                    <option>Saydabad</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Person</Form.Label>
                                <Form.Control type='number' />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" className='btn btn-primary' type="submit">
                            Confirm Book
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Booking;