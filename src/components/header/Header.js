import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    useLayoutEffect(() => {
        let prevPosition = window.pageYOffset;

        window.onscroll = function () {
            let currPosition = window.pageYOffset;

            if (window.pageYOffset > 0) {
                document.getElementById('navbar').style.background = 'rgba(17, 17, 17, 0.95)';
            } else {
                document.getElementById('navbar').style.background = 'none';
            }

            if (prevPosition > currPosition) {
                document.getElementById('navbar').style.opacity = '1';
            } else {
                document.getElementById('navbar').style.opacity = '0';
            }

            prevPosition = currPosition;
        };
    });

    return (
        <div className='Header'>
            <Navbar collapseOnSelect expand='lg' variant='dark' id='navbar'>
                <Navbar.Brand>Reboots</Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />

                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <Nav.Link>HOME</Nav.Link>

                        <Nav.Link>PAGES</Nav.Link>

                        <Nav.Link as={Link} to='/'>
                            DOCS
                        </Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to='/'>
                            LOG IN
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
