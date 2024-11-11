// 리액트 라이브러리 패키지와 리액트돔 라이브러리 패키지를 import한다
import React from 'react';
import ReactDOM from 'react-dom/client';
//인덱스.css 는 css 서식을 적용
// import './index.css';
import App from './App';
//app.js파일에 구현된 App 컴포넌트를 import한다
//리액트 앱의 구성요소는 컴포넌트이다
//import reportWebVitals from './reportWebVitals';
//reportWebvitals 라이브러리 패키지는 리액트 앱의 성능을 측정하기 위한 패키지이다.

//div#root 태그에 App 컴포넌트를 렌더링한다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
