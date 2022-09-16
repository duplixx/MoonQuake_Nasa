import React from "react"
import { Sphere, meshBasicMaterial, sphereBufferGeometry, QuadraticBezierLine, mesh } from '@react-three/drei';
export default function Pins(props) {
    const a = props.x
    const b = props.y
    const c = props.z
    return(
            <>
                
                <mesh visible position={[1.1 + a, b,  c]} layers={0}  >
                    <sphereBufferGeometry args={[0.05, 35, 32]} />
                    <meshBasicMaterial color="red" />
                </mesh>
                
            </>
    )
}