import { Sphere, meshBasicMaterial, sphereBufferGeometry, QuadraticBezierLine,mesh} from '@react-three/drei';
import React from 'react';
import data from '../assets/data';
export default function Marks() {
    for(let i=0;i<data.length;i++){
            var lat=data[i].lat;
            var lon=data[i].lon;
            var phi = (90 - lat) * (Math.PI / 180);
            var theta = (lon + 180) * (Math.PI / 180);
            var x = -(Math.sin(phi) * Math.cos(theta));
            var z =  (Math.sin(phi) * Math.sin(theta));
            var y =  (Math.cos(phi));
        }
        // console.log(x,y,z)
        return (
            <>  
            <mesh visible position={[1.2+x, 0.2+y, 0.2+z]} layers={0} >
                <sphereBufferGeometry args={[0.2, 32, 32]} />
                <meshBasicMaterial color="red" />  
            </mesh>
            </>
        );

        
    };
    
