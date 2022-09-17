import { Sphere, meshBasicMaterial, sphereBufferGeometry, QuadraticBezierLine, mesh } from '@react-three/drei';
import React,{useState} from 'react';
import data from '../assets/data';
import HomePage from "./MainPage"
import Pins from './Rocket';

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
            <Pins key={rocket.name} onClick={props.onClick} x={x} y= {y} z = {z} name={name} />
            // <mesh onClick={props.onClick} visible position={[1.1 + x, y, z]} layers={0}  >
            //     <sphereBufferGeometry args={[0.05, 35, 32]} />
            //     <meshBasicMaterial color="red" />
            // </mesh>
        )
    })

    // console.log(x,y,z)
    return (
        <>
            {/* <mesh visible position={[1.2 + x, 0.2 + y, 0.2 + z]} layers={0} >
                <sphereBufferGeometry args={[0.2, 32, 32]} />
                <meshBasicMaterial color="red" />
            </mesh> */}
            <group>{box}</group>
                
            
        </>
    );


};

