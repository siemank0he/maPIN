import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Mapp from './Map.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mapp />
    </div>
  );
}

export default App;
