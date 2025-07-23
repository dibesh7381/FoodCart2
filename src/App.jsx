import React from 'react';
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <FoodList />
      </div>
    </div>
  );
};

export default App;



