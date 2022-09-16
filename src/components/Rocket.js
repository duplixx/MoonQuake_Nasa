import React from "react"
import { Sphere, meshBasicMaterial, sphereBufferGeometry, QuadraticBezierLine, mesh } from '@react-three/drei';
export default function Rocket(props) {
    const a = props.x
    const b = props.y
    const c = props.z
    return(
        <mesh visible position={[1.2 + a, 0.2 + b, 0.2 + c]} layers={0} >
                <sphereBufferGeometry args={[0.2, 32, 32]} />
                <meshBasicMaterial color="red" />
            </mesh>
    )
}