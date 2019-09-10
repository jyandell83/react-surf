import React, { useState } from 'react';
import { Btn, Inpt } from '../globalStyle'



const Signin = ({signIn})  =>  {
    return (
      <div>
        <span>Signin</span>
        <SignInForm signIn={signIn}/>
      </div>
    );
  }

const SignInForm = ({ signIn }) =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    return(
        <form onSubmit={e => {
            e.preventDefault();
            signIn({email, password});
        }}>
            <Inpt 
                name="email" 
                placeholder="Email..."
                onChange={e => setEmail(e.target.value)}
            ></Inpt>
            <Inpt 
                name="password" 
                placeholder="Password..."
                onChange={e => setPassword(e.target.value)}
            ></Inpt>
            <Btn type="submit">
                Sign In
            </Btn>
        </form>
    )
}


export default Signin;