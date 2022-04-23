import React from 'react';
import { TodoContext } from '../TodoContext'
import './TodoCounter.css';

function TodoCounter () {

  const {
    completedTodos, 
    totalTodos
  } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <h1 className='TodoCounter'>Todo App</h1>
      <h2 className='TodoCounter-h2'>Today's Goal <span>{completedTodos} of {totalTodos}</span></h2>
    </React.Fragment>
  );
}

export { TodoCounter };