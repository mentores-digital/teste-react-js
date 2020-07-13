import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

// function App() {
//   return (
//     <h1>Testando bootstrap</h1>
//   );
// }

// export default App;

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
  }