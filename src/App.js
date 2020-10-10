import React, { Component } from 'react';

import './App.css';
import {   Form, FormGroup, Label, Input, Button }
from 'reactstrap';
import Facebook from './components/Facebook';

import { FacebookLoginButton } from 'react-social-login-buttons';


function App(){
 
      return(
    <Form className="signup-form">
     <h1 class name="text-center">
       <span className="font-weight-bold">SignUp</span>
      
     </h1>


     <h2 class name="text-center">CREATE YOUR ACCOUNT</h2>
     <FormGroup>
       <Label> First Name</Label>
       <Input type="FirstName" placeholder="FirstName"></Input>
       <Label>Last Name</Label>
       <Input type="LastName" placeholder="LastName"></Input>
       <Label>Email Address</Label>
       <Input type="EmailAddress" placeholder="EmailAddress"></Input>
       <Label>Password</Label>
       <Input type="Password" placeholder="Password"></Input>
       </FormGroup>
       <Button type="button" class="btn btn-warning">
       Sign Up
       </Button>
       <div className="text-center pt-3">
         ------------------------------------
       </div>
       <div className="text-center pt-3">
        OR

       </div>
       <Facebook />
       
       <div class name="text-center">
         <a herf="/sign-up">Sign up</a>
         <span className="p-2">|</span>
         <a herf="/Forget Password">Forgot Password</a>
       </div>
       
    </Form>
    
  );
 }

export default App;
