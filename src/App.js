import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/users/SearchBar';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar pagename='Discogs Crate Digger' />
        <SearchBar />
      </div>
    );
  }
}

export default App;
