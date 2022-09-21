import { Sphere,meshBasicMaterial,meshPhongMaterial,shaderMaterial,meshStandardMaterial,meshDepthMaterial} from '@react-three/drei';
import {TextureLoader} from "three/src/loaders/TextureLoader";
import React,{useState} from 'react';
import {useSpring,a}from '@react-spring/three';
import moonTexture from '../assets/img/moooooooooooon.jpg';
import moonBumpTexture from '../assets/img/moonjpg.jpg';
import { useLoader } from '@react-three/fiber';
import data from '../assets/data';
// import vertextShader from '../assets/shaders/vertex.glsl';



export default function MappedMoon() {
    const colorMap = useLoader(TextureLoader,moonTexture);
    const moonBumpMap= useLoader(TextureLoader,moonBumpTexture);
  return (
    <>
        <Sphere position={[0,0,0]} rotation={[0,0,0]} visible args={[1, 100, 200]} scale={2} layers={0}>
            <meshPhongMaterial map={colorMap} bumpMap={moonBumpMap} roughness={3} bumpScale={0.06} dark={true}/>
        </Sphere>
    </>
  )
}
