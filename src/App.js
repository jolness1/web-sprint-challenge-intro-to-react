import React from 'react';
import Character from "./components/Character";
import './App.css';
import styled from "styled-components";

  
const App = () =>{
  const id=0;

  return (
    <Container>
      <h1 className="Header">
        <span role="img" aria-label="Star Wars">🚀</span>
        Star Wars Characters
        <span role="img" aria-label="Star Wars">🚀</span>
      </h1>
      <Character key={id}/>
    </Container>
  );
}

const Container = styled.div`
  text-align:center;
  .Header{
    font-size:4rem;
  }
`
export default App;



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


