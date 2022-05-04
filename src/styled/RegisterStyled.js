import { Link } from "react-router-dom";
import styled from "styled-components";


export const Form = styled.form`
    margin-top: 20%;
    align-items: center;
    justify-content: center;
    @media (min-width: 900px){
        margin-top: 2%;
    }
`
export const Imagen = styled.img`
    margin-left: 38%;
    width: 25%;
    border-radius: 50%;
    @media (min-width: 900px){
        width: 5%;
        margin-left: 48%;
    }
`
export const Label = styled.label`
    margin-left: 28%;
    display: block;
    margin-bottom: 2%;
    @media (min-width: 900px){
        margin-bottom: 1%;
        margin-left: 40%;
    }
`
export const Input = styled.input`
    border-radius: 5px;
    height: 25px;
    width: 50%;
    margin-left: 25%;
    margin-bottom: 2%;
    height: 20px;
    padding: 8px;
    @media (min-width: 900px){
        margin-bottom: 1%;
        width: 20%;
        margin-left: 40%;
    }

`
 export const Button = styled.button`
    margin-top: 20px;
    margin-left: 24.5%;
    margin-bottom: 5%;
    width: 55%;
    height: 40px;
    border-radius: 8px;
    background-color: #2CB67D;
    font-size: 15px;
    font-weight: bold;
    @media (min-width: 900px){
        margin-left: 40%;
        width: 20%;
        margin-bottom: 2%;
    }

 `
export const Title = styled.h2`
    margin-top: 5%;
    margin-left: 38.5%;
    font-weight: bold;
    @media (min-width: 900px){
        margin-left: 45%; 
        margin-top: 1%;
    }
`
export const LinkReg = styled(Link)`
    margin-left: 45%;
    color: #2CB67D;
    padding: 5px;
    font-size: 18px;
    text-decoration: none;
    
    &:hover{
        color: green;
    }
    @media (min-width: 900px){
        margin-left: 48%;
    }
`
export const H6 = styled.h6`
    text-align: center;
    margin: 0 5% 0 5%;
    @media (min-width: 900px){
        width: 30%;
        margin-top: 1%;
        margin-left: 35%;
        font-size: 13px;
    }
`