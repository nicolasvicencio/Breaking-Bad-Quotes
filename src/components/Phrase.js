import React, { Fragment } from "react";
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const PhraseContainer = styled.div`
padding:3rem;
border-radius:3.5rem;
background-color:#fff;
max-width:800px;


@media screen and (min-width: 992px){
  margin-top: 10rem;
}

h1{
  font-family:Arial, Helvetica, sans-serif;
  text-align:center;
  position: relative;
  padding-left: 4rem;

  &::before {
    content:open-quote;
    font-size: 10rem;
    color:black;
    position: absolute;
    left: -1rem;
    top:-2rem;
  }
}

p{
font-family: Geneva, Verdana, Tahoma, sans-serif;
font-size:1.4rem;
font-weight:bold;
text-align:right;
color:#666;
margin-top: 2rem;

}
`



const Phrase = ({ text }) => {

  

  return (
    <PhraseContainer>


      <h1>{text.quote}</h1>
      <p> - {text.author}</p>
    </PhraseContainer>
  );
};


Phrase.propTypes = {
  text: PropTypes.string.isRequired
}

export default Phrase;
