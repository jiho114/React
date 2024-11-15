import TodoContainer from "./components/TodoContainer.jsx";
import "./components/TodoContainer.scss";
import Todoinput from "./components/Todoinput";
// import Todolistitem from './components/Todolistitem'
import Todolist from "./components/Todolist.jsx";
import {useState, useRef, useCallback} from 'react'

// import './components/TodoContainer.scss'

function App() {

  //todolistitem에 들어갈 data
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "리액트 기초 알아보기",
      checked: true,
    },
    {
      id:2,
      text: "컴포넌트 스타일링 해 보기",
      checked: true,
    },
    {
      id:3,
      text: "일정 관리 앱 만들어보기",
      checked: false,
    }
  ])

  //새로운 객체를 만들때마다 id값을 1씩 증가
  //다음에 추가할 객체의 id값은 4이므로 초기값을 4로 지정
  const nextId = useRef(4);

  // 아래 todoinput에서 입력한 값을 파라미터(text)로 받은 후 todos 배열에 추가하는 함수
  const onInput = useCallback((text)=>{
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }
    setTodos(...todos, todo) // 새 객체를 todos에 추가
    nextId.current += 1;
  }, [todos])

  return (
    <div>
      <TodoContainer>
        {/* todos 배열에 새 객체를 추가하는 함수를 todoInput으로 전달*/}
        <Todoinput onInput={onInput} />
        <Todolist todos={todos}/>
      </TodoContainer>
    </div>
  );
}

export default App;
