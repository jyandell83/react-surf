import React from 'react';
import { Route, Switch } from 'react-router-dom';


// -------------------------------------import individual components ------------------------------------------
import Nav from '../Nav';
import Home from '../Home';
import Profile from '../Profile';
import Surfspot from '../Surfspot';
import Signup from '../Signup';
import Signin from '../Signin';




const App = ()  =>  {
    return (
      <div className="App">
        <Nav />
        <h1>Hello Surfers, how are you?</h1>
        <Switch>
            <Route exact path = '/home' render = { () => <Home/> } />
            <Route exact path = '/profile' render = { () => <Profile /> } />
            <Route exact path = '/surfspot' render = { () => <Surfspot /> } />
            <Route exact path = '/signup' render = { () => <Signup /> } />
            <Route exact path = '/signin' render = { () => <Signin /> } />
        </Switch>
      </div>
    );
  }

  export default App;
