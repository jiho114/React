// 외부에서 생성한 스타일 컴포넌트를 임포트해서 사용
import { Header, HeaderTitle, NavList, NavItem, Main, FilterList, FilterItem, Article, ArticleDiv, ArticleImg, ArticleTitle, ArticleContent } from './styled';
import { FaTwitterSquare, FaFacebookSquare, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Isotope from 'isotope-layout';

function App() {
  const articles = [
    { id: 1, src: './img/p1.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 2, src: './img/p2.jpg', title: 'Here comes title.', className: 'even' },
    { id: 3, src: './img/p3.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 4, src: './img/p4.jpg', title: 'Here comes title.', className: 'even' },
    { id: 5, src: './img/p5.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 6, src: './img/p6.jpg', title: 'Here comes title.', className: 'even' },
    { id: 7, src: './img/p7.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 8, src: './img/p8.jpg', title: 'Here comes title.', className: 'even' },
    { id: 9, src: './img/p9.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 10, src: './img/p10.jpg', title: 'Here comes title.', className: 'even' },
    { id: 11, src: './img/p11.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 12, src: './img/p12.jpg', title: 'Here comes title.', className: 'even' },
    { id: 13, src: './img/p13.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 14, src: './img/p14.jpg', title: 'Here comes title.', className: 'even' },
    { id: 15, src: './img/p15.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 16, src: './img/p16.jpg', title: 'Here comes title.', className: 'even' },
    { id: 17, src: './img/p17.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 18, src: './img/p18.jpg', title: 'Here comes title.', className: 'even' },
    { id: 19, src: './img/p19.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 20, src: './img/p20.jpg', title: 'Here comes title.', className: 'even' },
  ];
  const [isotope, setIsotope] = useState(null);

  useEffect(() => {
    //isotope 객체를 생성해서 아티클들을 정렬
    const iso = new Isotope('.section', {
      itemSelector: Article,
      columnWidth: Article,
      transitionDuration: '0.5s',
    });
    setIsotope(iso);
  }, []);
  //컴포넌트가 마운트될때 한번만 실행

  const filterItems = (filter) => {
    if (isotope) {
      isotope.arrange({ filter });
    }
  };

  return (
    <>
      <Header>
        <HeaderTitle>DECODE LAB</HeaderTitle>
        <NavList>
        <NavItem><FaTwitterSquare /> Twitter</NavItem>
          <NavItem><FaFacebookSquare /> Facebook</NavItem>
          <NavItem><FaEnvelope /> E-mail</NavItem>
        </NavList>
      </Header>
      <Main>
        <FilterList>
          <FilterItem onClick={() => filterItems('*')}>ALL</FilterItem>
          <FilterItem onClick={() => filterItems('.odd')}>ODD</FilterItem>
          <FilterItem onClick={() => filterItems('.even')}>EVEN</FilterItem>
        </FilterList>
        <section className='section'>
          {/* article배열을 순회하여 배열요소를 aricle 매개변수에 할당 
          article 갯수만큼 카드형태의 요소를 추가*/}
          {articles.map(article => (
            <Article className={article.className} key={article.id}>
              <ArticleDiv>
                <ArticleImg src={article.src} alt="" />
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleContent>Here comes content description in detail.</ArticleContent>
              </ArticleDiv>
            </Article>
          ))}
        </section>
      </Main>
    </>
  );
}

export default App;
