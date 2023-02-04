import React from 'react'
import { useNavigate } from 'react-router-dom'

function TodoForm(props) {
  const navigate = useNavigate()
  const [newTodoValue, setNewTodoValue] = React.useState(
    '' || props.defaultTodoText
  )

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onCancel = () => {
    navigate('/')
  }
  const onSubmit = (event) => {
    event.preventDefault()
    props.submitEvent(newTodoValue)
    navigate('/')
  }

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea
        disabled={props.loading}
        value={newTodoValue}
        onChange={onChange}
        placeholder="Practicar React..."
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button
          disabled={props.loading}
          className="TodoForm-button TodoForm-button--add"
          type="submit"
        >
          {props.submitText}
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
