import { Sphere,meshBasicMaterial,shaderMaterial,meshStandardMaterial,meshDepthMaterial} from '@react-three/drei';
import {TextureLoader} from "three/src/loaders/TextureLoader";
import React from 'react';
import moonTexture from '../assets/img/2k_moon.jpg';
import { useLoader } from '@react-three/fiber';
// import vertextShader from '../assets/shaders/vertex.glsl';



export default function MappedMoon() {
    const colorMap = useLoader(TextureLoader,moonTexture);
  return (
    <>
        <Sphere visible args={[1.1, 100, 200]} scale={2}>
            <meshStandardMaterial map={colorMap}  />
        </Sphere>
    </>
  )
}
