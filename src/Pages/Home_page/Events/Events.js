import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Allevents from '../../Allevents/Allevents';
import './Events.css';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://mighty-reaches-03341.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))

    }, [])

    if (!(events[0]?.event_name)) {
        return <div>
            <div className='d-flex justify-content-center'>
                <Spinner animation="border" variant="primary" />
            </div>
        </div>
    }
    return (
        <div className='services mb-5' id='service'>
            <div className='m-3 bg-primary text-center text-white'>
                <h1>Up Comming Events</h1>
            </div>
            <div>
                <Container className='event-container'>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {events.map(event => (
                            <Allevents
                                key={event._id}
                                events={event}
                            ></Allevents>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Events;