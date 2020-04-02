import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';



const Header = (props) => {
    const Styles = styled.div`
        .container {
            font-family: 'Poppins', sans-serif;
            margin-top: 90px;
            display: flex;
            flex-direction: row;
            margin-top: 180px;
        }

        .first { 
            color: white;
            text-align: left;
            font-weight: 500;
            font-size: 4.5rem;
            
        }

        .second {
            color: white;
            text-align: left;
            margin-right: 75px;
            font-weight: 500;
            font-size: 4rem;
            
        }

        .third {
            color: white;
            margin-right: 125px;
            font-weight: 500;
            font-size: 3.5rem;
        }

      
       
        .head1 {
            padding-right: 30px;
            margin-top: 50px;
            border-style: solid;
            border-width: 0px 0px 0px 0px;
            border-right: 5px solid white;
            
        }

        .four

        {
            font-family: 'Poppins', sans-serif;
            color: white;
            font-weight: 400;
            margin-left: 50px;
            margin-top: 120px;
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
            <div className="tiny"><h1 className="four">Where nobody can see, I find a way. </h1></div>
            
            
        </Container>
        
            
        </Styles>
    );
}

export default Header;