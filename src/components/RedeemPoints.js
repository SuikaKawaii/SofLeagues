import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editUserAsyn, loadUserDate } from '../redux/actions/userActions';
import { Card, H6, Imagen, Title } from '../styled/PremioStyled';
import { ComprobarButton } from '../styled/QuestionStyled';
import { DivInfoPoints, DivRedeemPoints, H3, H6Points } from '../styled/RedeemPointsStyled';
import Codigo from './Codigo';

const RedeemPoints = ({modal, modalShow, setModal}) => {

    const dispatch = useDispatch();

    const handleClose = () => setModal(false);

    const auth = getAuth()
    const user = auth.currentUser

    const {users} = useSelector(store => store.user)
    const [codigo, setCodigo] = useState(false);
    console.log(users);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(users.puntos, modal.puntos);
        if(users.puntos >= parseInt(modal.puntos)){
        userData()
        }else{
            alert('falrtan puntos, no se puede redimir')
        }
    }
    
    const userData = () => {   
        const userDatos = {
            ...users,
            puntos: users.puntos - modal.puntos,  
            product: modal.titulo         
        }
        dispatch(editUserAsyn(user.email, userDatos))
        dispatch(loadUserDate(user.uid))
        setCodigo(true)         
    } 
  return (
    <div>
        <Modal show={modalShow} onHide={handleClose}>                    
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <DivRedeemPoints>
                                <Card className='card'>
                                    <Imagen src={modal.img} />
                                    <H6>{modal.punto}</H6>
                                    <Title>{modal.titulo}</Title>
                                </Card>
                                <DivInfoPoints>
                                    <H3>Deseas redimir este <br/> producto?</H3>
                                    <H6Points>Tus puntos <b>{users.puntos}</b></H6Points>
                                    <H6Points>Puntos productos <b>{modal.puntos}</b></H6Points>
                                    
                                </DivInfoPoints>  
                            </DivRedeemPoints>               
                            </Form.Group>
                            
                            <Button variant="secondary" onClick={handleClose} className='mx-4'>
                                Cerrar
                            </Button>
                            <ComprobarButton type="submit" className='mx-4' style={{width:120}}>
                                Redimir
                            </ComprobarButton>
                            
                            {
                                codigo === true ? <Codigo/> : ''
                            }
                        </Form>
        
                    </Modal.Body>
        
        
                </Modal>           
        
    </div>
  )
}

export default RedeemPoints