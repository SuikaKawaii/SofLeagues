
import { Button } from "react-bootstrap";
import styled from "styled-components";

export const StyledLogin = styled.img`
    width: 25%;
    margin-left: 36%; 
    margin-top: 65px; 
    border-radius: 50%; 
    @media (min-width: 900px){
        width: 15%;
    } 
    
`
export const Introduction = styled.p`
    text-align: center;
    margin: 0 5% 5% 5%;
    font-size: 14px;
`
export const StyledButton = styled.button`
    background-color: #EF4565;
    width: 82%;
    height: 45px;
    margin-left: 36px;
    margin-right: 36px;
    font-size: 15px;
    font-weight: bold;
    color: #DDDDDD;
    border-radius: 8px;
    @media (min-width: 900px){
        width: 30%;
        margin-left: 32%;
        border-radius: 5px;
    }
    
`
export const StyledH1 = styled.h1`
    margin-left: 30%;
    margin-top: 5%;
    color: #DDDDDD;
    font-weight: bold;
    @media (min-width: 900px){
        margin-left: 41%;
    }
`

export const ButtonLog = styled(Button)`
    background-color: #2CB67D;
    border-color: #2CB67D;
    width: 80%;
    height: 40px;
    margin: 0 10% 5% 10%;       
    font-size: 18px;
    border-radius: 8px;
    font-weight: bold;
    @media (min-width: 900px){
        margin-bottom: 2%;
        width: 30%;
        margin-left: 33%;
    }
`
export const InputEmail = styled.input`
    border-radius: 5px; 
    margin: 1% 25% 0 25%;
    height: 20px;
    padding: 10px;
`
export const InputPassword = styled.input`
    border-radius: 5px; 
    margin: 1% 25% 0 25%;
    height: 20px;
    padding: 10px;
`
export const LabelInputs = styled.label`
    margin: 1% 23% 0 23%;
    
`