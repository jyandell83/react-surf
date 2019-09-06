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
import SpotProfile from '../SpotProfile';
import Header from '../Header';




const App = ()  =>  {
    const [user, setUser] = useState('');
    const [uid, setUid] = useState('');
    const [nameOfCurrentUser, setNameOfCurrentUser] = useState('');
    const [isUserAdmin, setIsUserAdmin] = useState(false);

    const addUser = (user) =>  {
        setUser({user});
        app.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(authUser => {
                // console.log(authUser.user.uid, 'this is auth user id');
                setUid(authUser.user.uid);
                // firedb.ref(`users/${authUser.user.uid}`).set({email: user.email, username: user.name, admin: false})
                firedb.collection('users').doc(authUser.user.uid).set({
                    email: user.email, 
                    username: user.name, 
                    admin: false
                })
            })
            
            .catch(function(error) {
            console.log(error)
          });
    }
    const signOut = () => {
        app.auth().signOut()
        .then(setNameOfCurrentUser(''))
        .then(setIsUserAdmin(false))
    }
    const signIn = (user) =>  {
        app.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(authUser =>  {
                console.log(authUser);
            })
            .catch(function(error) {
                console.log(error)
            })
    }
    
    useEffect(() =>  {
        app.auth().onAuthStateChanged(currentUser => {
            if (currentUser) {
              console.log(currentUser.uid, 'uid in side of useEffect')
              firedb.collection('users').doc(currentUser.uid).get()
                .then((snapshot) => {
                    console.log(snapshot.data());
                    setNameOfCurrentUser(snapshot.data().username);
                    setIsUserAdmin(snapshot.data().admin);
                    setUid(currentUser.uid)
                })
                .catch(error => console.log('Firebase Error: ', error))
            } else {
              console.log('no user logged in')
            }
          });
    }, []);
    console.log(user, 'user inside of app');
    console.log(uid, 'uid inside of app');
    return (
      <div className="App">
        <Header />
        <Nav signOut={signOut}/>
        <h1>Aloha{nameOfCurrentUser ?` ${nameOfCurrentUser}`: null}, how are you?</h1>
        <Switch>
            <Route exact path = '/home' render = { () => <Home/> } />
            <Route exact path = '/profile' render = { () => <Profile /> } />
            <Route exact path = '/surfspot' render = { () => <Surfspot isUserAdmin={isUserAdmin}/> } />
            <Route exact path = '/surfspot/:id' render = { (props) => <SpotProfile {...props} userId={uid}/> } />
            <Route exact path = '/signup' render = { () => <Signup addUser={addUser}/> } />
            <Route exact path = '/signin' render = { () => <Signin signIn={signIn}/> } />
        </Switch>
      </div>
    );
  }

  export default App;
