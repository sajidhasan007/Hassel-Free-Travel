import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Allevents from '../../Allevents/Allevents';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))

    }, [])

    console.log(events);
    return (
        <div className='services mb-5' id='service'>
            <div className='m-3 bg-primary text-center text-white'>
                <h1>Up Comming Events</h1>
            </div>
            <div>
                <Container>
                    <Row xs={1} md={3} className="g-4">
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