import React from 'react';
import ParticleBackground from './Components/ParticleBackground';
import './App.css';
import Content from './Components/Content';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <div className="content">
        <Content/>
      </div>
    </div>
  );
}

export default App;