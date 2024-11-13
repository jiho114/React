//useState 훅 임포트
import {useState} from 'react'
import './App.css';
import Inputcomponent from './Inputcomponent'

function App() {
  //함수가 호출되면 경고창을 호출
  const onClickHandler = () => alert('버튼 1을 클릭했습니다.')

  let [count, setCount] = useState(0);

  const increase = () => {
    if(count < 10){
      setCount(count+1)
    }
    //console.log(count)
  }

  const decrease = () => {
    if(count > 0){
      setCount(count-1)
    }
    //console.log(count)
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickHandler}>버튼</button>
      <button onClick={() => prompt("아이디를 입력하세용")}>ID버튼</button>
      <button onClick={increase}>증가</button> <br></br>
      <button onClick={decrease}>감소</button>
      <hr></hr>
      <p>Input</p>
      <Inputcomponent></Inputcomponent>
    </div>
  );
}

export default App;
