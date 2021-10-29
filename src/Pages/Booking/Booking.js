import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { user } = useAuth();
    const { eventid } = useParams();
    const [event, setEvent] = useState({});
    const addressRef = useRef();
    const phoneRef = useRef();
    const stationRef = useRef();
    const personRef = useRef();

    useEffect(() => {

        fetch(`http://localhost:5000/event/${eventid}`)
            .then(res => res.json())
            .then(data => setEvent(data[0]))

    }, [])
    //console.log(event);
    const handlefromsubmit = (e) => {
        let event_book = {
            email: user.email,
            name: user.name,
            event_name: event.event_name,
            event_fee: event.event_fee,
            date: event.date,
            address: addressRef.current.value,
            phone: phoneRef.current.value,
            station: stationRef.current.value,
            person: personRef.current.value,
            status: 'Pending'

        }
        //console.log(event_book);
        // console.log(stationRef.current.value);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event_book)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('You have booked successfully');
                    e.target.reset();
                    event_book = {};
                }
            })


        e.preventDefault();
    }
    return (
        <div className='mb-5'>
            <div className='text-center'>
                <h1>Please Confirm Your Booking</h1>
                <h2>Your Event Name: {event.event_name}</h2>
                <h3>Event Fee: {event.event_fee}</h3>
                <h3>Starting Date: {event.date}</h3>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='book-from'>
                    <Form onSubmit={handlefromsubmit}>
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
                            <Form.Control placeholder="Apartment, studio, or floor" ref={addressRef} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control ref={phoneRef} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Selec Your Starting Station</Form.Label>
                                <Form.Select defaultValue="Abdullah Pur" ref={stationRef}>
                                    <option>Abdullah Pur</option>
                                    <option>Gaptoli</option>
                                    <option>Saydabad</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Person</Form.Label>
                                <Form.Control type='number' ref={personRef} />
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