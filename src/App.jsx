import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Intro from './Intro'
import Projects from './Projects'
import Tech from './Tech'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0b14] to-[#111325] text-white" >
        <Intro />
        <Projects />
        <Tech />


      </div>
    </>
  )
}

export default App
