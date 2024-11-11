import './App.css';
import Userfile from './userfile';
import Stylecom from './Stylecom'
import Todolist from './Todolist'
import MultiplicationTable from './MultiplicationTable'

function App() {
  // let letter = [{name: "홍길동"}, {age:24}]
  return (
    <div>
      <h1>Hello World</h1>
      <hr></hr>
      <ul>
        <li><p>청소하기</p></li>
        <li><p>강아지 산책하기</p></li>
        <li><p>고양이 똥 치우기</p></li>
      </ul>
      <br></br>
      {/* <ul>
        <li><p>{letter[0].name}</p></li>
        <li><p>{letter[1].age}</p></li>
      </ul> */}
      <hr />
      <h1 style={{color:"blue", fontSize:"50px"}}>인라인 스타일 작성</h1>
      <p style={{backgroundColor:"grey", fontSize:"20px"}}>CSS 속성 이름은 카멜 케이스이고, style에 대한 value는 객체 형태이다</p>
      <Userfile />
      <Stylecom />
      <Todolist/>
      <MultiplicationTable/>
    </div>
  );
}

export default App;
