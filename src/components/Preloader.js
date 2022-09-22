import React, { useEffect, useState } from "react"
import "./Preloader.scss"
import loader from "../images/preloader.mp4"

export default function Preloader() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let j = 1
    setInterval(() => {
      for (let i = 0; i <= j; i++) {
        setCount(i)
      }
      j = j + 1
    }, 1000);
  }, count)
  return (
    <>
      <div id="prelaoder" >
        <video id="background-video" autoPlay loop muted>
          <source src={loader} type="video/mp4" />
        </video>
        <div className="loading_content">
          { count < 15 && <h1 className="scripts">Loading Scripts... {count}/15</h1>}
          {count >= 15 && <h1 className="model">Loading Model... {count-15}/9</h1>}
        </div>
      </div>
    </>
  )
}