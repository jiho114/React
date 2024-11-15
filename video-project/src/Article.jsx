import React from "react";

export const Article = ({ video, onClick }) => {
  const handlMouseEnter = (e) => {
    // 이벤트가 발생된요소(article)
    e.currentTarget.querySelector("video").play();
  }

  const handlMouseLeave = (e) => {
    e.currentTarget.querySelector("video").pause();

  }
  return (
    <article
    onMouseEnter={handlMouseEnter}
    onMouseLeave={handlMouseLeave}
    //부모 컴포넌트에서 전달받음 onClick 이벤트 핸들러
     onClick={() => onClick(video)}
    >
      <div className="inner">
        <div className="txt">
          <h2>Title</h2>
          <p>DESCRIPTON</p>
        </div>
        <figure>
          <video src={video} muted loop></video>
        </figure>
      </div>
    </article>
  );
};

export default Article;
