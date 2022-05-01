import { getAuth } from 'firebase/auth'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAsyn } from '../redux/actions/loginActions'
import { ContainerPerfil, Email, Image, Logout, Name, Points, Redeem } from '../styled/PerfilStyled'

const Perfil = () => {

  const auth = getAuth();
  const user = auth.currentUser;
  const {users} = useSelector(store => store.user); 

  const dispatch = useDispatch();
  console.log(user);

  return (
    <ContainerPerfil>
      <Image src={user.photoURL} />
      <Name>{users.displayName}</Name>
      <Email>{users.email}</Email>
      <Points>Puntos <strong>{users.score}</strong></Points>
      <Redeem>Puedes redimir los puntos por <strong>premios</strong></Redeem>
      <Logout to='/'
        onClick={() => dispatch(logoutAsyn())}>
        Cerrar Sesión
      </Logout>
    </ContainerPerfil>
  )
}

export default Perfil