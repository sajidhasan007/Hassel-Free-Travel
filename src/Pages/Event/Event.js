import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router';

const Event = () => {
    const location = useLocation();
    const { eventid } = useParams();
    console.log(location);

    const [event, setEvent] = useState([]);

    useEffect(() => {
        //console.log('inside from useeffect');

        fetch(`https://mighty-reaches-03341.herokuapp.com/event/${eventid}`)
            .then(res => res.json())
            .then(data => setEvent(data))

    }, [])
    //console.log(event.event_name);
    const particularservice = event[0] || {};
    //console.log(particularservice.max_mamber);
    return (

        <div className='d-flex justify-content-center'>

            <div>
                <Card style={{ width: '20rem' }} >
                    <Card.Img variant="top" src={particularservice?.event_img} />
                    <Card.Body>
                        <Card.Title>{particularservice?.event_name}</Card.Title>
                        <h6>Event Fee: {particularservice?.event_fee}</h6>
                        <h6>Event Date: {particularservice.date}</h6>
                        <h6>Max Team Size: {particularservice.max_mamber}</h6>
                        <Card.Text>
                            {particularservice?.description}
                        </Card.Text>

                        <Link to={`/book/${particularservice._id}`}><button className="btn btn-warning">Book Event</button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Event;