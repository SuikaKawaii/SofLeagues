import React from 'react'
import { useDispatch } from 'react-redux'
import {useFormik} from 'formik';
import { Button, Form, H6, Imagen, Input, Label, LinkReg, Title } from '../styled/RegisterStyled'
import { addUserAsyn } from '../redux/actions/userActions';
import { registreEmailPasswordNombre } from '../redux/actions/registerActions';

const Register = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            displayName: '',
            email: '',
            password: ''
        },
        onSubmit: (data) => {
            console.log(data);
            
            dispatch(registreEmailPasswordNombre(data))
        }
        
    })

    
  return (
    <div>
        <Form id="formulario" onSubmit={formik.handleSubmit}>
           <Imagen src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1651119928/images/SofkaPruebaTecnica/owl-logo-icon-sunglasses-logo-design-mas-vector-27336319_d0ak3q.jpg' alt=''/>
           <Title>Bienvenido</Title>
           <H6>Registrate para empezar a jugar <strong>SofLeagues</strong> y gana muchos premios</H6>
           <hr/>
               <div>
                   <Label>Nombre Completo</Label>
                   <Input 
                    id="inputNombre" 
                    name="displayName" 
                    placeholder='Tu Nombre'
                    onChange={formik.handleChange}
                    /> 
               </div>               
               <div>
                   <Label>Correo electrónico</Label>
                   <Input 
                    name='email' 
                    type='email'
                    placeholder='Tu Email'
                    onChange={formik.handleChange}
                    />
               </div>
               <div>
                   <Label>Contraseña</Label>
                   <Input  
                    name='password' 
                    type='password' 
                    placeholder='Una Contraseña'
                    onChange={formik.handleChange}
                    />
               </div>          
               <div>
                   <Button 
                    id="btnRegistro" 
                    type='submit'
                    >
                        Enviar
                    </Button> 
               </div>
               <div>
                   <LinkReg to='/'>Atrás</LinkReg>
               </div>
           </Form>
    </div>
  )
}

export default Register