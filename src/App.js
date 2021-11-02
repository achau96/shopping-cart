import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Shop from './components/Shop';
import './style.css';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Shop />
    </div>
  );
}

export default App;
