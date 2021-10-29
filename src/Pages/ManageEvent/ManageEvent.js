import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './ManageEvent.css';

const ManageEvent = () => {
    const [bookedevents, setBookevents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageEvent')
            .then(res => res.json())
            .then(data => setBookevents(data))
    }, [])
    console.log(bookedevents);
    return (
        <div>
            <h1 className='text-center '>Here is all order</h1>
            <div>
                {bookedevents.map(item => <>
                    <Container>
                        <div className='manage-event mb-3 px-5 py-3'>
                            <h3>Event Name: {item.event_name}</h3>
                            <p className='mb-1'>Name: {item.name}</p>
                            <p className='mb-1'>User email: {item.email}</p>
                            <p className='mb-1'>Address: {item.address}</p>
                            <p className='mb-1'>Phone Number: {item.phone}</p>
                            <p className='mb-1'>Jurney Date: {item.date}</p>
                            <p className='mb-1'>Total Person: {item.person}</p>

                            <button className='btn btn-success '>Approve</button>
                            <button className='btn btn-danger ms-2'>Delete</button>
                        </div>
                    </Container>
                </>)}
            </div>
        </div>
    );
};

export default ManageEvent;