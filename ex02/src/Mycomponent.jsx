

//함수의 파라미터가(인자) 객체라면 그 값을 바로 비구조화 해서 전달 사용 가능
const Mycomponent = ({name = "기본 이름", children}) => {
  return (
    <>
    안녕하세요. 제 이름은 {name}입니다.
    children 값은 {children} 입니다.
    </>
  )
}

export default Mycomponent;