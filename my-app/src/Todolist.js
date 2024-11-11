import React from 'react'

export const Todolist = () => {
  const todos = ["청소하기", "고양이 놀아주기", "심부름하기", "빨래하기"]
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
             {todo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todolist;