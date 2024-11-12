import React from 'react'
import { useState } from 'react'

export const Selectform = () => {
  const [Name, setName] = useState('');
  const [Age, setAge] = useState(0);
  const [Gender, setGender] = useState('')
  const [Language, setLanguage] = useState('React')

  //폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name : ${Name}\n Age: ${Age} \n Language: ${Language}`)
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
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>나이 : </label>
        <input type="number"
          id="Age"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br />
        <div>
        <label>프로그래밍언어 : </label>
        <select
          id="Language"
          value={Language}
          onChange={(e) => setLanguage(e.target.value)} >
            
            <option value="Js">Js</option>
            <option value="React">React</option>
            <option value="Java">Java</option>
          </select>
          </div>
          <div>
          <label htmlFor="">
            <input type="radio" name="Gender" onChange={(e) => setGender("남성")}
            checked={Gender === "남성"} />
            <span>남성</span>
          </label>
          <label htmlFor="">
            <input type="radio" name="Gender" onChange={(e) => setGender("여성")}
            checked={Gender === "여성"} />
            <span>여성</span>
          </label>
          </div>

          <button type="submit">전송</button>

          <hr />
          <h1>입력된 값</h1>
          <div className="Control">
            이름 : {Name}
          </div>
          <div className="Control">
            나이 : {Age}
          </div>
          <div className="Control">
            선택과목 : {Language}
          </div>
          <div className="Control">
            성별 : {Gender}
          </div>
      </div>
      
    </form>
  )
}

export default Selectform