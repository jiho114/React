import './App.css';
import Message from './Message';
import PersonTable from './PersonTable'

function App() {
  let persons1 =[
    {
      id:31,
      name: "홍길동",
      age: 16
    },
    {
      id:32,
      name: "임꺽정",
      age: 16
    },
    {
      id:33,
      name: "전우치",
      age: 16
    }
  ]

  let persons2 = persons1.slice(0)
  persons2.reverse();
  return (
    <div>
      {/* value속성과 color속성이 message 컴포넌트의 props(객체)로 전달됨 */}
      {/* 여기서 숫자는 표현식 {} 으로 전달해야 한다 */}
      <Message value="안녕하세요" color="blue" size={20}/>
      <Message value="안녕하세요" color="blue" size={30}/>
      <Message value="안녕하세요" color="blue" size={40} />
      {/* persons1 배열을 persons값으로 전달 */}
      <PersonTable persons = {persons1}/>
      <hr></hr>
      <PersonTable persons = {persons2}/>
    </div>
  );
}

export default App;
