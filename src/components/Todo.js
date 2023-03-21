import React, {useState} from 'react';
import TodoForm from './itemforms/TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
  
    const submitUpdate = value => { 
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
    return (
        <div>
           { todos.map((todo, index) => (
              <div class="mt-1.5 bg-white overflow-x-auto"> 
               <div key={index} class=" bg-white" style={{width:"15.5vw"}}>
                    <div key={todo.id} onClick={() => completeTodo(todo.id)} >
                        {todo.text}
                    </div>
                </div>  
                <div class="mt-1.5 bg-white" >
                    <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text})}/>
                    <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
                </div>
            </div>
           )) }
        </div>  
     );
}

export default Todo