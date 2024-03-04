import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoList from './components/TodoList'
import Form from './components/Form'

function App() {

  return (
   
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">
Todo List    </h1>
    <TodoList/>
  </div>
  )
}

export default App
