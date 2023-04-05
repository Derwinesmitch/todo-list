import React, {useState} from 'react'
import TodoForm from '../itemforms/TodoForm'
import Todo from '../Todo';
function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        debugger
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    };
     
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }




  return (
    <div style={{flex:"auto"}}>
        <div style={{flexDirection:"column", display:"flex"}}> 
            <h1 class="text-center mb-1">Whats up today?</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>  
        <div>
            <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    </div>
  );
}


export default TodoList;