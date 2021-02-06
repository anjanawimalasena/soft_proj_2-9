/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import '../styles/Login.css';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (

    <div className='Login'>
      
      
      <img className='SPlogo' src="splogo.png" ></img>

      <h1></h1>

        <form >

<input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>

<h1></h1>

<input type="password" className="form-control" id="InputPassword" placeholder="Enter password" ></input>

<p className="forgot-password text-right">
  <a href="#" className='mb-1'>Forgot password?</a>
  <h6></h6>
 
  <a href="#" className='mt-1'>Not registered yet?</a>
</p>


<h1></h1>

<button type="submit" class="btn btn-primary btn-sm">Submit</button>

  </form>
            
    </div>
  );
}