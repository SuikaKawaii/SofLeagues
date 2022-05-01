import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../components/Inicio";
import Register from "../components/Register";
import SentToFirebase from "../components/SentToFirebase";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user?.uid) {
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [])

  if(checking) {
    return(
      <Spinner animation="grow" />
    )
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <PublicRoute isAuth={isLoggedIn}>
            <Inicio/>
         </PublicRoute>
        } />

        <Route path='/register' element={
          <PublicRoute isAuth={isLoggedIn}>
            <Register/>
          </PublicRoute>}
        /> 

        <Route path='/*' element={
          <PrivateRoute isAuth={isLoggedIn}>
            <DashboardRoutes />
          </PrivateRoute>
        } />   
        {/* <Route path='send' element={<SentToFirebase/>}/> */}
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
