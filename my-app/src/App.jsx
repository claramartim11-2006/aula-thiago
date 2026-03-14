import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Titulo/>
      </div>
  )
}

export default App
