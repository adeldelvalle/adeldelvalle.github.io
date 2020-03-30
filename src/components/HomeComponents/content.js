import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import ser from './content.jpg';

const Content = (props) => {
    const Styles = styled.div`
    .container 
    {   
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        z-index: 5;
        color: white;
        align-content: center;


    }
    
    .back 
        {
        background-color: #FAFAFA;
        background-size: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -3;
        position: fixed;
        }

        .about 
        {
            margin-top: -210px;
            text-align: center;
            color: #fd7c30;
            font-size: 3.5rem;
            font-family: 'Raleway', sans-serif;
            font-weight: 300;
        }

        .circle
        {
        margin-top:40.5px;
        height: 250px;
        width:1515px;
        border-radius: 0 0 1500px 1500px;
        background-image: url(${ser});
        background-size: 100%;
        margin-left: -218px;
        
        z-index: -3;

        }
    `;

    return(
        <Styles>
           <div className="back"></div>
           <div className="circle"></div>
            <Container>
            
            <h1 className="about">About Me</h1>
            
            
            </Container>
        </Styles>

    );
}

export default Content;