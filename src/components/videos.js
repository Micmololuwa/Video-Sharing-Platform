import React from 'react'
import "./css/style.css"

export default function Videos() {
  return (
    <div className='videos'>
        <div className='thumbnail'> <img alt='thumnail' src='./images/youtubethumbnail.png' /> </div> 

        <div className='video-info'>
            <div className='poster-img'>
                <img src='./images/profile.png' />
            </div>
            <div className='info'>
                <h3>Bella Shmurda - New Born Fela | ECHOOROOM LIVE...</h3>
                <p>Echo Room</p>
                <p>14k views . 1 day ago</p>
            </div>
        </div>
    </div>
  )
}
