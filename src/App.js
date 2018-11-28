import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import CategoryList from './components/CategoryList/CategoryList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <CategoryList />
        
      </div>
    );
  }
}

export default App;
