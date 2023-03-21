import React, {useEffect, useState} from 'react';
import TodoForm from './itemforms/TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
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

    const stateHandler = (id) => {
        debugger
        todos.filter(e => {
         debugger
            if (id ==e.id){
                e.active=!e.active
            } 
        })     
        setTodosState(todos)
    }
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    } 


    return (
        <>
           {todosState && todosState.map((todo, index) => (
              <div class="mt-1.5 bg-white flex flex-row justify-between break-all"> 
               <div key={index} class=" bg-white pl-1.5" style={{width:"15.5vw"}}>
                    <div key={todo.id} onClick={() => stateHandler(todo.id)} >
                        {JSON.stringify(todo.active)}
                    </div>
                </div>  
                <div class="mt-1.5 bg-white flex items-center" >
                    <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text})} class="mx-1.5"/>
                    <RiCloseCircleLine onClick={() => removeTodo(todo.id)} class="mx-1.5"    />
                </div>
            </div>
           )) }
        </>  
     );
}

export default Todo