import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, Redirect  } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import LayoutAuth from '../../layouts/auth'
import { FormInput } from '../../styles/pages/Login';


    const Login = () => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        
       
        const usernameChange = (e) => {
          e.preventDefault();
          setUsername(e.target.value);

        };
      
        const passwordChange = (e) => {
          e.preventDefault();
          setPassword(e.target.value);
  
        };
      
        const checkUser = (e) => {

          e.preventDefault();
          if (username === "test@gmail.com") {
            if (password === "test1234") {
              alert("Success Login!");
              window.location.replace("/")
            } else {
              alert("Password salah, silahkan ulangi!");
            }
          } else {
            alert("User tidak ditemukan, silahkan regis terlebih dahulu!");
          }
        };
  return (
    <LayoutAuth>
    
    <FormInput className="form-login-wrapper">
        <form>
          <h1>Login</h1>
          <p>Welcome Back, Please Login
          to your account</p>
          <div>
     
            <Input
              type={"text"}
              placeholder="username :"
              onChange={(e) => usernameChange(e)}
            />
          </div>
          <div>
         
            <Input
              type={"password"}
              placeholder="password :"
              onChange={(e) => passwordChange(e)}
            />
          </div>
          <div className="d-flex justify-content-around">
            <Form.Group className="mb-3 me-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Link className="text-decoration-none text-dark">Forgot Password</Link>
          </div>
          <Button  buttonName="Login" onClick={(e) => checkUser(e)} />
          <Button to="/register" primary buttonName="Sing Up"/>
        </form>
      </FormInput>
    </LayoutAuth>
  )
}

export default Login