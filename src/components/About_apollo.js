import React from "react"
import logo from "../images/logo_apollo.png"
import "./About_apollo.css"

export default function About_apollo() {
    return(
        <>
        <h1 className="about_title">Apollo 11</h1>
        <img className="logo_image" src={logo} alt="logo" />
        <p>Apollo 11 was launched on July 16, 1969, at 8:32 AM Central Daylight Time (CDT) with the goal of performing the first human landing on the Moon.</p>
        <p>Commander Neil Armstrong, Command Module Pilot Michael Collins, and Lunar Module Pilot Edwin “Buzz” Aldrin entered lunar orbit on the afternoon of July 19.</p>
        </>

    )
}