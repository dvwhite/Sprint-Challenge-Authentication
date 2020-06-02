import React, { useState, useEffect } from 'react';

// Helpers
import { axiosWithAuth } from './../utils/utils';

// Component imports
import JokeCard from './JokeCard';

// Styled components
import styled from 'styled-components';

const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const Jokes = ({ data }) => {
  const [jokes, setJokes] = useState([]);

  // Grab the jokes from the API
  // the address is http://localhost:5000/api/jokes
  // Must be logged in to grab the cookie with JWT
  useEffect(() => {
    axiosWithAuth().get("/jokes")
      .then(res => {
        console.log("Jokes:", res)
        setJokes(res.data)
      })
  }, [])


  return (
    <Cards>
      {jokes?.map((joke, idx) => {
        return <JokeCard data={joke} key={idx}/>
      })}
    </Cards>
  );
}

export default Jokes;
