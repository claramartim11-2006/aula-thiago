import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import Aluno from './components/Aluno'


function App() {
  function numero(){
    
  }
  return(
    <>

    </>
  )



  /*const [nome, setNome] = useState('')
  const [lista, setLista] = useState([])

  function adicionar() {
  setLista([...lista, nome])
  setNome('')
  }

  function alunoExcluir(nomeExcluir){
    const novaLista = lista.filter(item => item !== nomeExcluir)
    setLista(novaLista)
  }

  return (
    <>
    <Titulo/>
    <br/>
    <div className="con-input">
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}
      placeholder="Digite seu nome:"/>
      <button onClick={adicionar}>Adicionar</button>
    </div>
    <div>
      <p>------------------------------------------</p>
      {lista.map((item, index) => (<Aluno 
      key={index} 
      nomeDigitado={item}
      excluir={() => alunoExcluir(item)}/> 
      ))}
    </div>
    </>
  )*/
}

export default App
