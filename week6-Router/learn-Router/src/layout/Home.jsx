import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    
    <div>
      
      <h1>this is home page </h1>
      <Link to={"/about"} > AboutPageLink</Link>
      <br />
      <Link to={"/login"} state={{name:"tanu"}}> LoginPageLink </Link>
    </div>
  )
}

export default Home
