import { Sphere, meshBasicMaterial, sphereBufferGeometry, QuadraticBezierLine, mesh } from '@react-three/drei';
import React,{useState} from 'react';
import data from '../assets/data';
import HomePage from "./MainPage"
import Pins from './Rocket';

export default function Marks(props) {
    
    const box = data.map(rocket =>{
        var lat = rocket.lat;
        var lon = rocket.lon;
        var phi = (90 - lat) * (Math.PI / 180);
        var theta = (lon + 180) * (Math.PI / 180);
        var x = -(Math.sin(phi) * Math.cos(theta));
        var z = (Math.sin(phi) * Math.sin(theta));
        var y = (Math.cos(phi));
        return(
            // <Pins key={rocket.name} handleClick={handleClick} x= {x} y= {y} z = {z} />
            <mesh onClick={props.onClick} visible position={[1.1 + x, y, z]} layers={0}  >
                <sphereBufferGeometry args={[0.05, 35, 32]} />
                <meshBasicMaterial color="red" />
            </mesh>
        )
    })

    // console.log(x,y,z)
    return (
        <>
            {box}
                   
        </>
    );


};

