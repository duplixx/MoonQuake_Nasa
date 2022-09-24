import React from "react"
import { useNavigate } from "react-router-dom"
import { BiRocket } from "react-icons/bi"
import "../home_page.css"
import vid from "../images/hero_background_vid.mp4"

export default function Home_page() {
    const navigate = useNavigate()
    return (
        <>
            <nav className="home_page_nav">
                <div className='canvas_button' onClick={() => navigate(`/duplixx/MoonQuake_nasa`)}>
                    <h1>Stellium </h1><span><BiRocket /></span>
                </div>
                <div className="nav-sections" >
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Team</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
            <div className="hero_section">
                <div className="title_div">
                    <h1 className="title">
                        Moon Quake
                    </h1>
                </div>
                <div className="hero_vid">
                    <video autoPlay muted>
                        <source src={vid} type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* <div className="demo"><h1>Hello world</h1></div> */}
        </>
    )
}