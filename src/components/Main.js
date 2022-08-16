import React from 'react'
import SideBar from './Sidebar'
import HomePage from './Homepage'
import "./css/style.css"

export default function Main() {
  return (
    <div className='main'>

        <SideBar />
        <HomePage />

    </div>
  )
}
