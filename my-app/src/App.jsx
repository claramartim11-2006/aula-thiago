import { useState } from 'react';
import './App.css';
import CadastroCliente from './components/cadastro/CadastroCliente';


function App() {

  const [tela, setTela] = useState('inicio')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  
  const voltarELimpar =() =>{
    setNome('');
    setEmail('');
    setTelefone('');
    setTela('inicio');
  };

  const [servicos, setServicos] = useState([]);
  const toggleServico = (servico) => {
    if (servicos.includes(servico)) {
      setServicos(servicos.filter(s => s !== servico));
    }else{
      setServicos([...servicos,servico]);
    }
  };

  return(
    <div className='container-principal'>

      {tela === 'inicio' && (
        <div className='boas-vindas'>
          <h1 className='logo-site'>EveNails</h1>
          <span className='h2'>Já possui cadastro?</span>
          <div className='botoes-grupo'>
            <button className='btn-rosa' onClick={() => setTela('login')}> Logar </button>
            <button className='btn-rosa' onClick={() => setTela('cadastro')}> Cadastrar </button>
          </div>
        </div>
      )}

      {tela === 'agendamento' && (
        <div className='card-form' style={{ width: '450px'}}>
          <h2 className='h2'>Agende seu Horário!</h2>

          <div className='secao-agendamento'>
            <p>Escolha os Serviços:</p>
            <div className='grade-servicos'>
              {['Esmaltação Simples Pé e Mão', 'Esmaltação Simples Somente Pé', 'Esmaltação Simples Somente Mão', 'Esmaltação em Gel Somente Pé', 'Esmaltação em Gel Somente Mão', 'Esmaltação em Gel Pé e Mão'].map((item) => (
                <label key={item} className={`item-check ${servicos.includes(item) ? 'selecionado' : ''}`}>
                  <input 
                    type='checkbox'
                    checked={servicos.includes(item)}
                    onChange={() => toggleServico(item)}
                  />
                {item}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {tela === 'login' && (
        <div className="card-form">
          <span className='h2'>Acessar Conta</span>
          <input
          type='email'
          placeholder='Digite seu e-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <button className='btn-rosa'
          onClick={() => setTela('agendamento')}
          >Entrar</button>
          <button className='btn-rosa' onClick={() => voltarELimpar()}>Voltar</button>
        </div>
      )}

      {tela === 'cadastro' && (
        <div className='card-form'>
          <span className='h2'>Cadastrar</span>
          <input
          type='text'
          placeholder='Seu Nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          />
          <input 
          type='email'
          placeholder='Seu E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input 
          type='telefone'
          placeholder='Seu Telefone(WhatsApp)'
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          />
          <button className='btn-rosa'>Finalizar Cadastro</button>
          <button className='btn-rosa' onClick={() => voltarELimpar()}>Voltar</button>
        </div>
      )}
    </div>
  )}
export default App
