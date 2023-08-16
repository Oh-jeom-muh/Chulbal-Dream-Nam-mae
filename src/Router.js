import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Start from 'pages/Start';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;