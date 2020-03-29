import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';

import portada from './header.jpg';


const Header = (props) => {
    const Styles = styled.div`
        .container {
            font-family: 'Raleway', sans-serif;
            margin-top: 40px;
            display: flex;
            flex-direction: row;
            margin-top: 150px;
        }

        .first { 
            color: #561985;
            text-align: left;
            font-weight: 400;
            font-size: 3.5rem;
            
        }

        .second {
            color:#bc5090;
            text-align: left;
            margin-right: 75px;
            font-weight: 400;
            font-size: 3rem;
            
        }

        .third {
            color: #ff6361;
            margin-right: 125px;
            font-weight: 400;
            font-size: 2.5rem;
        }

      
       
        .head1 {
            border-style: solid;
            border-width: 0px 0px 5px 0px;
            border-bottom: 6px solid transparent;
            border-image: linear-gradient(to right, #561985 , #bc5090);
            border-image-slice: 1;
        }

        

        

        
        
    `;


    return (
        <Styles>
        <Container>
            <div className="head1">
            <h1 className="first">Mathematician,</h1>
            <h2 className="second">Pattern finder,</h2>
            <h3 className="third">Data Driven.</h3>
            </div>
            
            
        </Container>
        
            
        </Styles>
    );
}

export default Header;