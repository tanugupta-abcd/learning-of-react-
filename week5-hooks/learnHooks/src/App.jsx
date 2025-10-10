
import './App.css'
import LearnUseReducer from ' ./1_useReducer/learnUseReducer'
import Dashboard from './5_useContext/Dashboard'
// import {} from './5_useContext/auth-context' 
import { useState } from 'react'
import { MyData } from './5_useContext/auth-context'

function App() {

  const [user, setUser ] =useState({
    name:"tanu",
  })

  return (
    <MyData.Provider value={user}>
       <>
            <LearnUseReducer/>
            <Dashboard />
       </>
    </MyData.Provider>
  )
}

export default App
