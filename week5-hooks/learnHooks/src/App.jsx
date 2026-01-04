
import './App.css'
// import LearnUseReducer from ' ./1_useReducer/learnUseReducer'
import Dashboard from './5_useContext/Dashboard'
import { AuthContext } from './5_useContext/auth-context' 
import { useState } from 'react'

function App() {

  const [user, setUser ] = useState({
    name:"tanu",
    age:22,
  })

  return (
    <AuthContext.Provider value={user}>
       <>
            {/* <LearnUseReducer/> */}
            <Dashboard user={user}/>
       </>
    </AuthContext.Provider>
  )
}

export default App
