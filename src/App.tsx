import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Rules from './components/Rules'
import Step1 from './components/Step1'
import Step2 from './components/Step2'

function App() {

  const [showStep1, setShowStep1] = useState(true)
  const [showStep2, setShowStep2] = useState(false)
  const [playersChoice, setPlayersChoice] = useState('')
  const [score, setScore] = useState(0)
  
  return (
    <div className='flex flex-col   items-center justify-between h-screen py-5'>

      <div>
        <Header score={score}/>
      </div>
            
      <div className=' '>
        {showStep1 && 
        <div>
          <Step1 
            setPlayersChoice={setPlayersChoice} 
            setShowStep1={setShowStep1} 
            setShowStep2={setShowStep2} 
          />
        </div>}

        {showStep2 && 
        <div>
          <Step2 
            playersChoice={playersChoice} 
            setShowStep1={setShowStep1} 
            setShowStep2={setShowStep2} 
            setScore={setScore} 
            score={score}
          />
        </div>}
      </div>

      <div>
        <Rules/>
      </div>
    
    </div>
  )
}

export default App
