import { Route, BrowserRouter, Routes as ReactRoutes } from "react-router-dom";
import HomePage from "./Pages/Home";
import React from 'react'

function Routes() {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<h1>Não encontrada</h1>} />
            </ReactRoutes>
        </BrowserRouter>
    )
}

export default Routes;