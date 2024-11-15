import React from 'react'
import Todolistitem from './Todolistitem'
import './Todolist.scss'

const Todolist = ({todos}) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <Todolistitem todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default Todolist