import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/HomeComponents/header';
import header from './components/HomeComponents/geo.jpg';
import Content from './components/HomeComponents/content';

const Styles = styled.div`

    
    .bg 
    {
        background-image: url(${header});
        background-size: 100%;
        height: 700px;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
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
      <Content/>
  </Container>
  </Styles>

)