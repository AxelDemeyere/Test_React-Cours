import { useState } from 'react'
import './App.css'

interface Todo {
  id: number;
  text: string;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue
    }

    setTodos([...todos, newTodo])
    setInputValue('')
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="todo-app">
      <h1>Todo App</h1>

      <div className="todo-input-container">
        <input
          type="text"
          placeholder="Nouvelle tâche"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          data-cy="todo-input"
        />
        <button onClick={handleAddTodo} data-cy="add-button">
          Ajouter
        </button>
      </div>

      <div className="todo-list" data-cy="todo-list">
        {todos.length === 0 ? (
          <p data-cy="no-todos">Aucune tâche</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} data-cy="todo-item">
                <span>{todo.text}</span>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  data-cy="delete-button"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
