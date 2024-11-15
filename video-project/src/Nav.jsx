import React from 'react'
import {FaEnvelope, FaSearch} from 'react-icons/fa'

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="#"><FaEnvelope size="1.5em"></FaEnvelope></a></li>
        <li><a href="#"><FaSearch size="1.5em"></FaSearch></a></li>
      </ul>
    </nav>
  )
}

export default Nav