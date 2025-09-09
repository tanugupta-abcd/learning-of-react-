import React, { useState } from 'react'

const Counter = () => {
   
    const [counter ,setCounter] =useState(0);


  
    function handleIncClick(){
      setCounter(counter+1)
    }
    function handleDecClick(){
      setCounter(counter-1)
    }

  return (
    <div>
      <p>{counter}</p>
     { counter>0 &&<button onClick={handleDecClick}>Decrement Counter</button>}
      {counter<10 &&<button onClick={handleIncClick}>Increase Counter</button>}
    </div>
  )
}

export default Counter
