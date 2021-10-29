import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

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
            <h1>Here is all order</h1>
            <div>
                {bookedevents.map(item => <>
                    <h3>{item.name}</h3>
                    <h3>{item.email}</h3>
                    <h3>Event Name:</h3>
                    <h3>{item.address}</h3>
                </>)}
            </div>
        </div>
    );
};

export default ManageEvent;