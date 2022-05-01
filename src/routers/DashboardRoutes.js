import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import CateQuestions from '../components/CateQuestions'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Perfil from '../components/Perfil'
import Premios from '../components/Premios'
import Questions from '../components/Questions'

const DashboardRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='/premios' element={<Premios/>}/>
            {/* <Route path='/cateQuestions' element={<CateQuestions />}/> */}
            <Route path='questions' element={<Questions/>}/>
            <Route path='*' element={<Navigate to='/home'/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default DashboardRoutes