import React, {useState} from 'react'
//스타일 컴포넌트 API 임포트
import styled from 'styled-components';

const StyleComponents = () => {
  //배경색으로 적용할 색상 코드 
  const [color, setColor] = useState("#ffa");
  //글자색으로 적용할 색상 코드 props 전달
  const [fontColor, setFontColor] = useState("#000");
  
  //배경색을 color상태로 적용
  const Div = styled.div`
    border: 1px solid gray;
    box-shadow: 5px 5px 5px gray;
    padding: 40px;
    margin: 20px;
    display: inline-block;
    color:${props => props.fontColor};
    background-color:${color}; 
    & h1{margin:10px;}
    & select{
    padding:4px; width:150px;
    font-size:12px;
    }
  `;

  // const H1 = styled.h1`
  //   margin: 10px;
  // `;

  // const Select = styled.select`
  //   padding: 4px;
  //   width: 150px;
  //   font-size: 12px;
  // `;
  return (
    //div 스타일 컴포넌트로 fontColor 를 props로 전달
    <Div fontColor={fontColor}>
      <h1>Color</h1>
      <select 
        onChange={e => setColor(e.target.value)}
        value={color}
      >
        <option value="#ffa">yellow</option>
        <option value="#dfd">green</option>
        <option value="#ccf">blue</option>
        <option value="#fdd">red</option>
      </select>
      <select value={fontColor} 
      onChange={e=>setFontColor(e.target.value)}>
        <option>black</option>
        <option>green</option>
        <option>blue</option>
        <option>red</option>
      </select>
    </Div>
  )
}

export default StyleComponents