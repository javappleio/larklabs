import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home';
import { About } from '../pages/About'
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
