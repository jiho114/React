import React from 'react'

//App컴포넌트에서 props 를 전달받은 속성을 props 파라미터 객체를 통해 조회
export const Message = (props) => {
  const msgStyle = {color : props.color, fontSize : props.size}
  return (
    <div style={msgStyle}>
      {props.value}
    </div>
  )
}

export default Message;