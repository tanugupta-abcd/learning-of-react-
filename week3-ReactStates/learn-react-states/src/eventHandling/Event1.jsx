import React from 'react'

 const handleClick= ()=>{
     alert("hi you clicked ")
 };

  const handleMouseOver= ()=>{
     console.log("hello")
 };

  const handleFormSubmit= (e)=>{
    e.preventDefault();
      console.log("Form was submitted")
  };

  const handleChange =(e)=>{
    console.log(e.target.value);
  };

const Event1 = () => {
  return (
    <div>
      <button onClick={handleClick} onMouseOver={handleMouseOver}>click me</button>
     
        <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Enter Name</label>
        <input id="name" type="text" name="username" onChange={handleChange}/>
        <br />
        <label htmlFor="pass">Enter Password</label>
        <input id="pass" type="password" name="password" />
        <br />
        <button>submit</button>
       </form>


    </div>

  )
}

export default Event1
