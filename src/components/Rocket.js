import React,{useState} from "react"
import Marker from "./marker";
import { useGLTF, Html, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, meshBasicMaterial, sphereBufferGeometry, QuadraticBezierLine, mesh } from '@react-three/drei';
import HomePage from './MainPage';
export default function Pins(props) {
    const [occluded, occlude] = useState()
    const a = props.x
    const b = props.y
    const c = props.z
    const name=props.name
    return(
            <>
                
                <mesh visible position={[1.1 + a, b,  c]} layers={0}  >
                    <sphereBufferGeometry args={[0.05, 35, 32]} />
                    <group position={[ -0.8+ a, b, c]} rotation={[0, 0, Math.PI]}>
                    <Marker rotation={[0, Math.PI / 2, Math.PI / 2]}>
                        <label className='absolute font-sm text-white p-2 border-4 border-lime-400 rounded-3xl  transform delay-150' for="html" onClick={()=>{
                        <HomePage name={name}/>
                        }}>{name}</label>
                    </Marker>
                    </group>
                    <meshBasicMaterial color="red" />
                </mesh>
                
            </>
    )
}
