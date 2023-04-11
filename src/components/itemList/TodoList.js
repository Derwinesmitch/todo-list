import React, {useEffect, useState} from 'react'
import TodoForm from '../itemforms/TodoForm'
import Todo from '../Todo';
import { todosRef } from '../../Firebase';
import Firebase from '../../Firebase';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

            todosRef.add({
            text: todo.text,
            isComplete: false
          });

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        };
        
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        todosRef.doc(todoId).update({
            text: newValue.text
          });
        
          setTodos((prev) =>
          prev.map((item) => (item.id === todoId ? newValue : item))
        );
      };


      const removeTodo = id => {
        todosRef.doc(id).delete()
          .then(() => {
            const removeArr = [...todos].filter(todo => todo.id !== id)
            setTodos(removeArr);
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      }

    useEffect(() => {
        todosRef.onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          setTodos(items);
        });
      }, []);

  return (
    <div style={{flex:"auto"}}>
        <div style={{flexDirection:"column", display:"flex"}}> 
            <h1 class="text-center mb-1 font-mono text-lg bg-lightblue">Whats up today?</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>  
        <div>
            <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    </div>
  );
}

export default TodoList;