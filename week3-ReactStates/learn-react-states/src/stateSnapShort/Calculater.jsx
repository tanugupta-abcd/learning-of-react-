import React, { useState } from 'react'

const Calculater = () => {

    const [num , setNum] =useState(0);

    function handleClick(){
        setNum((num) =>num+1);
        console.log(num);
    }

  return (
    <div>
      <p>{num}</p>
    <button onClick={handleClick} >Click here</button>
     
    </div>
  )
}

export default Calculater
