import { typesQuestions } from "../types/types";

const initialStates = {
    question: []
}
export const questionReducer = (state = initialStates, action) => {
    switch (action.type) {
        case typesQuestions.add:
            return {
                question: [action.payload,
                        ...state.aims]
            }
        case typesQuestions.edit:
            return {
                question: [action.payload]
            }
        case typesQuestions.list:
            return {
                question: [...action.payload]
            }
        case typesQuestions.delete:
            return {
                question: state.aims.filter(a => a.idDocument !== action.payload)
            }
        case typesQuestions.filter:
            return {
                ...state
            }
        
    
        default:
            return state;
    }
}