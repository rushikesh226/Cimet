import React from 'react';

function TodoItem({todo,removeTodo,toggleTodo}){
  return (
    <div>
      {`${todo.title} - ${todo.status?"Completed": "Incomplete"} `}
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
      <button onClick={()=>toggleTodo(todo.id)}>Toggle</button>
    </div>
  );
}

export default TodoItem;