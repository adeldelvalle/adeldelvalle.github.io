import React from 'react';
import styled from 'styled-components';
import { Container, Jumbotron as Jumbo } from 'react-bootstrap';

import Content from './content';
import boatImage from './bg1.jpg';


const Body = (props) => {
    const Styles = styled.div`

    

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }

    .blur 
    {
        background-image: url(${boatImage});
        filter: blur(0px);
        background-size: 100%;
        background-repeat: no;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        margin-top: 548.5px;
        z-index: 1;

    }

   

    .adel 
        {
        color: #fd7c30;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 2rem;
        margin-top: 230px;
        z-index: 2;
        text-align: center;
        opacity: 0.9;

        }

     .gradient
     {
      margin-top: 548.5px;
      background-image: linear-gradient(to bottom, #472261 , #0d1c4f);
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 2;
      position: absolute;
    }
    
`;
    

    return (
        <Styles>
            <div className='blur'></div>
            <div className="gradient"></div>
        <Container>  
        <h1 className="adel">Natural Language<br /> Processing.</h1>
        <h1 className="adel">Deep and Machine <br />Learning.</h1>
        <h1 className="adel">Data <br /> Analytics. </h1>
        </Container>
        <Content/>
        </Styles>
        
    )
}

export default Body;