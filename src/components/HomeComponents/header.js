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

        

        .adel 
        {
            color: #ff7c43;
            margin-right: 125px;
            font-weight: 400;
            font-size: 2.5rem;
            margin-top: -50px;
        }

    
        .triangle {
            margin-top: 8px;
            margin-left: -450px;
            width: 400px;
            height: 400px;
            position: absolute;
            top: 30%;
            left: 45%;
            clip: rect(auto, 700px, auto, 270px);
            transform: rotate(90deg);
            opacity: .5;
            }
            
            .triangle::after {
            content: "";
            position: absolute;
            top: 10px;
            bottom: 5px;
            left: 10px;
            right: 10px;
            background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #ff7c43), color-stop(100%, #ffa600));
            transform: rotate(45deg);
            }
          }
        
    `;


    return (
        <Styles>
        <Container>
            <div className="head1">
            <h1 className="first">Mathematician.</h1>
            <h2 className="second">Pattern finder.</h2>
            <h3 className="third">Data Driven.</h3>
            </div>
            
            
        </Container>
        <Container>
            <div>
                <h1 className="adel">This is Adel del Valle.</h1>
            </div>
            <div class="triangle"></div>
        </Container>
            
        </Styles>
    );
}

export default Header;