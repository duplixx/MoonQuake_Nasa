import React from "react"
import { useNavigate } from "react-router-dom"
import { BiRocket } from "react-icons/bi"

export default function Home_page() {
    const navigate = useNavigate()
    return(
        <>
            <nav className="home_page_nav">
            <div className='canvas_button'
                onClick = {() => navigate(`/duplixx/MoonQuake_nasa`)}
                ><h1>Stellium </h1><span>
                    <BiRocket />
                </span>
                </div>
            </nav>
        </>
    )
}