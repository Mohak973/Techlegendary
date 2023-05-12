import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Teampage from '../Pages/Teampage'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route element={<Home />} path="/"/>
            <Route  element={<Teampage />} path="/Teampage"/>
        </Routes>
    </div>
  )
}

export default AllRoutes