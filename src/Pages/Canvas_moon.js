import React, { Suspense, useEffect, useState } from 'react';
import { Environment, OrbitControls, OrthographicCamera, Preload, mesh } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Moon from "../components/mappedMoon"
import Stars from "../components/stars";
import Marks from '../components/marks';
import Modal from "../components/ModalPage"
import SearchBar from '../components/searchBar';
import { useNavigate } from "react-router-dom"
import { BiRocket } from "react-icons/bi";
export default function Canvas_moon() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(prev => !prev)
    }
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full bg-black h-screen">
                <div className='home_page'>
                    {open ?
                        <Modal onClick={handleClick} /> : null
                    }

                </div>
                <div className='absolute flex justify-start align-center z-10 h-screen '>
                    <SearchBar />
                </div>
                <Canvas className="">
                    <Suspense >

                        <OrthographicCamera position={[0, 0, 0]} rotation={[0, 10, 0]} >
                            <OrbitControls autoRotate={true} enableZoom={false} autoRotateSpeed={0.6} minPolarAngle={Math.PI / 1.8} maxPolarAngle={Math.PI / 1.8} />
                            <ambientLight intensity="0.06" enableShadow={true} dropShadows={true} />
                            <directionalLight position={[190, 80, 10]} intensity={0.4} />
                            <Moon />
                            <Stars />
                            <Marks onClick={handleClick} />
                            <Preload all />
                        </OrthographicCamera>
                    </Suspense>
                </Canvas>
                <div className='home_button'
                onClick = {() => navigate(`/homepage`)}
                ><h1>Stellium </h1><span>
                    <BiRocket />
                </span>
                </div>
            </div>
        </>
    )
}