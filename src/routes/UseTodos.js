import React from 'react'
import { useLocalStorage } from './useLocalStorage'

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    const id = newTodoId()
    newTodos.push({
      id,
      completed: false,
      text
    })
    saveTodos(newTodos)
  }
  const toggleCompleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }
  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos[todoIndex].text = newText
    saveTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  const getTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    return newTodos[todoIndex]
  }

  return {
    getTodo,
    editTodo,
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    toggleCompleteTodo,
    deleteTodo,
    sincronizeTodos
  }
}

function newTodoId() {
  return crypto.randomUUID()
}

export { useTodos }
