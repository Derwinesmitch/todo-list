import React, {useEffect, useState} from 'react';
import TodoForm from './itemforms/TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

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

    todosState.map(e => {
        if(e.id===id) {
            e.active=!e.active
        }
    })
    
    setTodosState(todosState)
    }
    
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