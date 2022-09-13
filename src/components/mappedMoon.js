import { Sphere,meshBasicMaterial,meshPhongMaterial,shaderMaterial,meshStandardMaterial,meshDepthMaterial} from '@react-three/drei';
import {TextureLoader} from "three/src/loaders/TextureLoader";
import React from 'react';
import moonTexture from '../assets/img/moon.jpg';
import moonBumpTexture from '../assets/img/moonBump.jpg';
import { useLoader } from '@react-three/fiber';
// import vertextShader from '../assets/shaders/vertex.glsl';



export default function MappedMoon() {
    const colorMap = useLoader(TextureLoader,moonTexture);
    const moonBumpMap= useLoader(TextureLoader,moonBumpTexture);
  return (
    <>
        <Sphere visible args={[1.2, 100, 200]} scale={2}>
            <meshPhongMaterial map={colorMap} bumpMap={moonBumpMap} roughness={5} bumpScale={0.01}/>
        </Sphere>
    </>
  )
}
