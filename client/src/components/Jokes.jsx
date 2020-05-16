import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Helpers
import { axiosWithAuth } from './../utils/utils';

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

  }, [])


  return (
    <Cards>

    </Cards>
  );
}

export default Jokes;
