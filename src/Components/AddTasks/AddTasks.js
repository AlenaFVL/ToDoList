import React, { useState, useEffect, useRef } from 'react';
import './AddTasks.css';
import {FiPlusSquare} from 'react-icons/fi';
 


function AddTasks(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
  
    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.focus();
    });
  
    const handleChange = e => {
      setInput(e.target.value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });
      setInput('');
    };
  
    return (
      <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
          <div className='hold'>
            <input
              placeholder='Update your item'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='edit-input'
            />
            <button onClick={handleSubmit} className='edit-button'>
              Update
            </button>
          </div>
        ) : (
          <div className='hold'>
            <button onClick={handleSubmit} className='todo-button'>
              <FiPlusSquare />
            </button>
            <input
              placeholder='Add a to-do...'
              value={input}
              onChange={handleChange}
              name='text'
              className='todo-input'
              ref={inputRef}
            />
          </div>
        )}
      </form>
    );
  };
  

export default AddTasks;