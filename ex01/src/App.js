// import React from 'react';
// import './App.css';

import './style.css'
import Tablecomponents from './components/Tablecomponents'

// function App() {
//   let persons = [
//     {name: "홍길동", age: 16,},
//     {name: "길동홍", age: 18,},
//     {name: "동길홍", age: 20,}
// ];

// //React.createElement ("요소", 속성, 자식요소)
// // let td1 = <td>이름</td>
// // let td2 = <td>나이</td>
// // let tr = React.createElement("tr", null,  td1, td2)
// let tr = <tr><td>이름</td><td>나이</td></tr>
// let trlist = [tr];

// for(let person of persons){
//   //  td1 = <td>{person.name}</td>
//   //  td2 = <td>{person.age}</td>
//    tr = <tr><td>{person.name}</td><td>{person.age}</td></tr>
//    trlist.push(tr) // trlist 배열에 생성한 tr을 할당
// }

// let table = <table>{trlist}</table>
// return table;

// }

// export default App;

import React from 'react';
import './App.css';
import JSXtest from './components/JSXtest';
import Styletest from './components/Styletest'

function App() {

  return ( 
    <div className="App"> 
      <JSXtest/>
      <Styletest />
      <Tablecomponents/>
    </div>
  )
}

export default App; 