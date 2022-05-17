import React from "react";
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Nav, Navbar} from 'react-bootstrap'


class Navigation extends Component {
    render (){
        return (
            <div>
                <Navbar bg='dark' variant="dark" sticky="top" expand='md' collapseOnSelect>
                <Navbar.Brand href='/'>
                    Asia's AI Assistant
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href='https://www.youtube.com'>See How It Works</Nav.Link>
                    </Nav>

                </Navbar.Collapse>

                </Navbar>
            
            </div>
        )
    }
}

export default Navigation