import React, { useState } from 'react';



const Signin = ({signIn})  =>  {
    return (
      <div>
        <span>Signin</span>
        <SignInForm signIn={signIn}/>
      </div>
    );
  }

const SignInForm = ({signIn}) =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    return(
        <form onSubmit={e => {
            e.preventDefault();
            signIn({email, password});
        }}>
            <input 
                name="email" 
                placeholder="Name"
                onChange={e => setEmail(e.target.value)}
            ></input>
            <input 
                name="password" 
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            ></input>
            <button type="submit">
                Sign In
            </button>
        </form>
    )
}


export default Signin;