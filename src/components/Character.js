// Write your Character component here
import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";


function Character({key1}) {

    let [characters, getCharacters] = useState([]);

    useEffect(() =>{
        axios
            .get("https://swapi.dev/api/people")
            .then(res=>{
                console.log(res.data.results);
                getCharacters(res.data.results);
            })
            .catch(err=>console.log(err));
    },[]);

    return(
        <Container>
        <div className="charCard">
            {characters.length > 0 ? characters.map((char, i) => <Card key={char.id} char={char} />) : <p> Loading ...</p>}
        </div>
        </Container>
    );
};
const Container = styled.div`
    .charCard{
     display:flex;
     flex-wrap:wrap;
     justify-content:space-evenly;
    }
`   

export default Character;