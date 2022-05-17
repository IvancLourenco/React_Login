import { Route, Routes as ReactRoutes } from "react-router-dom";
import HomePage from "./Pages/Home";
import React from 'react'

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<h1>Não encontrada</h1>} />
        </ReactRoutes>
    )
}

export default Routes;