import React from 'react'

const ChildA = (props)=>{
  return(
    <button onClick={props.handle}> click me A</button>
  )
}

const ChildB = (props)=>{
  return(
    <button onClick={()=>props.handle}> click me B</button>
  )
}





const Event2 = () => {
  const walking = () =>{
    alert("going for a walk")
  }

  const taking = () =>{
    alert("take to me .")
  }


  return (
    <div>
     <ChildA handle={walking} />
     <ChildB handle={taking}/>
    </div>
  )
}

export default Event2
