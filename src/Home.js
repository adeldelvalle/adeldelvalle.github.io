import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/HomeComponents/header';
import Body from './components/HomeComponents/body';
import header from './assets/bg1.jpg';

const Styles = styled.div`

    
    .bg 
    {
        background-image: url(${header});
        background-size: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -2;
    }

    .overlay1 {
      background-color: #000000;
      opacity: 0.3;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      position: fixed;
  }

`;
  

export const Home = () => (
    <Styles>
    <Container>
      <Header />
       <div className='bg'></div>
       <div className='overlay1'></div>
      <Body/>
  </Container>
  </Styles>

)