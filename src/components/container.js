import React, { useState } from 'react';
import TodoList from './itemList/TodoList';
function Container() {

  

  return (
    <a class="bg-lime-300 block max-w-sm mx-auto p-6 border border-gray-200 rounded-lg shadow" >
      <div>
        <div class="flex">
          <TodoList />
        </div>
      </div>
    </a>

    
  );
}

export default Container;

// hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700