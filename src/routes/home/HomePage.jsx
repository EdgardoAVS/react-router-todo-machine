import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTodos } from '../UseTodos'
import { TodoHeader } from '../../ui/TodoHeader'
import { TodoCounter } from '../../ui/TodoCounter'
import { TodoSearch } from '../../ui/TodoSearch'
import { TodoList } from '../../ui/TodoList'
import { TodoItem } from '../../ui/TodoItem'

import { CreateTodoButton } from '../../ui/CreateTodoButton'
import { TodosError } from '../../ui/TodosError'
import { TodosLoading } from '../../ui/TodosLoading'
import { EmptyTodos } from '../../ui/EmptyTodos'
import { ChangeAlert } from '../../ui/ChangeAlert'

function HomePage() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    // openModal,
    // setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    // addTodo,
    sincronizeTodos
  } = useTodos()

  const navigate = useNavigate()

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          // loading={loading}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => navigate(`/edit/${todo.id}`, { state: { todo } })}
          />
        )}
      </TodoList>

      <CreateTodoButton
        onClick={() => navigate('/new')}
        // setOpenModal={setOpenModal} openModal={openModal}
      />

      {/* {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )} */}

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  )
}

export { HomePage }
