import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ContainerPerfil = styled.div`
    margin-top: 30%;
`
export const Name = styled.h2`
    text-align: center;
    color: #DDDDDD;
    font-weight: bold;
`
export const Email = styled.h4`
    text-align: center;
    color: #DDDDDD;
    margin-top: 5%;
`
export const Points = styled.h5`
    text-align: center;
    color: #94A1B2;
    font-weight: bold;
    margin-top: 15%;
    
`
export const Redeem = styled.p`
    margin-bottom: 30%;
    font-size: 12px;
    margin-left: 0;
    text-align: center;
`
export const Logout = styled.button`
    border: none;
    margin: 0 20% 10% 38%;
    color: #2CB67D;
    &:hover{
        color: #82A284;
    }
`
export const Image = styled.img`
    border-radius: 50%;
    margin: 0 20% 5% 38%;
`