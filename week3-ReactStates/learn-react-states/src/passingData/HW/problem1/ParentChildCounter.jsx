import React, { useState } from 'react'

 

// parent component 
const ParentChildCounter = () => {
    
  const [counter, setCounter] = useState(0);

  function increaseFunction(){
     setCounter(prevCounter =>prevCounter+1);
  }

  function decreaseFunction(){
     setCounter(prevCounter =>prevCounter-1);
  }
    


  // Child 1 - Display
  function DisplayChild({ counter }) {
    return <h2>Counter Value: {counter}</h2>;
  }


  // Child 2 - Controls
  function ControlChild({ onIncrement, onDecrement }) {
    return (
      <div>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onIncrement}>Increment</button>
      </div>
    );
  }
  return (
    <div>
      <p>Parent-Child Counter</p>
      <DisplayChild counter={counter}/>
      <ControlChild onIncrement={increaseFunction} onDecrement={decreaseFunction}/>
      
    </div>
  )
}

export default ParentChildCounter ;
