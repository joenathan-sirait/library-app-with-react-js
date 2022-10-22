import React from 'react'

import Input from '../../components/Input'
import LayoutAuth from '../../layouts/auth'
import { Form } from '../../styles/pages/Login'
import Button from '../../components/Button';



const Register = () => {
  return (
  <LayoutAuth>
   <Form className="form-login-wrapper">
        <form>
          <h1>Register</h1>
          <p>Welcome Back, Please Register
            to create account</p>
          <div>
            <Input placeholder="Username"/>
          </div>
          <div>
            <Input placeholder="Username"/>
          </div>
          <div>
            <Input placeholder="Username"/>
          </div>
          <div>
            <Input placeholder="Username"/>
          </div>
          <Button  to="/login" buttonName="Login"  />
          <Button to="/register" primary buttonName="Sing Up"/>
        </form>
      </Form>
  </LayoutAuth>
  )
}

export default Register