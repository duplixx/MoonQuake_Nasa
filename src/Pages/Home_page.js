import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home_page() {
    const navigate = useNavigate()
    return(
        <h1 className="hello"
        onClick={()=> navigate(`/duplixx/MoonQuake_Nasa`)}
        >Hello homepage</h1>
    )
}