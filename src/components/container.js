import React, { useState } from 'react';
import TodoList from './itemList/TodoList';
function Container() {

  

  return (
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div>
      <TodoList />
        
    </div>
    </a>

    
  );
}

export default Container;

