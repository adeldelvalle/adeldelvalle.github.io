import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import ser from './content.jpg';
import selfie from './foto.jpg';


const Content = (props) => {

    const Styles = styled.div`
    .container 
    {   
        display: flex;
        flex-direction: row;
        margin-top: 50px;
        z-index: 5;
        color: white;
    


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
            margin-top: 90px;
            text-align: center;            
            color: white;
            font-size: 3.5rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            z-index: 1;
            
           

        }

        .quote
        {
            margin-top: 140px;
            font-family: "Roboto", sans-serif;
            font-weight: 400px;
            font-size: 3rem;
            color: #0d1c4f;
            margin-right: 70px;
            text-align: center;
        }

        .circle
        {
    
        background-image: url(${ser});
        background-size: 100%;
        background: contain;
        height: 240px;
        width: 1520px;
        background-repeat: no-repeat;
        margin-top: 60px;
        clip-path: polygon(100% 0, 100% 100%, 0% 0%);
        z-index: 2;
        float: left;
        margin-left: -220px;
    }

    .circle1
        {
    
        background-color: #FAFAFA;
        height: 240px;
        width: 1520px;
        margin-top: -237.5px;
        clip-path: polygon(0 100%, 100% 100%, 0% 0%);
        float: left;
        margin-left: -220px;
        z-index: 2;
        opacity: 1;
        position: relative;
    }

    .gradient
    {
      margin-top: 541px;
      background: rgb(13,28,79);
      background: linear-gradient(0deg, rgba(13,28,79,1) 3%, rgba(51,8,84,0.6139589624912465) 100%); 
            top: 0;
      left: 0;
      bottom: -240px;
      right: 0;
      z-index: 1;
      position: absolute;
    }

       
    .selfie
    {
        background-image: url(${selfie});
        background-size: 100%;
        background: contain;
        height: 300px;
        width: 300px;
        margin-top: 100px;
        border-radius: 50%;
        
    }

    .selfbg
    {
    
        
        width: 300px;
        height: 300px;
        margin-top: 100px;
        margin-left: -30px;
        border-radius: 50%;
        background: rgb(121,36,106);
        background: linear-gradient(138deg, rgba(121,36,106,1) 0%, rgba(13,28,79,1) 99%); 
        
        
    }
    `;

    return(
        <Styles>
           <div className="back"></div>
           <div className="circle"></div>
           <div className="circle1"></div>
           <div className='gradient'></div>
            <Container>
            
            <h1 className="quote">"Where nobody can see, <br/> I find a way."</h1>
            <div className="selfie">            </div>
            </Container>

            <Container>
                <div className="selfbg"></div>
            </Container>
            
        </Styles>

    );
}

export default Content;