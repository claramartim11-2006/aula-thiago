import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import Aluno from './components/Aluno'


function App() {
  const [nome, setNome] = useState('')
  const [lista, setLista] = useState([])

  function adicionar() {

  setLista([...lista, nome])
  setNome('')
  }

  return (
    <>
    <Titulo/>
    <div className="con-input">
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}
      placeholder="Digite seu nome:"/>
      <button onClick={adicionar}>Adicionar</button>
    </div>
    <br/>
    <div>
      <p>------------------------------------------</p>
      {lista.map((item, index) => (<Aluno key={index} nomeDigitado={item}/> 
      ))}
      <button > Excluir</button>
    </div>
    </>
  )
}

export default App
