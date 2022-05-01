import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Card, CardContainer, H6, Imagen, RedeemH2, RedeemH4, Title } from '../styled/PremioStyled';
import { redeem } from '../data/redeem';
import RedeemPoints from './RedeemPoints';

const Premios = () => {
  const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState([]);

    const dispatch = useDispatch()
    
    
    

    const handleRedeem = (id) => {
        
        const filterRedeem = redeem.find(r => r.id === id)
        
        setModal(true)
        setEditModal(filterRedeem)
    }
  return (
    <div>
      <RedeemH2>
                Redime tus puntos
            </RedeemH2>
            <RedeemH4>
                ¡ Redime tus puntos de ahorro por descuentos o productos reales !
            </RedeemH4>
            <CardContainer>
                {
                    redeem.map((r, index) => (
                        <Card key={index}
                            className='card'
                            onClick={() => handleRedeem(r.id)}>                            
                            <Imagen src={r.img} />
                            <H6>{r.puntos}</H6>
                            <Title>{r.titulo}</Title>
                            
                        </Card>
                    ))
                }
            </CardContainer>
            {
                modal === true ? <RedeemPoints modal={editModal} modalShow={modal} setModal={setModal}/> : ''
            }
            
    </div>
  )
}

export default Premios