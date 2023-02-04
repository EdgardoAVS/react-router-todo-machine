import React from 'react'
import './TodoItem.css'
import { FiCheck, FiX, FiEdit } from 'react-icons/fi'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <FiCheck className="" />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-edit" onClick={props.onEdit}>
        <FiEdit />
      </span>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <FiX />
      </span>
    </li>
  )
}

export { TodoItem }
