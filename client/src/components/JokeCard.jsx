import React from 'react';

// Styled components
import styled from 'styled-components';

const Card = styled.form`
  border-bottom: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #88CCFF;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: black;
  text-shadow: 2px 2px 4px #fff;
  font-weight: bold;
  width: auto;
  height: auto;
  margin: 2%;
  padding: 2%;
  overflow: hidden;
  transition: all 0.2s ease;
  &:hover {
    transition: all 0.3s ease;
    box-shadow: 4px 4px 8px #444;
  }
`;

const JokeCard = ({ data }) => {
  return (
    <Card>
      <h2>{data.joke}</h2>
    </Card>
  );
}

export default JokeCard;
