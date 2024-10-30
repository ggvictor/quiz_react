import { useEffect } from "react"
import { QuizContext } from "../context/quiz"

import ImgCategory from '../img/category.svg'

import './PickCategory.css'

const PickCategory = () => {
  return (
    <div id = "category">
        <h2>Escolha a categoria</h2>
        <p>As perguntas são referentes a umas das linguagens abaixo</p>
        <div><button>css</button></div>
        <img src= {ImgCategory} alt="imagem" />
    </div>
  )
}

export default PickCategory