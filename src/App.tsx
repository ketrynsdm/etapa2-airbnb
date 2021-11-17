import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Authentication } from './pages/Authentication';
import { Registration } from './pages/Registration';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='auth' element={<Authentication />} />
            <Route path='registration' element={<Registration />} />
        </Routes>
    );
}

export default App;
