import React, { useState } from 'react';
import { Environment, OrbitControls, OrthographicCamera, Preload, mesh } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Moon from "./components/mappedMoon";
import Stars from "./components/stars";
import Marks from './components/marks';
import HomePage from "./components/MainPage"
const App = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(prev => !prev)
  }
  console.log(open)

  return (
    <>
      <div className="w-full bg-black h-screen">
        <div className='home_page'>

          {open ?
            <HomePage onClick={handleClick} /> : null
          }
        </div>


        <Canvas className="">

          <OrthographicCamera >
            <OrbitControls autoRotate={true} enableZoom={false} autoRotateSpeed={0.6} minPolarAngle={Math.PI / 1.8} maxPolarAngle={Math.PI / 1.8} />
            <ambientLight intensity="0.1" enableShadow={true} />
            <directionalLight position={[-50, 80, 80]} intensity={0.6} />
            <directionalLight position={[10, -80, -80]} color={"black"} intensity={1} />
            <Moon />
            <Stars />
            <Marks onClick={handleClick} />
            <Preload all />
          </OrthographicCamera>
        </Canvas>

      </div>
    </>
  );
}

export default App;
