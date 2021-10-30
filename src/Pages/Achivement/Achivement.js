import React from 'react';
import { Container } from 'react-bootstrap';
import './Achivement.css';


const Achievement = () => {
    return (
        <div className=' achievement-custom m-3 '>
            <h1 className='bg-secondary text-white text-center'>Our Achievement</h1>
            <div className=''>
                <div>


                    <Container className='achievement-items mt-5 mb-5'>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4  text-color '>

                            <div className='col '>
                                <div className='Achievement-item text-center '>
                                    <h2>Happy Client</h2><br />
                                    <h3>800+</h3>
                                </div>
                            </div>

                            <div className="col ">
                                <div className='Achievement-item text-center '>
                                    <h2>Experience</h2><br />
                                    <h3>5+ year</h3>
                                </div>
                            </div>

                            <div className="col ">
                                <div className='Achievement-item text-center '>
                                    <h2>Event Complete</h2><br />
                                    <h3>70</h3>
                                </div>
                            </div>

                            <div className="col ">
                                <div className='Achievement-item text-center '>
                                    <h2>Total Guide</h2><br />
                                    <h3>12</h3>
                                </div>
                            </div>



                        </div>
                    </Container>
                </div>
            </div>

        </div>
    );
};

export default Achievement;