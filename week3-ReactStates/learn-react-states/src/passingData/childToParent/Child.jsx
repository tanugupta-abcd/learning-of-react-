

const Child = (props) => {

      function handleChildButtonClick() {
         props.handleChildButtonClick();
      }
  
  
  return (
    <div>
      <p>Child Count :{props.count}</p>
       <button onClick={handleChildButtonClick} >click child</button>
    </div>
  )
}

export default Child
