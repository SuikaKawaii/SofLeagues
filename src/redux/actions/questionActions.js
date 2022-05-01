import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesQuestions } from "../types/types";

export const listQuestionAsyn = () => {
    return async(dispatch) => {
        const questionCollection = await getDocs(collection(db, 'question'))
        const question = []
        questionCollection.forEach((doc) => {
            question.push({
                ...doc.data()
            })
        })
        dispatch(listQuestionSyn(question))
    }
}

export const listQuestionSyn = (question) => {
    return {
        type: typesQuestions.list,
        payload: question
    }
}