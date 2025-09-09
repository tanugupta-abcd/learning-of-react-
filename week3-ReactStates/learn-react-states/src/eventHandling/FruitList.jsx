import React from 'react'

const FruitList = () => {

    const fruits = ['Apple', 'Banana', 'Mango', 'Orange','graph','pinapple','chiku'];

    const handleOnClick= (name)=>{
         alert(`you have cliked on ${name} `);

    }
  return (
    <div>
     { fruits.map((fruitName,index) => (
        <button onClick={()=>handleOnClick(fruitName)} key={index}
        style={{ margin:'2rem' ,gap:'4rem', padding:'1rem'}}>{fruitName}</button>
      ))}
    </div>
  )
}

export default FruitList
