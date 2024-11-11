import React from 'react'

function Userfile() {
  let nameBox = {name: "홍길동", age: 24}
  let listStyleNone = {listStyle:"none", fontWeight: "bold", fontSize:"24px", backgroundColor:"black", color:"#fff"}
  return (
    <div>
      <ul style={{textAlign:"center"}}>
        <li style={listStyleNone}>Name: {nameBox.name}</li>
        <li style={listStyleNone}>Age: {nameBox.age}</li>
      </ul>
    </div>
  )
}
export default Userfile;