import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import history from './services/history';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}