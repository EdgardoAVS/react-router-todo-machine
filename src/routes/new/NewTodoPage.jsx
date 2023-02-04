import React from 'react'
import { TodoForm } from '../../ui/TodoForm'
import { useTodos } from '../UseTodos'

function NewTodoPage() {
  const { addTodo, loading } = useTodos()

  return (
    <TodoForm
      loading={loading}
      label="Escribe tu nuevo TODO"
      submitText="Añadir"
      submitEvent={(text) => addTodo(text)}
    />
  )
}

export { NewTodoPage }
