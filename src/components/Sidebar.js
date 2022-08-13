import React from "react"
import "./css/style.css"

export default function SideBar (){
    return (

        <div className="sidebar">

            <a href="#" className="home">
                <img src="./images/home.png" />
                <p>Home</p>
            </a>
            <a href="#" className="explore">
                <img src="./images/explore.png" />
                <p>Explore</p>
            </a>
            <a href="#" className="short">
                <img src="./images/short.png" />
                <p>Short</p>
            </a>
            <a href="#" className="subscription">
                <img src="./images/subscription.png" />
                <p>Subscription</p>
            </a>
            <a href="#" className="library">
                <img src="./images/library.png" />
                <p>Library</p>
            </a>
            
        </div>
    )
}