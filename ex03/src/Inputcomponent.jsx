import React from 'react'
import {useState} from 'react'

export const Inputcomponent = () => {
  const [Message, setMessage] = useState("hello")
  const [Value, setValue] = useState(true);
  const helloTag = <div id='hello'>Hello React</div>
  const [Color, setColor] = useState("green")
  const [Gneder, setGender] = useState("여성")
  
  return (
    <div>
      <p>{Message}</p>
      <input type='text' onChange={(e) => setMessage(e.target.value) } value={Message}/>
      <hr></hr>
      <div className="checkBox">
        <p>{Value ? "로그인유지" : "로그인해지"}</p>
      <input 
      type='checkbox'
      checked={Value}
      onChange={(e) => setValue(e.target.checked)}/>
      {Value ? helloTag : null}
      </div>
      <hr/>
      <div id='app' className={Color}>
        <h1>Select</h1>
        <select onChange={(e) => setColor(e.target.value)} value={Color}>
          <option value="">yellow</option>
          <option value="">green</option>
          <option value="">blue</option>
          <option value="">red</option>
        </select>
      </div>
      <hr />
      <div id="app">
        <p>{Gneder}</p>
        <hr />
        <label >
          <input type="radio" name={Gneder}
          onChange={() => setGender("남자")}
          />
          <span>남성</span>
        </label>
        <label>
          <input type="radio" name={Gneder}
          onChange={() => setGender("여자")}
          />
          <span>여성</span>
        </label>
      </div>
    </div>
  )
}

export default Inputcomponent