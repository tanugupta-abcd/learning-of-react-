import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
const [count, setCount]= useState(0);

    function handleParentClick(){
      setCount(prvCount=>prvCount+1);
    }
  return (
    <div>
        <h1>inside parent:{count} </h1>
         <button onClick={handleParentClick}>click</button>

        <Child count={count}/>
    </div>
  )
}

export default Parent
