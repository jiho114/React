
function Styletest() {
  const s = {color:"red", fontSize:"50px"}
  return (
    <>
      {/* 리액트에서는 (JSX 문법) class 대신 className으로 클래스 지정 */}
      <p className="blue">하이 리액트</p>
      <p className="green">안녕하세요.</p>
      {/* 인라인 서식은{{}} 중괄호로 두번 묶어서 객체로 전달해야 함 */}
      <p style={{color:"pink", fontSize:"30px", fontWeight:"bold", backgroundColor:"yellow"}}>인라인서식</p>
      {/* s 라는 변수를 생성하여 스타일을 전달 */}
      <p style={s}>변수로 스타일 전달</p>
    </>
  )
}

export default Styletest 