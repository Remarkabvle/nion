import { useState } from 'react'
import './App.css'
import Todolist from './components/Todolist/Todolist.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todolist/>
    </>
  )
}

export default App
