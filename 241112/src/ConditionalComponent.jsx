import React from 'react';

import './styles.css'; // 클래스 정의가 있는 CSS 파일을 import
//이곳에 작성

const ConditionalComponent = ({isActive}) => {

  return <div className={'isActive' ? 'active' : 'inactive'}>Status: {'isActive' ? '활성화' : '비활성화'}</div>;
};
export default ConditionalComponent;