import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

import header from './headerbg.jpg';
import Header from './header';


const Styles = styled.div`
    
    .head {
        background-image: url(${header});
        background-size: cover;
        height: 500px;
        position: relative;
        z-index: -1;
    }

    .overlay {
        background-color: #000000;
        opacity: 0.3;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -2;
        position: absolute;
    }

    .head, .header 
    {
        padding-left: 90px;
        padding-top: 120px;
    }
    
    `;

export const Headerbg = () => (
        <Styles>
            <Jumbo fluid className="head">
            <Header />
            <div className="overlay"></div>
             </Jumbo>
        </Styles>
    
)




