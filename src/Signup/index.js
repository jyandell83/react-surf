import React, { useState } from 'react';
import { Btn, Inpt } from '../globalStyle'



const Signup = ({addUser})  =>  {

    return (
      <div>
        <span>Signup</span>
        <SignUpForm addUser={addUser}/>
      </div>
    );
  }



const SignUpForm = ({addUser}) =>  {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');

    console.log(userName,email, passwordOne, passwordTwo)
    
    return(
        <form onSubmit={e =>  {
            e.preventDefault();
            addUser({name: userName, email: email, password: passwordOne});
        }}>
            <Inpt name="username" placeholder="Username..." value={userName} onChange={e => setUserName(e.target.value)}></Inpt> <br />
            <Inpt name="email" placeholder="Email..." value={email} onChange={e => setEmail(e.target.value)}></Inpt> <br />
            <Inpt name="passwordOne" placeholder="passwordOne" value={passwordOne} onChange={e => setPasswordOne(e.target.value)}></Inpt> <br />
            <Inpt name="passwordTwo" placeholder="passwordTwo" value={passwordTwo} onChange={e => setPasswordTwo(e.target.value)}></Inpt> <br />
            <Btn type="submit">Sign Up</Btn>
        </form>
    )

}

export default Signup;