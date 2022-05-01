import { getAuth } from 'firebase/auth'
import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addUserAsyn } from '../redux/actions/userActions'
import { ButtonImg, Div1, Div2, Div3, Img, Title} from '../styled/HomeStyled'


const Home = () => {

  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    createUser();
  }, [])

  const createUser = () => {
    const userCreate = {
      name: user.displayName,
      email: user.email
    }
    dispatch(addUserAsyn(userCreate))
  }
  
  return (
    <div>
      <React.Suspense fallback={<Spinner />}>
      <div>
        
        <Title>Desafía tus conocimientos en la categoria que prefieras.</Title>
        <Div1>          
           <ButtonImg as={Link} to={`/questions`} state={{category: "history" }}>
              <Img src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1651266109/images/SofkaPruebaTecnica/history_ifrpef.jpg'  />
           </ButtonImg>
                         
        </Div1>
        <Div2>
          <ButtonImg as={Link} to={`/questions`} state={{category: "science" }} >
            <Img src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1651266119/images/SofkaPruebaTecnica/ciencia_k0pwqd.jpg'/>
          </ButtonImg>
          <ButtonImg as={Link} to={`/questions`} state={{category: "sports" }} >
            <Img src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1651266631/images/SofkaPruebaTecnica/deportes_asvjwn.jpg'/>
          </ButtonImg>
        </Div2>
        <Div3>
          <ButtonImg as={Link} to={`/questions`} state={{category: "entertaiment" }} >
            <Img src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1651265971/images/SofkaPruebaTecnica/entretenimiento_hx3ro4.jpg'/>
          </ButtonImg >
          <ButtonImg as={Link} to={`/questions`} state={{category: "artLiterature" }} >
            <Img src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1651266557/images/SofkaPruebaTecnica/arte_qwf69s.jpg'/>
          </ButtonImg>
        </Div3>
        
      </div>
    </React.Suspense>
    </div>
  )
}

export default Home