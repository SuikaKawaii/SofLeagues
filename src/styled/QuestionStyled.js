import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 3% 5% 5% 5%;
    @media (min-width: 900px){
        margin: 1% 2% 0 5%;
    }
`
export const Score = styled.h4`
    margin-left: 60%;
    @media (min-width: 900px){
        margin-left: 80%;
    }
    
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
        margin: 0 0.5% 0.5% 10%;
        width: 20%;
        height: 100px;
    }
`
export const QuestionDiv = styled.div`
    display: inline-flex;
    margin-top: 0;
    @media (min-width: 900px){
        margin: 0 5% 0 30%;
        width: 40%;
        /* border: solid; */
    }
`
export const QuestioP = styled.p`
    color: #DDDDDD;
    text-align: left;
    margin-top: 15%;
    font-size: 19px;
    margin-right: 10%;
    @media (min-width: 900px){
        margin: 5%;
    }
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
    @media (min-width: 900px){
        margin: 1% 5% 0 28%;
        width: 40%;
    }
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
    @media (min-width: 900px){
        width: 40%;
        margin: 0 5% 0 31%;
    }
`