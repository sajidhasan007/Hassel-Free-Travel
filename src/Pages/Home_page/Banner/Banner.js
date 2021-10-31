import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner3.jpg';
import banner3 from '../../../images/banner2.jpg';
import banner4 from '../../../images/banner4.jpg';


const Banner = () => {
    return (

        <>
            {/* <Container> */}
            <Carousel className='m-3'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Our Last Month Tour (Rangamati) </h3>
                        <p>That was a fimily tour so we accept male and female</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Our Last Month Tour at Nijom Deep</h3>
                        <p>That tour was not a family tour so we did not allow female traveler</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Monst Attractive Waterfall "Nafa Khum"</h3>
                        <p>This tour is so hard you have to walk 5-8 hour to react here</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src={banner4}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>This is Our Hassle Free Travel Team</h3>
                        <p>Here we are six admin and we have six sub-admin in total 12 person</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* </Container> */}
        </>

    );
};

export default Banner;