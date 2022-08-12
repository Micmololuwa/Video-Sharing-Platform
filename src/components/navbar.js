import React from "react"
import "../css/style.css"

export default function NavBar(){
    return (
        <div className="navbar">
            <p>I love myself</p>

            <div className="left-side">
                
                <img src="./images/menu.png"/>
                <div className="logo">
                    <img src="./images/youtube.png" />
                    <h1 className="youtube-text"> YouTube</h1>
                </div>
            </div>
            

            <div className="middle">

                <form className="search">
                    <input placeholder="search" />
                    <img src="././images/search.png" />
                </form>
                <img src="././images/mic.png" />

            </div>
            
            <div className="right-side">
                <img src="././images/video.png" />
                <img src="././images/bell.png" />
                <img src="././images/profile.png" />
            </div>
        </div>
    )
}