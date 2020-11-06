import React from "react";
import styled from "styled-components";

function Card({ char, key }) {

    return (
        <Container>
            <h2>{char.name}</h2>
            <p>Gender:{char.gender}</p>
            <p>Height:{char.Height}</p>
            <p>Weight:{char.weight}</p>
            <p>Eyes:{char.eye_color}</p>
        </Container>
    )
};

const Container = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    width:10rem;
    margin:2%;
    padding:1%;
    border-radius:50px;
    opacity:0.5;
    :hover{
        opacity:0.8;
    }
    h2{
        font-size:1.3rem;
        text-decoration:underline;
        :hover{
            color:brown;
        }
    }
    p{
        font-size:0.8rem;
        
    }
`
export default Card;