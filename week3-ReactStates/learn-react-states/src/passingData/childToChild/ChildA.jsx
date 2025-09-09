import React from 'react'


const ChildA = (props) => {
       function handleChildButtonClick() {
         props.handleChildButtonClick();
      }
  
  
  return (
    <div>
      <p>Child A Count :{props.count}</p>
       <button onClick={handleChildButtonClick} >click A child</button>
    </div>
  )
}

export default ChildA;
