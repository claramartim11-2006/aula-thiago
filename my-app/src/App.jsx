import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import Aluno from './components/Aluno'


function App() {
  const [nome, setNome] = useState("")

  function mostrarMensagem(){
    if (nome === ""){
      alert("Digite um nome primeiro!")
    }else{
      alert(`Aluno ${nome} não cadastrado!`)
    }
    setNome("")
}

function nomeAluno(event) {
  setNome(event.target.value)
}
  return (
    <>
      <div>
        <Titulo/>
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)}
          placeholder="Digite seu nome"/>
      </div>
      <br></br>
      <div>
        <button onClick={mostrarMensagem}> Verificar matricula</button>
      </div>
    </>
  )
}

export default App
