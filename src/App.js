import React from 'react';
import ParticleBackground from './Components/ParticleBackground';
import './CSS/App.css';
import Content from './Components/Profile';
import Project from './Components/Project';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <div className="content">
        <Content/>
      </div>
      <div className="container">
        <Project/>
      </div>
    </div>
  );
}

export default App;