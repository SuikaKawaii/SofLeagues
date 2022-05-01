import { Button} from "react-bootstrap";
import styled from "styled-components";

export const Img = styled.img`
    border: 8px solid #A1E3D8;
    border-radius: 50%;
    margin: 10px 10px 20px 5px;
    width: 35%;
    height: 85px;
` 

export const Div1 = styled.div`
    margin-left: 35%;
    margin-top: 10%;
    width: 80%;
    @media (min-width: 940px){
        margin-left: 45%;
        margin-top: 3%;
    }
`
export const Div2 = styled.div`
    margin-left: 18%;
    @media (min-width: 940px){
        margin-left: 42%;
    }
`
export const Div3 = styled.div`
    margin-left: 18%;
    @media (min-width: 940px){
        margin-left: 42%;
    }
    
`
export const Title = styled.h2`
    margin: 15% 5% 0 5%;       
    text-align: center;
    color: #DDDDDD;
    @media (min-width: 940px){
        margin-left: 65%;
        margin: 7%;
    }

`
export const ButtonImg = styled(Button)`
    background-color: none;
`
