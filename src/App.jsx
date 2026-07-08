import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [location, setLocation] = useState()

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // console.log(latitude, longitude);

        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

        try {
          const response = await axios.get(url);
          const exactLocation = (response.data.address);
          setLocation(exactLocation);
          console.log(exactLocation);
        } catch (error) {
          console.log(error);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getLocation()
  }, [])
  return (
    <>
      <BrowserRouter>
        <Navbar location = {location} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
