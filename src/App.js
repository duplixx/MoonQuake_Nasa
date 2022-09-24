import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Preloader from './components/Preloader';
import Canvas_moon from './Pages/Canvas_moon';
import Home_page from './Pages/Home_page';
const App = () => {
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(false)
    setTimeout(() => {
      setLoader(false)
    }, 25000);
  }, [])

  return (
    <>
<<<<<<< HEAD
    {loader === true ? <Preloader /> :
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
            
              <OrthographicCamera position={[0, 0, 0]} rotation={[0,10,0]} >
              <OrbitControls autoRotate={false} enableZoom={false} autoRotateSpeed={0.6} minPolarAngle={Math.PI / 1.8} maxPolarAngle={Math.PI / 1.8} />
                <ambientLight intensity="0.06" enableShadow={true}  dropShadows={true}/>
                <directionalLight position={[190, 80, 10]} intensity={0.4}  />
                  <Moon />
                  <Stars/> 
                  <Marks onClick={handleClick}/>
                <Preload all />
              </OrthographicCamera>
              </Suspense> 
            </Canvas>
            
      </div>
=======
      {loader === true ? <Preloader /> :
        <BrowserRouter>
          <Routes>
            <Route
              path="/duplixx/MoonQuake_Nasa"
              element={<Canvas_moon />}
            />
            <Route
            path='/homepage'
            element={<Home_page/>}
            />
          </Routes>
        </BrowserRouter>
>>>>>>> ca72510c01de2bcb18592382e72b71df3f355b8a
      }
    </>
  );
}

export default App;
