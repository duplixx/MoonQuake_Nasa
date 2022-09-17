import { Sphere,meshBasicMaterial,meshPhongMaterial,shaderMaterial,meshStandardMaterial,meshDepthMaterial} from '@react-three/drei';
import {TextureLoader} from "three/src/loaders/TextureLoader";
import React,{useState} from 'react';
import {useSpring,a}from '@react-spring/three';
import moonTexture from '../assets/img/2k_moon.jpg';
import moonBumpTexture from '../assets/img/moonBump.jpg';
import { useLoader } from '@react-three/fiber';
import data from '../assets/data';
// import vertextShader from '../assets/shaders/vertex.glsl';



export default function MappedMoon() {
  const [isZoom, setIsZoom] = useState(false);
  // const {scale,markerPosition,rotation}=useSpring({
  //     scale:isZoom ?  0.8: 1.0,
  //     markerPosition:isZoom ? [0,0,0] : [0,0,2.5],
  // })
    const colorMap = useLoader(TextureLoader,moonTexture);
    const moonBumpMap= useLoader(TextureLoader,moonBumpTexture);
  return (
    <>
        <Sphere position={[0,0,0]} rotation={[0,0,0]} visible args={[1, 100, 200]} scale={2} layers={0} >
            <meshPhongMaterial map={colorMap} bumpMap={moonBumpMap} roughness={3} bumpScale={0.02}/>
        </Sphere>
    </>
  )
}
