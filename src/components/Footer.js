import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BsPerson} from 'react-icons/bs'
import {GoHome} from 'react-icons/go'
import {GiPartyPopper} from 'react-icons/gi'

const Footer = () => {
  return (
    <div className='di'>
        <Navbar  className='fijada'>
        <Container className='di'>
          
          <Navbar.Collapse id="basic-navbar-nav" className='di'>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" className='item'>
                  <GoHome className='image'/>
                   Home
              </Nav.Link>
              <Nav.Link as={Link} to="/perfil" className='item'>
                  <BsPerson className='image' />
                  Perfil
              </Nav.Link>
              <Nav.Link as={Link} to="/premios" className='item'>
                  <GiPartyPopper className='image' />
                  Premios
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer