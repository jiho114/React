import React from "react";





// 구구단을 담을 테이블 컴포넌트
const MultiplicationTable = () => {
  // 구구단 데이터 생성
  const generateTableData = () => {
    const data = [];
    for (let i = 1; i <= 9; i++) {
      const row = [];
      for (let j = 1; j <= 9; j++) {
        row.push(i * j);
      }
      data.push(row);
    }
    return data;
  };

 let even = document.querySelectorAll("tr")
 for(let i = 0; i < even.length; i++){
  if(i%2 === 0){
    even[i].classList.add("grayBg")
  }
  if(i%2 === 1){
    even[i].classList.add("whiteBg")
  }
 }

  const tableData = generateTableData();
  return (
    <table cellPadding="5" cellSpacing="0">
      <thead>
        <tr>
          <th></th>
          {Array.from({ length: 9 }, (_, index) => (
            <th key={index + 1}>{index + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex + 1}>
            <td>{rowIndex + 1}</td>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default MultiplicationTable;
