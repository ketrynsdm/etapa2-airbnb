import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Authentication } from './pages/Authentication';
import { RegistrationUser } from './pages/RegistrationUser';
import { RegistrationAirbnb } from './pages/RegistrationAirbnb';
import { DetailsAccomodation } from './pages/DetailAccomodation';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='auth' element={<Authentication />} />
            <Route path='registrationUser' element={<RegistrationUser />} />
            <Route path='registrationAirbnb' element={<RegistrationAirbnb />} />
            <Route path='detailAccomodation' element={<DetailsAccomodation />}/>

        </Routes>
    );
}

export default App;
