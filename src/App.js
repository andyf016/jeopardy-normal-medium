import React from "react";
import { Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import "./App.css";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from './components/navigation/Navigation'
import Jeopardy from './components/jeopardy/Jeopardy'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Route exact 
             path='/' 
             render={(props) => <Welcome {...props} name='Andy' />} />
      <Route path='/clock' component={Clock} />
      <Route path='/contact' component={Contact} />
      <Route path ='/jeopardy' component={Jeopardy} />
    </div>
  );
}

export default App;
