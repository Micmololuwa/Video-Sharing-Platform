import React from "react"
import "./css/style.css"

export default function SideBar (){
    return (

        <div className="sidebar">

            <a href="#" className="home">
                <img src="./images/home.png" alt = ""/>
                <p>Home</p>
            </a>
            <a href="#" className="explore">
                <img src="./images/explore.png" alt = "" />
                <p>Explore</p>
            </a>
            <a href="#" className="short">
                <img src="./images/short.png" alt = "" />
                <p>Short</p>
            </a>
            <a href="#" className="subscription">
                <img src="./images/subscription.png" alt = "" />
                <p>Subscription</p>
            </a>
            <a href="#" className="library">
                <img src="./images/library.png" alt = "" />
                <p>Library</p>
            </a>
            
        </div>
    )
}