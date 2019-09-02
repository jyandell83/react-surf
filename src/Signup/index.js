import React, { useState, useEffect } from 'react';




const Signup = ()  =>  {
    const [user, setUser] = useState('');
    console.log(user, "this is the user")
    return (
      <div>
        <span>Signup</span>
        <SignUpForm addUser={setUser}/>
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
            addUser({name: userName, email: email, passwordOne: passwordOne, passwordTwo: passwordTwo});
        }}>
            <input name="username" placeholder="Username..." value={userName} onChange={e => setUserName(e.target.value)}></input> <br />
            <input name="email" placeholder="Email..." value={email} onChange={e => setEmail(e.target.value)}></input> <br />
            <input name="passwordOne" placeholder="passwordOne" value={passwordOne} onChange={e => setPasswordOne(e.target.value)}></input> <br />
            <input name="passwordTwo" placeholder="passwordTwo" value={passwordTwo} onChange={e => setPasswordTwo(e.target.value)}></input> <br />
            <button type="submit">Sign Up</button>
        </form>
    )

}

export default Signup;