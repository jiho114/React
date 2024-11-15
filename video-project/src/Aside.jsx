import React from 'react'
import { useEffect, useRef } from 'react'

export const Aside = ({video, onClose}) => {
  const videoRef = useRef(null) // 비디오 요소를 참조할 useRef 훅

  useEffect(() => {
    if(videoRef.current){
      if(video){
        videoRef.current.play()
      }else{
        videoRef.current.pause()
      }
    }
  }, [video])
  return (
    <aside className={video ? "on" : ""}>

        <>
         <div className='txt'>
          <h1>Title</h1>
          <p>DESCRIPTION</p>
          <span onClick={() => onClose()}>Close</span>
         </div>
         <figure>
          <video src={video} ref={videoRef} loop muted></video>
         </figure>
        </>

    </aside>
  )
}

export default Aside
