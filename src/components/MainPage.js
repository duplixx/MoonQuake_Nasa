import React, { useState } from "react"
import About_apollo from "./About_apollo"
import Graph from "./Graph"
import Model from "./Model"

export default function MainPage(props) {
    const [modal, setModal] = useState(false)
    const handleChange = () => {
        setModal(!modal)
    }
    return (
        <div className="main_page">
            <div className={modal === true ? "overlap" : "overlay"}></div>
            <div className="left-main_page">
                <About_apollo />
            </div>
            <div className="middle-main_page">
                <Model />
            </div>
            <div className="right-main_page">
                <Graph onClick={handleChange} change={modal} />
            </div>
                <button type="button" className="close-button" onClick={props.onClick}>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
        </div>
    )
}