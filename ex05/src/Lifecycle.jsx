import React from 'react'
import {useEffect} from 'react'

 const Lifecycle = () => {
  useEffect(()=>{
    console.log("Component Mounted")
    return ()=> console.log("Component Unmounted")
  },[])

  return (
    <div>Lifecycle</div>
  )
}

export default Lifecycle;