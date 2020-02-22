import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'firebase/auth'
import app from 'firebase/app';
import { withRouter } from "react-router";



// -------------------------------------import individual components ------------------------------------------
import Nav from '../Nav';
import NavNoUser from '../NavNoUser'
import Home from '../Home';
import Profile from '../Profile';
import Surfspot from '../Surfspot';
import Signup from '../Signup';
import Signin from '../Signin';
import firedb from '../Firebase/firebase'
import SpotProfile from '../SpotProfile';
import Header from '../Header';
import Frontwards from '../Four04';
import Welcome from '../Welcome';




const App = (props)  =>  {
    const [user, setUser] = useState('');
    const [uid, setUid] = useState('');
    const [nameOfCurrentUser, setNameOfCurrentUser] = useState('');
    const [isUserAdmin, setIsUserAdmin] = useState(false);

    const addUser = (user) =>  {
        setUser({user});
        app.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(authUser => {
                setUid(authUser.user.uid);
                // firedb.ref(`users/${authUser.user.uid}`).set({email: user.email, username: user.name, admin: false})
                firedb.collection('users').doc(authUser.user.uid).set({
                    email: user.email, 
                    username: user.name, 
                    admin: false
                })
            })
            .then(props.history.push('/home'))
            .catch(function(error) {
            console.log(error)
          });
    }
    const signOut = () => {
        app.auth().signOut()
        .then(setNameOfCurrentUser(''))
        .then(setIsUserAdmin(false))
        .then(props.history.push('/home'))
    }
    const signIn = (user) =>  {
        app.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(authUser =>  {
                console.log(authUser);
            })
            .then(props.history.push('/home'))
            .catch(function(error) {
                console.log(error)
            })
    }
    const updatePassword = (pw) =>  {
        console.log('changing pw', pw)
        app.auth().currentUser.updatePassword(pw)
        .then(props.history.push('/profile'))
        .catch(function(error) {
            console.log(error)
        })
    }
    const removeUser = () =>  {
        app.auth().currentUser.delete()
            
            .then((() => {
                firedb.collection('users').doc(uid).delete()
            }))
            .then(props.history.push('/home'))
            .then(setNameOfCurrentUser(''))
            .catch(function(error) {
            console.log(error)
        })
    }
    
    useEffect(() =>  {
        app.auth().onAuthStateChanged(currentUser => {
            if (currentUser) {
              firedb.collection('users').doc(currentUser.uid).get()
                .then((snapshot) => {
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
    return (
      <div className="App">
        <Header />
        {nameOfCurrentUser ? <Nav signOut={signOut} user={nameOfCurrentUser}/> : <NavNoUser />}
        <div className="content">
            <Switch>
                <Route exact path = '/home' render = { () => <Home/> } />
                <Route exact path = '/profile' render = { () => <Profile userId={uid} updatePassword={updatePassword} removeUser={removeUser}/> } />
                <Route exact path = '/surfspot' render = { () => <Surfspot isUserAdmin={isUserAdmin}/> } />
                <Route exact path = '/surfspot/:id' render = { (props) => <SpotProfile {...props} userId={uid}/> } />
                <Route exact path = '/signup' render = { () => <Signup addUser={addUser}/> } />
                <Route exact path = '/signin' render = { () => <Signin signIn={signIn}/> } />
                <Route exact path = '/' render = { () => <Welcome /> } />
                <Route component={Frontwards} />
            </Switch>
        </div>
      </div>
    );
  }

  export default withRouter(App);
