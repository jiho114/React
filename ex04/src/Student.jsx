import React from 'react'
import { useState } from 'react'

export const Student = () => {

  const [student, setStudent] = useState({
    Name: "",
    Age: 0,
    Gender: "",
    Language: "Js"
  })
//기존 스튜던트 객체를 분해해서 할당 -> 변경 안된 프로퍼티 값은 그대로 복제, 변경된 프로퍼티만 새로 변경해서 넣어줌
  const Handler = (e) => {setStudent({...student, [e.target.name]:e.target.value})}

  //폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}
     style={{border:"1px solid salmon", maxWidth:"400px", margin:"auto", textAlign:"center"}}
    >
      <h1>입력폼</h1>
      <hr />
      <div style={{marginBottom:"1em", textAlign:"center"}}>
        <label htmlFor='Name'>이름 : </label>
        <input type="text"
          id="Name"
          onChange={Handler}
          required
        />
        <br />
        <label>나이 : </label>
        <input type="number"
          id="Age"
          onChange={Handler}
          required
        />
        <br />
        <div>
        <label>프로그래밍언어 : </label>
        <select
          id="Language"
          onChange={Handler} >
            
            <option value="Js">Js</option>
            <option value="React">React</option>
            <option value="Java">Java</option>
          </select>
          </div>
          <div>
          <label htmlFor="">
            <input type="radio" name="Gender" onChange={Handler}
            checked={student.Gender === "남성"} />
            <span>남성</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="Gender" onChange={Handler}
            checked={student.Gender === "여성"} />
            <span>여성</span>
          </label>
          </div>

          <button type="submit">전송</button>

          <hr />
          <h1>입력된 값</h1>
          <div className="Control">
            이름 : {student.Name}
          </div>
          <div className="Control">
            나이 : {student.Age}
          </div>
          <div className="Control">
            선택과목 : {student.Language}
          </div>
          <div className="Control">
            성별 : {student.Gender}
          </div>
      </div>
      
    </form>
  )
}

export default Student
