import React from "react"
import "./css/style.css"

export default function NavBar(){
    return (
        <div className="navbar">
        
            <div className="left-side">
                
                <a href="#"> <img src="./images/menu.png" alt="menu" /> </a> 
                
                <a href="#" className="logo">
                    <img src="./images/youtube.svg" alt="youtube" />
                </a>
            </div>
            

            <div className="middle">

                <input placeholder="search" />
                <img src="./images/search.png" alt="search" />
                <a href="#"><img src="./images/mic.png" alt="mic" /></a> 

            </div>
            
            <div className="right-side">
                <a href="#"><img src="./images/video.png" alt="ad-video" /></a> 
                <a href="#"> <img src="./images/bell.png" alt="notification" /> </a>
                <a href="#"> <img src="./images/profile.png" alt="profile-pics" /> </a>
            </div>
        </div>
    )
}