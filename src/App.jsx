import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import WhatIsDID from './pages/WhatIsDID';
import CauseDev from './pages/CauseDev';
import Related from './pages/Related';
import Treatments from './pages/Treatments';
import Contro from './pages/Contro';
import More from './pages/More'

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/whatisdid' element={<WhatIsDID />} />
                <Route path='/causedev' element={<CauseDev />} />
                <Route path='/related' element={<Related />} />
                <Route path='/treatment' element={<Treatments />} />
                <Route path='/contro' element={<Contro />} />
                <Route path='/more' element={<More />} />
            </Routes>
        </div>
    )
}

export default App