import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Login from './layout/Login'
import About from './layout/About'

import ErrorPage from './layout/ErrorPage'
import Dashboard from './layout/dashboad/dashboard'
import Products from './layout/dashboad/Products'
import Users from './layout/dashboad/Users'
import DashBoardHome from './layout/dashboad/DashBoardHome'
import Home from './layout/Home'


function App() {
  

  return (
   <BrowserRouter>
      <Routes>

        <Route>
            <Route index element={<Home/>}/>
           <Route path='about'element={<About/>}/>
           <Route path='login'element={<Login/>}/>
        </Route>


        <Route path='dashboard' element={<Dashboard/>}>
               <Route index element={<DashBoardHome/>}/>
              <Route path='products'element={<Products/>}/>
              <Route path='users'element={<Users/>}/>
        </Route>
        
           <Route path='*'element={<ErrorPage/>}/>
      </Routes>
   </BrowserRouter>

  )
}

export default App
