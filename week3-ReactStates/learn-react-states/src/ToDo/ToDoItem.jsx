import React ,{useState} from 'react'

const ToDoItem = ({item , onTodoToggle ,onTodoDelete ,onTodoTextUpdate, onMoveUp, onMoveDown , index,todosCount }) => {
   
    const [showEditTodo,setShowEditTodo] =useState(false);

    function handleEditFormSubmitted(e){
        e.preventDefault();
        const todoText = e.target.todo.value;
        onTodoTextUpdate(item.id,todoText);
        setShowEditTodo(false);
    }   


    const todoEditForm=(
       <div>
        <form onSubmit={handleEditFormSubmitted}>
            <input type="text" name="todo" defaultValue={item.text} />
            <button>Update</button>
        </form>
       <button onClick={()=>setShowEditTodo(false)}>Cancel</button>
       </div>    )

    const todoItemDiv =(
        <div>
                <button disabled={index==0} onClick={()=>onMoveUp(index)}>🔼</button>
                <button disabled={index==todosCount-1}  onClick={()=>onMoveDown(index)}>🔽</button>
           
        <input 
        id={item.id}
        type="checkbox" 
        checked={item.completed}
        onChange={ (e)=>onTodoToggle(item.id,e.target.checked)} 
         />
        <lable 
        style={{textDecoration:item.completed? 'line-through':'none'}}
        htmlFor={item.id}>{item.text}</lable>
        

        <button onClick={()=> setShowEditTodo(true)} >Edit</button>
        <button onClick={()=>onTodoDelete(item.id)}>
            delete
        </button>
        
    </div>
    )


  return (
    <div>
        {showEditTodo?  todoEditForm: todoItemDiv}
     </div>
  )
}

export default ToDoItem
