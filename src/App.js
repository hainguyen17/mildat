import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import MainScreen from './views/MainScreen';
import FaceScreen from './views/FaceScreen';
import FingerScreen from './views/FingerScreen';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/face-screen" component={FaceScreen} />
        <Route exact path="/finger-screen" component={FingerScreen} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
