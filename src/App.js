import React, { useEffect, useState } from 'react';
import { Environment, OrbitControls, OrthographicCamera, Preload, mesh } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Moon from "./components/mappedMoon";
import Stars from "./components/stars";
import Marks from './components/marks';
import HomePage from "./components/MainPage"
import Preloader from './components/Preloader';
const App = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(prev => !prev)
  }
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 600);
  },[])

  return (
    <>
    {loader === true ? <Preloader /> :
      <div className="w-full bg-black h-screen">
            <Canvas className="">
              <OrthographicCamera position={[0, 0, 0]} rotation={[0,10,0]} >
              <OrbitControls autoRotate={true} enableZoom={false} autoRotateSpeed={0.6} minPolarAngle={Math.PI / 1.8} maxPolarAngle={Math.PI / 1.8} />
                <ambientLight intensity="0.05" enableShadow={true}  dropShadows={true}/>
                <directionalLight position={[190, 80, 10]} intensity={0.4}  />
                  <Moon />
                  <Stars/> 
                  <Marks/> 
                <Preload all />
              </OrthographicCamera>
            </Canvas>
            
      </div>
      }
    </>
  );
}

export default App;
