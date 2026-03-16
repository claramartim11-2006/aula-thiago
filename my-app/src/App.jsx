import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import Aluno from './components/Aluno'

function mostrarMensagem(){
  alert("Aluno não cadastrado!")
}


function App() {
  return (
    <>
      <div>
        <Titulo/>
        <Aluno/>
      </div>
      <br></br>
      <div>
        <button onClick={mostrarMensagem}> Verificar matricula</button>
      </div>
    </>
  )
}

export default App
