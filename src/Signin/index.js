import React, { useState } from 'react';
import { Btn, Inpt, InptGrp, Form } from '../globalStyle'



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
        <Form onSubmit={e => {
            e.preventDefault();
            signIn({email, password});
        }}>
            <InptGrp>
                <Inpt name="email" placeholder="Email..." id="email" onChange={e => setEmail(e.target.value)}></Inpt>
                <label htmlFor="email">Email</label>
            </InptGrp>
            <InptGrp>
                <Inpt name="password" id="password" placeholder="Password..."onChange={e => setPassword(e.target.value)}></Inpt>
                <label htmlFor="password">Password</label>
            </InptGrp>
            <Btn type="submit">
                Sign In
            </Btn>
        </Form>
    )
}


export default Signin;
