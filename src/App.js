import React from 'react';
import { Environment, OrbitControls, OrthographicCamera, Preload,mesh } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Moon from "./components/mappedMoon";
import Stars from "./components/stars";
import MainPage from './MainPage';
import Marks  from './components/marks';
const App = () => {

  return (
    <>
    {/* <div className='app'>

    <MainPage/>
    </div> */}
      <div className="w-full bg-black h-screen">
        
            
            <Canvas className="">
            
              <OrthographicCamera >
              <OrbitControls autoRotate autoRotateSpeed={0.6} minPolarAngle={Math.PI / 1.8} maxPolarAngle={Math.PI / 1.8} />
                <ambientLight intensity="0.1" enableShadow={true} />
                <directionalLight position={[-50, 80, 80]} intensity={0.6}  />
                <directionalLight position={[10, -80, -80]} color={"black"} intensity={1}  />
                  <Moon />
                  <Stars/>
                  <Marks/>

                <Preload all />
              </OrthographicCamera>
            </Canvas>
            
      </div>
    </>
  );
}

export default App;
