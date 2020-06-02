import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <div className='Header'>
            <Navbar collapseOnSelect expand='lg' variant='dark'>
                <Navbar.Brand>Reboots</Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />

                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <Nav.Link>HOME</Nav.Link>

                        <Nav.Link>PAGES</Nav.Link>

                        <Nav.Link>
                            <Link to='/'>DOCS</Link>
                        </Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link>
                            <Link to='/'>LOG IN</Link>
                        </Nav.Link>

                        <Nav.Link>SEARCH</Nav.Link>

                        <Nav.Link>CART</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
