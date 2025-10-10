import React, { useContext } from 'react'
import { myData } from './auth-context';

const NavBar = () => {
  
   const Data = useContext(myData);

  return (
    <div style={{background:'lightblue', height:'10vh'}}>
      navBar{Data.name}
    </div>
  )
}

export default NavBar
