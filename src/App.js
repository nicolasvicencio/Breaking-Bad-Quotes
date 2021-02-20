import React, { useState, useEffect } from "react";
import Phrase from './components/Phrase'
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  flex-direction: column;
`;
const Button = styled.button`
background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: all 300ms ease-out;
  opacity: 1;

  :hover{
    cursor:pointer;
    background-size:400;
    opacity: 0.5;
  }
`;

function App() {

const [phrase, savePhrase] = useState({})

const consultAPI = () => {
const result = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
.then(res => res.ok ? res.json() : Promise.reject(res))
.then(json => {

  savePhrase(json[0])

})

}

// Load Phrase

useEffect( () => {
  consultAPI()
}, [])




  return (
    <Container>

      <Phrase 
      text = {phrase}
      />

      <Button
      onClick={consultAPI}
      >
        Get Phrase</Button>
    </Container>
  );
}

export default App;
