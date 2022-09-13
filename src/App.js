import React from 'react';
import { Environment, OrbitControls, OrthographicCamera, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Moon from "./components/Moon";
import Test from "./components/mappedMoon";
import stimage from '../src/assets/img/venice_sunset_1k.hdr';
const App=({ env = 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr' })=>{

  return (
    <>
    
      <div className="bg-black h-screen">
      
        
            <Canvas className="canvas h-screen">

              <OrthographicCamera >
              <OrbitControls autoRotate autoRotateSpeed={0.6} minPolarAngle={Math.PI / 1.8} maxPolarAngle={Math.PI / 1.8} />
                <ambientLight intensity="0.1" enableShadow={true} />
                <directionalLight position={[-50, 0, 80]} intensity={0.6} enableShadow={true} />
                <Test />

                <Preload all />
              </OrthographicCamera>
            </Canvas>



      </div>
    </>
  );
}

export default App;
