import React, { useState, useEffect } from 'react';

const TimerWithCleanup = () => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log(timer)
    },1000)
   return () => clearInterval(timer) 
  },)

  //1. 타이머 메서드로 1초마다 1씩 증가하는 타이머 구현(setInterval())
  //2. 언마운트될 때 타이머를 정리(clearInterval())
  
  return (
    <div>
      <p>Timer: {count}</p>
    </div>
  );
};

export default TimerWithCleanup;