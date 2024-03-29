import React, { useState } from 'react';
import DateBox from './dateforms/Date';
import TodoList from './itemList/TodoList';
function Container() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  

  return (
    <a class="bg-palegray block max-w-sm mx-auto p-6 border border-gray-200 rounded-lg shadow" >
      <div>
        <div class="flex flex-col">
          <DateBox />
          <TodoList todos={todos} onAddTodo={addTodo} />
        </div>
      </div>
    </a>


  );
}

export default Container;

