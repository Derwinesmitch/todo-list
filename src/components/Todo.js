import React, {useEffect, useState} from 'react';
import TodoForm from './itemforms/TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
function Todo({todos, removeTodo, updateTodo, addTodo}) {
   
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const [todosState, setTodosState] = useState(todos);
        useEffect(() => {
           setTodosState(todos)     
        }, [todos])
        
    const submitUpdate = value => { 
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
    } 

    const onChangeState = (id) => {
        const updatedTodos = todosState.map((e) => {
          if (e.id === id) {
            const updatedTodo = { ...e, active: !e.active };
            // Update the todo in the database
            const db = firebase.firestore();
            db.collection("todos")
              .doc(e.id)
              .update({ active: updatedTodo.active })
              .then(() => {
                console.log("Document updated successfully");
              })
              .catch((error) => {
                console.error("Error updating document: ", error);
              });
            return updatedTodo;
          } else {
            return e;
          }
        });
        setTodosState(updatedTodos);
      };
    
    return (
        <>
           {todosState && todosState.map((todo, index) => (
              <div key={todo.id} class="mt-1.5 bg-othergray flex flex-row justify-between break-all"> 
               <div key={index} class=" bg-white pl-1.5" style={{width:"15.5vw"}}>
                    <div key={todo.id} class="flex">
                        <input type="checkbox" onChange={() => onChangeState(todo.id)} defaultChecked={todo.active} class="mr-2"/>
                    {todo.text}
                    </div>
                </div>  
                <div class="bg-white flex items-center bg-paleorange" >
                    <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text})} class="mx-1.5"/>
                    <RiCloseCircleLine onClick={() => removeTodo(todo.id)} class="mx-1.5"    />
                </div>
            </div>
           )) }
        </>  
     );
}

export default Todo;