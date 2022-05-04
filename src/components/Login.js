import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik'
import { ButtonLog, InputEmail, InputPassword, LabelInputs } from '../styled/LoginStyled'
import { useDispatch } from 'react-redux'
import { loginAsyn } from '../redux/actions/loginActions'

const Login = () => {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (data) => {
      console.log(data);
      dispatch(loginAsyn(data.email, data.password))
    }
  })


    
  return (
    <div>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3 inputUser" controlId="formBasicEmail">
            <LabelInputs className='labelEmail'>Email address</LabelInputs><br/>
            
            <InputEmail
              className='inputUser' 
              type="email" 
              placeholder="Enter email" 
              name='email'              
              onChange={formik.handleChange}
              required/>
            
          </Form.Group>

          <Form.Group className="mb-5 inputPass" controlId="formBasicPassword">
            <LabelInputs>Password</LabelInputs><br/>
            <InputPassword
              type="password" 
              placeholder="Password" 
              name='password'              
              onChange={formik.handleChange}
              required/>
          </Form.Group>
          
          <ButtonLog             
            type="submit"            
            >
            Login
          </ButtonLog>          
          <p>¿Aún no tienes una cuenta?<Link to='/register' className='inscripcion'> Inscribete</Link></p>
        </Form>
    </div>
  )
}

export default Login