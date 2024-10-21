import {createContext, useReducer} from "react";

import questions from  '../data/question';

const STAGES = ["Start","Playing", "End"]

const initalState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
}

const quizReducer = (state, action) =>{
    console.log(state, action)


    switch(action.type){
        case "CHANGE_STATE":
            return{
                ...state,
                gameStage: STAGES[1],
            };
        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            })
            return{
                ...state,
                questions: reorderedQuestions,
            };

        default:
            return state
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
const value = useReducer(quizReducer, initalState);


    return <QuizContext.Provider value = {value}>{children}</QuizContext.Provider>
}