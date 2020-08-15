import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import MainScreen from './views/MainScreen';
import InputScreen from './views/InputScreen';
import FaceScreen from './views/FaceScreen';
import FingerScreen from './views/FingerScreen';
import IDScreen from './views/IDScreen';
import ReviewScreen from './views/ReviewScreen';
import CompleteScreen from './views/CompleteScreen';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/input-screen" component={InputScreen} />
        <Route exact path="/face-screen" component={FaceScreen} />
        <Route exact path="/finger-screen" component={FingerScreen} />
        <Route exact path="/id-screen" component={IDScreen} />
        <Route exact path="/review-screen" component={ReviewScreen} />
        <Route exact path="/complete-screen" component={CompleteScreen} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
