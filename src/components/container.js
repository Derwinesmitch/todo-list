import React, { useState } from 'react';
import DateBox from './dateforms/Date';
import TodoList from './itemList/TodoList';
function Container() {

  

  return (
    <a class="bg-lime-300 block max-w-sm mx-auto p-6 border border-gray-200 rounded-lg shadow" >
      <div>
        <div class="flex flex-col">
          <DateBox />
          <TodoList />
        </div>
      </div>
    </a>

    
  );
}

export default Container;

