import React, { useState } from 'react';
import { Btn, Inpt, InptGrp, Form } from '../globalStyle'



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
    
    return(
        <Form onSubmit={e =>  {
            e.preventDefault();
            addUser({name: userName, email: email, password: passwordOne});
        }}>
            <InptGrp>
            <Inpt id="username" name="username" placeholder="Username..." value={userName} onChange={e => setUserName(e.target.value)}></Inpt>
              <label htmlFor="username">Username</label>
            </InptGrp>
            <InptGrp>
            <Inpt id="email" name="email" placeholder="Email..." value={email} onChange={e => setEmail(e.target.value)}></Inpt>
              <label htmlFor="email">Email</label>
            </InptGrp>
            <InptGrp>
            <Inpt id="passwordOne" name="passwordOne" placeholder="Password..." value={passwordOne} onChange={e => setPasswordOne(e.target.value)}></Inpt>
              <label htmlFor="passwordOne">Password</label>
            </InptGrp>
            <InptGrp>
            <Inpt id ="passwordTwo" name= "passwordTwo" placeholder="Confirm Password..." value={passwordTwo} onChange={e => setPasswordTwo(e.target.value)}></Inpt>
              <label htmlFor="passwordTwo">Confirm Password</label>
            </InptGrp>
            <Btn type="submit">Sign Up</Btn>
        </Form>
    )

}

export default Signup;