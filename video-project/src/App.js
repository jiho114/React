import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import Aside from './Aside';
import './App.css';
import { useState } from 'react';

function App() {
  //클릭 아티클 컴포넌트에 해당 비디오 소스 경로 첨가
  const [vid, setVid] = useState(null);

  const handleArticle = (video) => {
    setVid(video)
  }

  const hanblclose = () => {
    setVid(null)
  }
  return (
    <main>
      <Header/>
      <Nav/>
      <section>
        {['vids/vid1.mp4','vids/vid2.mp4','vids/vid3.mp4','vids/vid4.mp4'].map((video, index)=>(
          <Article
          key={index}
          video={video}
          onClick={()=> handleArticle(video)}
          />
        ))}
      </section>
      <Aside video={vid} onClose={() => hanblclose()}/>
    </main>
  );
}

export default App;
