import React, { useEffect } from 'react';
import './App.css';

// Component imports
import MasterRouter from './components/MasterRouter';
import { login } from './utils/utils';

function App() {
  return (
    <div className="App">
      <MasterRouter />
    </div>
  );
}

export default App;
