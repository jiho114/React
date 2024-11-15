import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'

const Div = styled.div`
 border:1px solid #ccc;
 padding:5px;
 overflow-y: scroll;
 width:${props => props.w};
 height:${props => props.h};
`

// children은 스크롤 박스 컴포넌트의 자식컴포넌트를 전달받음
export const ScrollBox = ({width, height, children}) => {
  const divRef = useRef(null)
  useEffect(()=> divRef.current?.scrollIntoView())
  return (
    <Div w={width} h={height}>
      {children}
      <div></div>
    </Div>
  )
}

export default ScrollBox
