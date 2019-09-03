import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'firebase/auth'
import app from 'firebase/app';



// -------------------------------------import individual components ------------------------------------------
import Nav from '../Nav';
import Home from '../Home';
import Profile from '../Profile';
import Surfspot from '../Surfspot';
import Signup from '../Signup';
import Signin from '../Signin';
import firedb from '../Firebase/firebase'




const App = ()  =>  {
    const [user, setUser] = useState('');
    const [uid, setUid] = useState('');

    const addUser = (user) =>  {
        setUser({user});
        app.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(authUser => {
                console.log(authUser.user.uid, 'this is auth user id');
                setUid(authUser.user.uid);
                firedb.ref(`users/${authUser.user.uid}`).set({email: user.email, username: user.name})
            })
            
            .catch(function(error) {
            console.log(error)
          });
    }
    const signOut = () => {
        app.auth().signOut()
        .then(console.log('sign out'))
    };
    useEffect(() =>  {
        app.auth().onAuthStateChanged(currentUser => {
            if (currentUser) {
              console.log(currentUser.uid, 'uid in side of useEffect')
            } else {
              console.log('no user logged in')
            }
          });
    }, []);
    console.log(user, 'user inside of app');
    console.log(uid, 'uid inside of app');
    return (
      <div className="App">
        <Nav signOut={signOut}/>
        <h1>Aloha, how are you?</h1>
        <Switch>
            <Route exact path = '/home' render = { () => <Home/> } />
            <Route exact path = '/profile' render = { () => <Profile /> } />
            <Route exact path = '/surfspot' render = { () => <Surfspot /> } />
            <Route exact path = '/signup' render = { () => <Signup addUser={addUser}/> } />
            <Route exact path = '/signin' render = { () => <Signin /> } />
        </Switch>
      </div>
    );
  }

  export default App;
