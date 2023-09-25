import React from 'react'
import Stopwatch from './StopwatchUI/Stopwatch'
import { StopwatchProvider } from './Context/StopwatchContext'

function App() {


  return (
    <>
    <StopwatchProvider>
     <Stopwatch/>
     </StopwatchProvider>
     
    
    </>
  )
}

export default App
