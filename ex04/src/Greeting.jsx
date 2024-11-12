import React, { useState } from 'react';

export const Greeting = () => {
  //로그드인 상태를 추가함
  const[LoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
        <input type="checkbox" 
        checked={LoggedIn}
        onChange={(e)=> setLoggedIn(e.target.checked)} />
        {LoggedIn ? <p>Welcome</p> : <p>Please Login</p>}
        <hr />
        
    </div>
  );
}

export default Greeting;
