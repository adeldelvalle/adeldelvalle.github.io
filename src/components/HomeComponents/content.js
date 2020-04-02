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
        margin-top: 100px;
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
            z-index: 1;
            margin-top: 180px;
            width: 50%;
            height: 700px;
            
            border-style: solid;
            border-width: 10px 0px 20px 20px;
            border-image: linear-gradient(to top, rgba(237,86,74,1) 0% , rgba(121,36,106,1) 100%);
            border-image-slice: 1;
        }

        .about1
        {
       
            background-color: transparent;
            font-size: 3.5rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            z-index: 1;
            margin-top: 180px;
            width: 50%;
            height: 700px;
            background: rgb(237,86,74);
            background: linear-gradient(0deg, rgba(237,86,74,1) 0%, rgba(121,36,106,1) 100%);
            
            

        }

        .quote
        {

            text-align: left;
            margin-left: 150px;
            margin-top: 100px;
            font-family: "Poppins", sans-serif;
            font-weight: 400px;
            font-size: 5rem;
            color: #472261;
            
            
           

        }

       

    .circle1
        {
    
        background-color: #FAFAFA;
        height: 240px;
        width: 1520px;
        margin-top: 111px;
        clip-path: polygon(0 100%, 100% 100%, 0% 0%);
        float: left;
        margin-left: -220px;
        z-index: 2;
        opacity: 1;
        
    }


       
    .selfie
    {
        display: flex;
        flex-direction: column;
        background-image: url(${selfie});
        background-size: 100%;
        background: contain;
        height: 200px;
        width: 200px;
        margin-top: -110px;
        border-radius: 50%;
        z-index: 1;
        margin-left: 160px;        
    }

    .selfbg.
    {
        background: rgb(121,36,106);
        background: linear-gradient(0deg, rgba(121,36,106,1) 0%, rgba(13,28,79,1) 100%);
        
        width: 200px;
        height: 200px;
        margin-top: 100px;
        margin-left: -30px;
        border-radius: 50%;
    }

    .me 
    {
        margin-right: 30px;
        margin-left: 30px;
        margin-top: 50px;
        color: white;
        text-align: center;
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
    
       
        
        
    }
    `;

    return(
        <Styles>
           <div className="back"></div>
           <div className="circle1"></div>
           <div className='gradient'></div>
           

            <Container>
                <div className="about">
                <h1 className="quote">Who <br/> is <br/> Adel <br/> del <br/>Valle?</h1>

                </div>
          
            <div className="about1"><div className="selfie">     
            
               </div>
               <p className="me">Adel del Valle is an 
            Undergraduate Junior Student at 
            the University of Mayaguez, Puerto Rico. He is pursuing a 
            double bachelor in Pure Math and Computer Science with a minor in Computational
            Linguistics. Adel currently works as a Data Scientist, developing Machine Learning
            models in the field of Natural Language Processing and Particle Physics. Adel was 
            raised and grown in Caguas, Puerto Rico. He is 20 years old and have an 
            incredible passion with mathematics.
            
            </p>    
            </div>
            </Container>
            
        </Styles>

    );
}

export default Content;