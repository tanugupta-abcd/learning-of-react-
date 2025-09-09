import React ,{useState} from 'react'
import ToDoItem from './ToDoItem';

const ToDoPage = () => {
   
  // const [person, setPerson]=useState({
  //      name:"TanuGupta",
  //      age:22
  // });

  // function increaseAge(){
    
  //   const newPerson ={...person, age:person.age+1};
  //   setPerson(newPerson);
  // }

  const [todos,setTodos] =useState([]);

  function handleFormSubmit(e){
     e.preventDefault();
     const todoText = e.target.todo.value ;
     
     let insertAt=2;
     if(insertAt > todos.length) insertAt=0;
   
     
     const newTodos =[
      ...todos.slice(0,insertAt) , 
      {
        text: todoText,
        id: crypto.randomUUID(),
        completed:false
      },
      ...todos.slice(insertAt)
    ];

     setTodos(newTodos);

     e.target.reset();
  }

  function onTodoToggle(id,checked){
    const newTodos = todos.map(item =>{
      if(item.id ==id){
        return{...item,completed:checked}
      }
      return item;
    })
    setTodos(newTodos);
    //avoid this
    // const item =todos.find(item.id===id);
    // item.completed = checked;
    // setTodos(todos);
  }

  function onTodoDelete(id){
    const newTodos =todos.filter(item=>item.id !== id);
    setTodos(newTodos);
  }
 
  const emptyStates =(
    <h2>Nothing's Here,Add a Todo</h2>
  )

  const completedTodos = todos.filter(item =>item.completed).length;

  function handleDeleteAll(){
    setTodos([]);
  }

  const compareFunction =(a,b)=>a.text.localeCompare(b.text);

  function handleSortTodos(){
     const newTodos = [...todos];
     newTodos.sort(compareFunction);
     setTodos(newTodos);
  }

  const isTodoEmpty =todos.length==0;

  const isSortedTodos= todos.every((todo,index,arr)=>{
    return index===0 || compareFunction(arr[index-1],todo)<=0;
  })

  function handleUpdatedTodoText(id, todoText){
    const newTodos = todos.map(item=>{
     if(item.id==id){
       return {...item,text : todoText};
     }
     return item;
    })
    setTodos(newTodos)
  }
   
  function handleTodoMoveUp(index){
    if(index==0) return;
    const newTodos = [...todos];
    [newTodos[index],newTodos[index-1]]=[newTodos[index-1],newTodos[index]]
    setTodos(newTodos);
  }

  function handleTodoMoveDown(index){
    if(index==todos.length-1) return;
    const newTodos = [...todos];
    [newTodos[index],newTodos[index+1]]=[newTodos[index+1],newTodos[index]]
    setTodos(newTodos);
  }

  return (
    // <div>
    // {person.name}
    // {person.age}
    // <button onClick={increaseAge} >increase age</button>
    // </div>

    <div>
      <h1>super todoz</h1>

      <form onSubmit={handleFormSubmit} >
        <input
         type="text" 
         name='todo' 
         placeholder='Enter your name' />
         <button>Submit</button>
      </form>

       {!isSortedTodos&&<button onClick={handleSortTodos} >Sort Todos</button>}

       {!isTodoEmpty>0 && <button onClick={handleDeleteAll} >Delete all task</button>}

      {!isTodoEmpty && (
        <p>
          {completedTodos} / {todos.length} Completed 
        </p>
      )}

      {!isTodoEmpty?(
          <div>
              {todos.map((item,index) => (
                <ToDoItem 
                  key={item.id}
                  item={item} 
                  onTodoToggle={onTodoToggle}
                  onTodoDelete={onTodoDelete}
                  onTodoTextUpdate={handleUpdatedTodoText}
                  onMoveUp={handleTodoMoveUp}
                  onMoveDown={handleTodoMoveDown}
                  index={index}
                  todosCount={todos.length}
                />
              ))}
          </div>):(emptyStates)}



    </div>
  )
}

export default ToDoPage
