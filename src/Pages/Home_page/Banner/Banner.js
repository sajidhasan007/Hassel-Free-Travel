import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner3.jpg';
import banner3 from '../../../images/banner4.jpg';
import banner4 from '../../../images/banner5.jpg';


const Banner = () => {
    return (

        <>
            {/* <Container> */}
            <Carousel className='m-3' id='#home'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Patient Checking Room</h3>
                        <p>This chair is very relaxing you will feel comfort</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Another Patient Checking Rook</h3>
                        <p>This chair is very relaxing you will feel comfort</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Our Team Leader</h3>
                        <p>He is so kind and patient person we all love him</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-style"
                        src={banner4}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>Our Team Leader</h3>
                        <p>He is so kind and patient person we all love him</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* </Container> */}
        </>

    );
};

export default Banner;