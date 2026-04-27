import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import Cliente from './components/Cliente'


function App() {
  
  const [servico, setServico] = useState('')
  const [agenda, setAgenda] = useState([])

  function adicionarServico() {
  setAgenda([...agenda, servico])
  setServico('')
  }

  function excluirServico(indexExcluir){
    const novaAgenda = agenda.filter((_, index) => index !== indexExcluir)
    setAgenda(novaAgenda)
  }

  return (
    <>
    <Titulo/>
    <div className="con-input">
      <h1> Selecione o serviço desejado</h1>

    <div className='caixa-entrada'>
      <input type="text" 
      value={servico} 
      onChange={(e) => setServico(e.target.value)}
      placeholder="Ex: SPA dos pés, Esmaltação Pé e Mão... "
    />
      <button onClick={adicionarServico}>Agendar</button>
    </div>
    </div>

    <div>
      {lista.map((item, index) => (<Cliente 
      key={index} 
      nomeDigitado={item}
      excluir={() => clienteExcluir(item)}/> 
      ))}
    </div>
    </>
  )
}
export default App
