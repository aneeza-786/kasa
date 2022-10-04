import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Error from './components/Error';
import './styles/index.css';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
       <Error /> 
      </Switch>
      <Footer/>
    </Router>
  </React.StrictMode>
);
