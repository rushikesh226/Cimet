import React,{ useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function Todo(){
  const[todos,setTodos]=useState([]);

  useEffect(()=>{
    const storedTodos=JSON.parse(localStorage.getItem('todos'))||[];
    setTodos(storedTodos);
  },[]);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  const addTodo=(title)=>{
    if (title.trim()){
      const newTodo = {
        title: title,
        id: Date.now()+title,
        status: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo=(todoId)=>{
    setTodos(todos.filter((todo)=>todo.id!==todoId));
  };
  const toggleTodo=(todoId)=>{
    setTodos(todos.map((todo,key)=> todo.id===todoId?{...todo, status:!todo.status}:todo))
  }
  return(
    <div>
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo}/>
      <>
        {todos.map((todo)=>(
          <TodoItem key={todos.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        ))}
      </>
    </div>
  );
}

export default Todo;
