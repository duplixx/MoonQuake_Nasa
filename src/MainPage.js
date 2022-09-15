import React, { useState } from "react"
import About_apollo from "./components/About_apollo"
import Graph from "./components/Graph"
import Model from "./components/Model"

export default function MainPage() {
    const [modal, setModal] = useState(false)
    const handleChange = () =>{
        setModal(!modal)
    }
    return(
        // <Component/>
        <div className="main_page">
            <div className={modal === true ? "overlap":"overlay"}></div>
            <div className="left-main_page">
                <About_apollo/>
            </div>
            <div className="middle-main_page">
                <Model/>
            </div>
            <div className="right-main_page">
                <Graph onClick={handleChange} change={modal}/>
            </div>
        </div>
    )
}