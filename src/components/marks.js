import { Sphere, meshBasicMaterial, sphereBufferGeometry, QuadraticBezierLine, mesh } from '@react-three/drei';
import React,{useState} from 'react';
import data from '../assets/data';
import HomePage from "./MainPage"
import Marker from './marker';

export default function Marks(props) {
    
    const box = data.map(rocket =>{
        //code to convert 2d coordinates to 3d coordinates
        var lat = rocket.lat;
        var lon = rocket.lon;
        var phi = (90 - lat) * (Math.PI / 180);
        var theta = (lon + 180) * (Math.PI / 180);
        var x = -(Math.sin(phi) * Math.cos(theta));
        var z = (Math.sin(phi) * Math.sin(theta));
        var y = (Math.cos(phi));
        // passing names in props
        var name=rocket.name;
        
        
        return(
            <mesh visible position={[1.1+x, y,  z]} layers={0} onClick={props.onClick} >
                    <sphereBufferGeometry args={[0.05, 35, 32]} />
                    <meshBasicMaterial color="purple" />
                    <group position={[-0.8+ x, y, z]} rotation={[0, 0, Math.PI]} layers={0} >
                    <Marker rotation={[0, Math.PI / 2, Math.PI / 2]} castShadow={true}>
                        <label className='absolute font-sm text-white p-2 border-4 border-lime-400 rounded-3xl  transform delay-150' for="html" onClick={props.onClick}>{name}</label>
                    </Marker>
                    </group>
                </mesh>
        )
    })
    return (
        <>
            <group>{box}</group>
                
            
        </>
    );


};

