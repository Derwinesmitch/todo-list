import React, { useEffect, useState, useContext } from 'react';
import TodoForm from '../itemforms/TodoForm';
import Todo from '../Todo';
import { todosRef } from '../../Firebase';
import DateContext from '../../context/DateContext';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const { startDate } = useContext(DateContext);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    todosRef.doc(todoId).update({
      text: newValue.text,
    });

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    todosRef
      .doc(id)
      .delete()
      .then(() => {
        const removeArr = [...todos].filter((todo) => todo.id !== id);
        setTodos(removeArr);
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  };

  useEffect(() => {
    const unsubscribe = todosRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const todoDate = new Date(doc.data().startDate.toDate().toDateString());
        const selectedDate = new Date(startDate.toDateString());
        if (todoDate.getTime() === selectedDate.getTime()) {
          items.push({ id: doc.id, ...doc.data() });
        }
      });
      setTodos(items);
    });

    return () => unsubscribe();
  }, [startDate]);

  return (
    <div style={{ flex: 'auto' }}>
      <div style={{ flexDirection: 'column', display: 'flex' }}>
        <h1 className="text-center mb-1 font-mono text-lg bg-lightblue">
          What's up today?
        </h1>
        <TodoForm onSubmit={addTodo} />
      </div>
      <div>
        <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
      </div>
    </div>
  );
}

export default TodoList;