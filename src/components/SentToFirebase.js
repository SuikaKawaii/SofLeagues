import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import {science} from '../data/questions'
import { db } from '../firebase/firebaseConfig'

const SentToFirebase = () => {
    const enviarDatos = () => {
        science.forEach(q => {
            const {id, imagen, pregunta, a, b, c, d, correct} = q;

            const pasarApi = {
                id: id,        
                image: imagen,
                question: pregunta,
                aa: a,
                ab: b, 
                ac: c,
                ad: d,
                correctAnsw: correct
            
            }
            addDoc(collection(db, 'test'), pasarApi)
            .then(resp => {
                console.log('...agregador');
            }).catch(error => {
                console.log(error);
            })
        })
    }
    // enviarDatos()

  return (
    <div>SentToFirebase</div>
  )
}

export default SentToFirebase