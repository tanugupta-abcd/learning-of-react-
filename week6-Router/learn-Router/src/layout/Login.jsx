import React from 'react'
import { Link, useLocation } from 'react-router'



  const Login =()=>{
    const location = useLocation();
    console.log(location)


  return (
        <div>
          you are inside Login page
            <div>Login component</div>
      </div>
  
  )

  }
export default Login
