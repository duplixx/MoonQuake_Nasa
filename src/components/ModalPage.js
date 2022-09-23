import React, { useState } from "react"
// import About_apollo from "./About_apollo"
import logo from "../images/logo_apollo.png"
import Graph from "./Graph"
import Model from "./Model"

export default function MainPage(props) {
    const [modal, setModal] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const handleChange = () => {
        setModal(!modal)
    }
    return (
        <div className="main_page">
            {/* <div className={modal === true ? "overlap" : "overlay"}></div> */}
                {/* <About_apollo  /> */}
                <img className="logo_image" src={logo} alt="logo" />
                <h1 className="about_title">Apollo 11</h1>
                <p className="description">Apollo 11 was launched on July 16, 1969, at 8:32 AM Central Daylight Time (CDT) with the goal of performing the first human landing on the Moon. 
                <br/> Commander Neil Armstrong, Command Module Pilot Michael Collins, and Lunar Module Pilot Edwin “Buzz” Aldrin entered lunar orbit on the afternoon of July 19.</p>
            <div className="middle-main_page">
                <Model />
            </div>
            <div className="right-main_page">
                <Graph onClick={handleChange} change={modal}  />
            </div>
            <div className="graph_description">
                <h1 className="graph_title">Graph Description</h1>
                <p>Graph showing the average annual occurrence and equivalent energy release for earthquakes of different magnitudes. Plot is from the Incorporated Research Institutions for Seismology.</p>
            </div>
            <button type="button" className="close-button" onClick={props.onClick}>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}