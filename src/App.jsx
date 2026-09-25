import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UpiPayment from './components/UpiPayment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-zinc-400 h-screen flex flex-col items-center justify-center">
      hello
      <UpiPayment/>
    </div>
  )
}

export default App
