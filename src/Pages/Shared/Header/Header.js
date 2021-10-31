import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, handlesignout } = useAuth();
    const user_image = 'empty_image_field';
    //console.log(user.img);

    //console.log('print from header ', user);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark" className='mb-3 p-0 '>
                <Container>
                    <Link to="/home"><img className='brand-logo' src="https://w7.pngwing.com/pngs/18/760/png-transparent-hotel-business-travel-economics-voucher-travel-booking-text-logo-business.png" alt="" /></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} to="/home" className='header-item'>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#service" className='header-item'>Events</Nav.Link>
                        {user?.email && <>
                            <Nav.Link as={HashLink} to="/myEvents" className='header-item'>My Events</Nav.Link>
                            <Nav.Link as={HashLink} to="/addevent" className='header-item'>Add Event</Nav.Link>
                            <Nav.Link as={HashLink} to="/manageEvent" className='header-item'>Manage Events</Nav.Link>
                        </>}

                        {user?.email ?
                            <>
                                <Navbar.Text>
                                    <a href="#login">{user?.name}</a>
                                    <img className='header-image' src={user?.img} alt="" />
                                </Navbar.Text>
                                <button className='btn btn-danger' onClick={handlesignout}>SignOut</button>
                            </>
                            :
                            <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>
                        }




                    </Navbar.Collapse>



                </Container>
            </Navbar>
        </>
    );
};

export default Header;