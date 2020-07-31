import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import MainScreen from './views/MainScreen';
import FaceScreen from './views/FaceScreen';
import IdScreen from './views/IdScreen';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/face-screen" component={FaceScreen} />
        <Route exact path="/id-screen" component={IdScreen} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
