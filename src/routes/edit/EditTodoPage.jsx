import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { TodoForm } from '../../ui/TodoForm'
import { useTodos } from '../UseTodos'

function EditTodoPage() {
  const location = useLocation()
  const { id } = useParams()

  const { editTodo, getTodo, loading } = useTodos()

  let todoText

  if (location.state?.todo) {
    todoText = location.state.todo.text
  } else if (loading) {
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(id)
    todoText = todo.text
  }
  return (
    <TodoForm
      loading={loading}
      label="Edita tu TODO"
      submitText="Editar"
      defaultTodoText={todoText}
      submitEvent={(newTodoValue) => editTodo(id, newTodoValue)}
    />
  )
}

export { EditTodoPage }
