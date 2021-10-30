import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Allevents.css';

const Allevents = (props) => {
    const events = props.events;
    //const { id, name, img } = events;
    const { _id, event_name, event_img, description, event_fee, max_mamber, date } = events;
    // console.log(_id, event_name, event_img);
    return (

        <Col key={events._id} >
            <Card className='h-100 div1'>
                <div className='d-flex justify-content-center overflow'>
                    <Card.Img className='my-coustom d-flex justify-content-center' variant="top" src={event_img} />
                </div>
                <Card.Body>
                    <Card.Title>{event_name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 90)}
                        <span> ...</span>

                    </Card.Text>




                </Card.Body>
                <div className='d-flex align-items-end'>
                    <div className='p-3'>
                        <Link className='me-3' to={`/book/${_id}`}><button className="btn btn-primary">Book Event</button></Link>
                        <Link to={`/event/${_id}`}><button className="btn btn-warning">Details</button></Link>
                    </div>
                </div>
            </Card>
        </Col>




    );
};

export default Allevents;