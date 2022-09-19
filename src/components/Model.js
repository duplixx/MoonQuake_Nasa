import React from "react"
import model from "../assets/modal/rocket.glb"


export default function Model() {
    return (
        <div className="model_div">
            <model-viewer
                ar
                modes="scene-viewer quick-look webxr"
                src={model}
                auto-rotate
                camera-controls
                style={{ width: "600px", height: "600px", zIndex: "100" }}
            >
            </model-viewer>
        </div>
    )
}