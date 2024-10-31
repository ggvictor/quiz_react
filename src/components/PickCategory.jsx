import { useContext } from "react";
import { QuizContext } from "../context/quiz"

import ImgCategory from '../img/category.svg'

import './PickCategory.css'

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({type: "START_GAME", payload: category})

    dispatch({type: "REORDER_QUESTIONS"})
  }
  return (
    <div id = "category">
        <h2>Escolha a categoria</h2>
        <p>As perguntas são referentes a umas das linguagens abaixo</p>
        <div>{quizState.questions.map((question) =>(
          <button onClick = {() => chooseCategoryAndReorderQuestions(question.category)} key = {question.category}>{question.category}</button>
        ))}</div>
        <img src= {ImgCategory} alt="imagem" />
    </div>
  )
}

export default PickCategory