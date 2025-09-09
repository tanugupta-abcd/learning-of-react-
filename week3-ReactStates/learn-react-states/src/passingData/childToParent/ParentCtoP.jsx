import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
   
    const [countParent,setCountParent] = useState(0);
    
    function handleChildButtonClick(){
        setCountParent(prevCount=>prevCount+1);
    }
   
  return (
    <div>
        <h1>Inside Parent Count is :{countParent}</h1>
        <Child count={countParent} handleChildButtonClick={handleChildButtonClick}/>
    </div>
  )
}

export default Parent
