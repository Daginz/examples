import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "./Pages/Home"
import GwarancjaRozwoju from "./Pages/GwarancjaRozwoju"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"
import MaciejLasekKo from './Pages/MaciejLasekKo'
import JerzyBuzek from './Pages/JerzyBuzek'
import Szymonholowniaoficjalny from './Pages/Szymonholowniaoficjalny'

const Routing = () => {
  return (
    <Routes>
       <Route path="/" element={<Navigate to="/Szymonholowniaoficjalny" replace />} />
       <Route path="/gwarancja.rozwoju" element={<GwarancjaRozwoju />} />
       <Route path="/register" element={<Register />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/MaciejLasek.KO" element={<MaciejLasekKo/>} />
       <Route path="/JerzyBuzek" element={<JerzyBuzek/>} />
       <Route path="/Szymonholowniaoficjalny" element={<Szymonholowniaoficjalny/>} />
       <Route path="*" element={<Navigate to="/Szymonholowniaoficjalny" replace />} />
       

    </Routes>
  )
}

export default Routing