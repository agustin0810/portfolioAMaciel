import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js'
import Content from './components/Content/Content.js'
import Footer from './components/Footer/Footer.js'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
