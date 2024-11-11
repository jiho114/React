import React from 'react'

export const Column = () => {
  const todoList = ["코딩하기", "밥먹기", "게임하기"]
  return (
    <>
      {todoList.map((todo, idx) => (
        <td key = {idx}>{todo}</td>
      ))}
    </>
  )
}

export default Column