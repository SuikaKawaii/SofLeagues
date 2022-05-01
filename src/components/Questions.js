import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnswerDiv, BoyImg, Checkbox, CloseButton, ComprobarButton, HeaderDiv, QuestionDiv, QuestioP, ResultDiv, Score } from '../styled/QuestionStyled'
import { history, science, entertaiment, sports, artLiterature } from '../data/questions'
import Swal from 'sweetalert2'
import { editUserAsyn, loadUserDate } from '../redux/actions/userActions'
import { getAuth } from 'firebase/auth'

const Questions = () => {
   
    const auth = getAuth();
    const user = auth.currentUser;
    const location = useLocation()
    const {category} = location.state
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {users} = useSelector(store => store.user);
    const [filterCat, setFilterCat] = useState([])
    const [numQuestion, setNumQuestion] = useState(1)
    const [score, setScore] = useState(0)
    const [answerSel, setAnswerSel] = useState([])
    const [check, setCheck] = useState(false)
    console.log(users);

    useEffect(() => {
        
        if( category === 'history'){            
            setFilterCat(history.find(q => q.id == numQuestion))
        }else if (category === 'science') {
            setFilterCat(science.find(q => q.id == numQuestion))
        }else if(category === 'entertaiment') {
            setFilterCat(entertaiment.find(q => q.id == numQuestion))
        }else if(category === 'artLiterature') {
            setFilterCat(artLiterature.find(q => q.id == numQuestion))
        }else {
            setFilterCat(sports.find(q => q.id == numQuestion))
        }
        dispatch(loadUserDate(user.uid))
        
    }, [numQuestion])
    
    const handleChange = ({target}) => {
        setAnswerSel({
            ...answerSel,
            [target.name]: target.value
        })
    }
        
    const handleSubmit = (e) => {
        e.preventDefault();
        answer()
        reset()
    }
    const answer = () => {
        console.log(answerSel, filterCat.correct);
        if(answerSel.answerSel == filterCat.correct){
            setScore(score + 50)
            updateUser()
        }else if(answerSel.answerSel !== filterCat.correct){
            Swal.fire({
                icon: 'error',
                title: '😔 Lo siento..',
                text: 'Perdiste el juego y tus puntos acumulados!'                
            })
            setScore(0)
            navigate('/home')
        }
        
    }
    const reset = () => {
        setAnswerSel([])
    }
    const updateUser = () => {
        const upUser = {
            ...users,
            score: score
        }
        dispatch(editUserAsyn(user.email, upUser))
        
    }
    console.log(filterCat);
    
  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <HeaderDiv className='headerI'>
                <CloseButton type='button' className='botton'>
                    <img src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1645242060/Sprint-2/Property_1_x_qtqrb5.svg' />
                </CloseButton>
                <Score >Score: <strong>{score}</strong></Score>
            </HeaderDiv>
            <div>
                
                <QuestionDiv className='question' >
                    <BoyImg  src={filterCat.imagen} />
                    <QuestioP>{filterCat.pregunta}</QuestioP>
                </QuestionDiv>
                <ResultDiv className='result'>
                    <AnswerDiv>
                        {filterCat.a}
                        <Checkbox 
                            type='checkbox'
                            name="answerSel"
                            value={filterCat.a}
                            onChange={handleChange}
                        />
                    </AnswerDiv>
                    <AnswerDiv className='span1'>
                        {filterCat.b}
                        <Checkbox type='checkbox' 
                            name="answerSel"
                            value={filterCat.b}
                            onChange={handleChange}
                        />
                    </AnswerDiv>
                    <AnswerDiv className='span2'>
                        {filterCat.c}
                        <Checkbox type='checkbox'
                            name="answerSel"
                            value={filterCat.c}
                            onChange={handleChange}
                        />
                    </AnswerDiv>
                    <AnswerDiv className='span2'>
                        {filterCat.d}
                        <Checkbox type='checkbox'
                            name="answerSel"
                            value={filterCat.d}
                            onChange={handleChange}
                        />
                    </AnswerDiv>
                </ResultDiv>                                                 
            </div>
            <div>
                <ComprobarButton  type='submit'
                    onClick={() => setNumQuestion(numQuestion + 1)}
                >
                     COMPROBAR
                </ComprobarButton>
            </div>
        </Form>
    </div>
  )
}

export default Questions