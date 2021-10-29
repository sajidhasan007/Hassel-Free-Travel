import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Event = () => {

    const { eventid } = useParams();

    const [event, setEvent] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/event/${eventid}`)
            .then(res => res.json())
            .then(data => setEvent(data))

    }, [])
    console.log();
    const particularservice = event[0] || {};
    console.log(particularservice);
    return (

        <div className='d-flex justify-content-center'>

            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={particularservice?.event_img} />
                    <Card.Body>
                        <Card.Title>{particularservice?.event_name}</Card.Title>
                        <h6>Event Fee: {particularservice?.event_fee}</h6>
                        <h6>Event Date: {particularservice.date}</h6>
                        <h6>Max Team Size: {particularservice.max_mamber}</h6>
                        <Card.Text>
                            {particularservice?.description}
                        </Card.Text>

                        <Link to={`/home`}><button className="btn btn-warning">Go-Back</button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Event;