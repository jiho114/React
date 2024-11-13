import React, {useEffect, useState} from 'react'
//useEffect, useState 임포트

export const Counter = () => {
  const [count1, setCount1] = useState(0) 
  const [count2, setCount2] = useState(0) 
  const [countEx, setCountEx] = useState(0)
//useEffect 함수가 호출 (마운트 = 처음 컴포넌트가 화면에 나타날때, 업데이트 = 이미 화면에 있는데 상태나 속성이 바뀔때, 언마운트 = 컴포넌트가 화면에서 사라질때)
  useEffect(() => console.log('useEffect #1', count1), [])
  //빈 배열 전달시 처음 화면에 나타날때만 실행

  useEffect(() => console.log('useEffect #2, count2'), [count2])

  useEffect(()=>{
    console.log("mount")
    return () => console.log("unmount")
  }, [])

  useEffect(()=> console.log(new Date().toLocaleTimeString()))
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div>
        <span>{count1}</span>
        <button onClick={e=>setCount1(count1 + 1)}>++</button>
      </div>
      <div>
        <span>{count2}</span>
        <button onClick={e=>setCount2(count2 + 1)}>++</button>
      </div>
      <div>
        <p>Count: {countEx}</p>
        <button onClick={()=>setCountEx(countEx+1)}>Increment</button>
      </div>
    </div>
  )
}

export default Counter; 