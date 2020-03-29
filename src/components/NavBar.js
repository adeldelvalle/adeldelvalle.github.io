import React from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import styled from 'styled-components';
import { white } from 'color-name';

const Styles = styled.div`
    .navbar {
        

        
    
    }

    .navbar-brand, .navbar-nav, .nav-link {
        background: white;
        background: -webkit-linear-gradient(#bc5090, #694f69);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        &:hover
        {
            background: -webkit-linear-gradient(#f5cb5c, #f5cb5c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

    }

    .a {
        color: ;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: -5px;
    }

   

   


`;

export const NavBar = () => (
    <Styles>
        <Navbar scrolling dark expand="md" fixed="top" >
            <Navbar.Brand href="/">Adel del Valle</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/"> <h5 className='a'>Home</h5> </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about"> <h5 className='a'>About</h5> </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact"> <h5 className='a'>Contact</h5> </Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)