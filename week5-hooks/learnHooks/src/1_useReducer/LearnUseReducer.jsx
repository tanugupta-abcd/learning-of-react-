import React, { useReducer } from 'react'

const LearnUseReducer = () => {
    
    // const [count,setCount] =useState(0);

    const [state,dispatch] =useReducer(myReducer,{count:0});

    function myReducer(prevState,action){
        switch(action.type){
            case 'INCREMENT':
                return{
                    count:prevState.count+1,
                };
            case 'DECREMENT':
                return{
                    count:prevState.count-1,
                };
            case 'MULTIPLY2':
                return{
                    count:prevState.count*2,
                };
            case 'DIVIDE2':
                return{
                    count:prevState.count/2,
                };
            default:
                break;
        }
    }

    function handleAdd(){
    //    setCount(prev=>prev+1);
         dispatch({type:'INCREMENT'})

    }
    function handleSub(){
    //    setCount(prev=>prev-1);
         dispatch({type:'DECREMENT'})
    }
    function handleMultiply(){
          dispatch({type:'MULTIPLY2'})
    }
     function handleDivide(){
          dispatch({type:'DIVIDE2'})
    }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleSub}>sub</button>
       <button onClick={handleAdd}>add</button>
       <br />
       <button onClick={handleMultiply}>multipy by 2</button>
       <button onClick={handleDivide}>divide by 2</button>

    </div>
  )
}

export default LearnUseReducer
