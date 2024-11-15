import "./App.css";
import { useState, useRef } from "react";
import ScrollBox from "./ScrollBox";
import styled from "styled-components";

const Div = styled.div`
  padding: 20px;
  & select {
    padding: 5px;
    width: 100px;
  }
  & button {
    padding: 5px 20px;
    margin-left: 10px;
  }
`;

function App() {
  const [list, setList] = useState([]);
  const selectRef = useRef("#ffa")

  // 버튼이 클릭될 때 호출
  const addItem = () => {
    const time = new Date().toLocaleTimeString();
    setList([...list, {time, color: selectRef.current}]); // 리스트에 새로운 아이템 추가
  };

  return (
    <Div>
      <select>
        <option value="#ffa">yellow</option>
        <option value="#dfd">green</option>
        <option value="#ccf">blue</option>
        <option value="#fdd">red</option>
      </select>
      <div style={{ padding: "20px" }}>
        {/* addItem 함수 호출하도록 수정 */}
        <button onClick={addItem}>Add Item</button>

        {/* 스크롤 박스 컴포넌트로 width와 height값을 props로 전달 */}
        <ScrollBox width="200px" height="500px">
          {/* 리스트 배열을 map으로 순회하면서 데이터를 스크롤 박스의 자식으로 넣어줌 */}
          {list.map(item => (
            <p style={{backgroundColor: item.color}} key={item.time}>{item.time}</p>
          ))}
        </ScrollBox>
      </div>
    </Div>
  );
}

export default App;
