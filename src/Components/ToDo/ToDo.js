import React, { useState } from 'react';
import AddTasks from '../AddTasks/AddTasks';
import { FiCheckCircle } from 'react-icons/fi';
import { TiEdit } from 'react-icons/ti';
import './ToDo.css';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <AddTasks edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'completed' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit'
        />
        <FiCheckCircle
          onClick={() => removeTodo(todo.id)}
          className='delete'
        />
      </div>
    </div>
  ));
};

export default Todo;