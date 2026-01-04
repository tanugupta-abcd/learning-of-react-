import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate();
  const shouldReirect = true;

  function handleOnclick(){
    console.log("button clicked");
    navigate("login",{
      state:{name:"tanu"},
      // replace:true
    });

   
  }
   if(shouldReirect){
         return <Navigate to="dashboard"
          // replace={true} 
          />
    }
  return (
    
    <div> 
     <nav>
       <h1>this is home page </h1>
      <Link to={"/about"} > AboutPageLink</Link>
      <br />
      <Link to={"/login"} state={{name:"tanu"}}> LoginPageLink </Link>
     </nav>

     <button className='bg-blue-500 text-white' onClick={handleOnclick}>click to send</button>
    </div>
  )
}

export default Home
