import { Sphere, meshBasicMaterial, sphereBufferGeometry, QuadraticBezierLine, mesh } from '@react-three/drei';
import React,{useState} from 'react';
import {useSpring,a}from '@react-spring/three';
import data from '../assets/data';
import Pins from './Rocket';
import Homepage from './MainPage';

export default function Marks() {
    const [isOpen,setOpen]=useState(false);
    console.log(isOpen);
    const {modal}=useSpring({
        modal:isOpen ? null : <Homepage/>,
    })
    // for (let i = 0; i < data.length; i++) {
    //     var lat = data[i].lat;
    //     var lon = data[i].lon;
    //     var phi = (90 - lat) * (Math.PI / 180);
    //     var theta = (lon + 180) * (Math.PI / 180);
    //     var x = -(Math.sin(phi) * Math.cos(theta));
    //     var z = (Math.sin(phi) * Math.sin(theta));
    //     var y = (Math.cos(phi));
    // }
   
    
    const box = data.map(rocket =>{
        var lat = rocket.lat;
        var lon = rocket.lon;
        var phi = (90 - lat) * (Math.PI / 180);
        var theta = (lon + 180) * (Math.PI / 180);
        var x = -(Math.sin(phi) * Math.cos(theta));
        var z = (Math.sin(phi) * Math.sin(theta));
        var y = (Math.cos(phi));
        return(
            <Pins x= {x} y= {y} z = {z} />
        )
    })

    // console.log(x,y,z)
    return (
        <>
            {/* <mesh visible position={[1.2 + x, 0.2 + y, 0.2 + z]} layers={0} >
                <sphereBufferGeometry args={[0.2, 32, 32]} />
                <meshBasicMaterial color="red" />
            </mesh> */}
            <a.group modal={modal} onClick={()=>{setOpen(prev=>!prev)}}>{box}</a.group>
                
            
        </>
    );


};

