import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 3% 5% 5% 5%;
    @media (min-width: 900px){
        margin: 2%;
    }
`
export const Score = styled.h4`
    margin-left: 60%;
    
`
export const CloseButton = styled.button`
    border: none;
`

export const BoyImg = styled.img`
    width: 25%;
    height: 150px;
    margin: 5% 0 0 10%;
    border-radius: 50%;
    @media (min-width: 900px){
        margin: 1% 0.5% 0.5% 10%;
    }
`
export const QuestionDiv = styled.div`
    display: inline-flex;
    margin-top: 0;
`
export const QuestioP = styled.p`
    color: #DDDDDD;
    text-align: left;
    margin-top: 15%;
    font-size: 19px;
    margin-right: 10%;
`
export const ResultDiv = styled.div`
    margin: 1% 5% 3% 10%;
`
export const AnswerDiv = styled.div`
    border: 2px solid #DDDDDD;
    padding: 1%;
    margin-right: 5%;
    padding-left: 5%;
    margin-bottom: 5%;
    color: #DDDDDD;
    border-radius: 5px;
    position: relative;
`
export const Checkbox = styled.input`
    position: absolute;
    right: 25px;
    top: 8px;
    
`
export const ComprobarButton = styled.button`
    width: 70%;
    margin-left: 15%;
    margin-top: 3%;
    border-radius: 10px;
    height: 50px;
    background-color: #7F5AF0;
    color: #DDDDDD;
    font-weight: bold;
    font-size: 15px;
`