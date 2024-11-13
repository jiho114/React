import React from 'react'

export const ParentComponent = (props) => {
  const msgStyle = {color:props.color, fontSize:props.size}
  return (
    <div style={msgStyle}>
      {props.value}
    </div>
  )
}

export default ParentComponent
