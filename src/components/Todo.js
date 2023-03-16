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
    return todos.map((todo, index) => (
        <div key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
                <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text})}/>
            </div>
        </div>
    ));
}

export default Todo