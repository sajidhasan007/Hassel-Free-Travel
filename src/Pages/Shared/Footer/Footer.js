import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer p-5'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3  text-white p-3'>

                <div className=' border border border-success p-3 overflow-auto col'>
                    <h3 className='mb-4'>Hassale Free Travle</h3>
                    <p className='text-start'>
                        We are commited to give you better service. We have different type of tour experts so that you can get better experience with us. we have installment polecy if you want you can pay your due step by step.For women we have special care.
                    </p>
                </div>

                <div className=' border border-success p-3 overflow-auto col'>
                    <h3 className='mb-4'>Address</h3>
                    <address>
                        Khagan, Birulia, Savar, Dhaka-1216
                        <br />
                        Cell: +880 1854-640476,
                        <br />
                        +880 1862-213214
                    </address>
                </div>
                <div className=' border border-success p-3 overflow-auto col'>
                    <h3 className='mb-4'>Opening Hours</h3>

                    <div className='d-flex justify-content-between'>
                        <p>Sat - Thus :</p>
                        <p>09.00 am - 10.00 pm</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Friday :</p>
                        <p>Closed</p>
                    </div>

                </div>
            </div>
            <h5 className='text-white text-center'>&copy; 2021 <a className='developer-name' href="https://www.facebook.com/?ref=tn_tnmn">Md Sajid Hasan</a></h5>
        </div>
    );
};

export default Footer;