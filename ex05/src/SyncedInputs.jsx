import React, { useState, useEffect } from "react";

export const SyncedInputs = () => {
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")

  useEffect(()=>{
    console.log(`input1 : ${input1}`)
    console.log(`input2 : ${input2}`)
  },[input1, input2])
  
  return (
    <div>
      {/* input1이 변경되면 input2도 변경되도록 작성 */}
      <input type="text" value={input1} placeholder="Input 1" onChange={(e)=>{setInput1(e.target.value); setInput2(e.target.value)}} className="in1"/>
      {/* input2가 변경되면 input1도 변경되도록 작성 */}
      <input type="text" value={input2} placeholder="Input 2" onChange={(e)=>{setInput2(e.target.value); setInput1(e.target.value)}} />
    </div>
  );
};

export default SyncedInputs;
