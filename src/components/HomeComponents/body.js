import React from 'react';
import styled from 'styled-components';
import { Container, Jumbotron as Jumbo } from 'react-bootstrap';


import boatImage from './header.jpg';


const Body = (props) => {
    const Styles = styled.div`

    .bg {
        background-color: #2d2c54;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -2;
        position: fixed;
    }

    .container {
        display: flex;
        
        
    }

    
`;
    

    return (
        <Styles>
        <Container>  
         
        </Container>
        </Styles>
    )
}

export default Body;