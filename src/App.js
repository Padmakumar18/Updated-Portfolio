import React from 'react';
import ParticleBackground from './ParticleBackground';
import './App.css';
import Content from './Content';

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