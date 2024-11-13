import React from 'react'

export const ConditionalComponent = (props) => {
  return (
    <div>
      <p className={ 'isActive' === true ? "active" : "inactive"}>냐냐냥</p>
    </div>
  )
}

export default ConditionalComponent;
