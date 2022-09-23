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
      }
    </>
  );
}

export default App;
