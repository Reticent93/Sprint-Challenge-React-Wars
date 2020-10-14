import React from 'react';
import styled from 'styled-components'


const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 5% auto;
  width: 20%;
  height: auto;
  background-color: white;
  opacity: 0.7;
  border: 1px solid black;
  border-radius: 20px;

`;

function CharacterCard(props) {

    return (
        <Card key={props.url}>
            <h2>Name: {props.name}</h2>
            <h2>Height: {props.height}</h2>
            <h2>Birth Year: {props.birth_year}</h2>
        </Card>
    );
}

export default CharacterCard;