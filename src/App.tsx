import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { Authentication } from './pages/Authentication';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='auth' element={<Authentication />} />
        </Routes>
    );
}

export default App;
