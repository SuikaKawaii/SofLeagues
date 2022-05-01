import React from 'react'
import { Introduction, StyledButton, StyledH1, StyledLogin } from '../styled/LoginStyled'
import Login from './Login';
import {BsGoogle} from 'react-icons/bs';
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginGoogle } from '../redux/actions/loginActions';

const Inicio = () => {

  const dispatch = useDispatch();

  const handleGoogle = () => {
    dispatch(loginGoogle())
  }
  return (
    <div>
         <React.Suspense fallback={<Spinner className='spinner' variant='info'/>}>
          <div>
            <StyledLogin src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1651119928/images/SofkaPruebaTecnica/owl-logo-icon-sunglasses-logo-design-mas-vector-27336319_d0ak3q.jpg' alt='login' />
            <StyledH1>SofLeagues</StyledH1>
            <Introduction>Bienvenidos a SofLeagues, para empezar a jugar por favor inicia sesión</Introduction>
            <StyledButton type='button'
              onClick={handleGoogle}>
              <BsGoogle className='google'/> 
                Continuar con Google
            </StyledButton>
            <hr/>
            <Login className='formulario'/>
            
          </div>
         </React.Suspense>
    </div>
  )
}

export default Inicio