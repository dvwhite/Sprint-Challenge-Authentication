import React, { useEffect } from 'react';
import './App.css';

// Component imports
import Jokes from './components/Jokes';
import { login } from './utils/utils';

function App() {
  useEffect(() => {
    login({ username: "david", password: "123456" })
  }, [])

  return (
    <div className="App">
      <Jokes />
    </div>
  );
}

export default App;
