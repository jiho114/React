import React from 'react'
import './Todoinput.scss'
import {MdAdd} from 'react-icons/md'
import {useState, useCallback} from 'react'

const Todoinput = ({onInput}) => {
  // 입력값을 관리할 수 있도록 useState 를 사용하여 value 상태를 정의
  const [value, setValue] = useState("");

  const onSubmit = useCallback((e)=>{
    e.preventDefault();
  })

  //input에 글자를 입력하면, 컴포넌트가 리렌더링될 때 마다 함수를 새로 만들지 않고 한번만 함수를 만들고 재사용함
  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])
  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input
      value={value}
      onChange={onChange}
       type="text" placeholder='할 일을 입력하세요.' />
      <button type="submit"><MdAdd></MdAdd></button>
    </form>
  )
}

export default Todoinput