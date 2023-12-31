import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Projects from './Components/Projects';

let Main = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/abtme' Component={AboutMe} />
            <Route path='/edu' Component={Education} />
            <Route path='/pro' Component={Projects} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Main