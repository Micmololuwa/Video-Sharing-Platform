import React from 'react'
import Filter from './Filter'
import Videos from './videos'
import "./css/style.css"

export default function HomePage() {
  return (
    <div className= "HomePage" >
        <Filter />
        <Videos />
    </div>
  )
}
