import React from 'react'
import './Header.css'
import UnderNav from './UnderNav'
import NavBar from './NavBar'
import BigBlocks from './BigBlocks'
import Featurs from './Featurs'


export default function Header() {
  return (
    <div className='fuller'>
      <div className='header'>
        <div className="cyanBack"></div>
        <div className="headerWrapper">
          <NavBar/>
            <UnderNav/>
            <BigBlocks/>
            <Featurs/>
        </div>
        </div>
    </div>
  )
}
