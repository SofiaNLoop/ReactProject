import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import JobCard from './components/JobCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <JobCard></JobCard>
        <h1 className='bg-blue-500 text-black text 3xl' > Comenzando proyecto </h1>
      </div>
    </>
  )
}

export default App
