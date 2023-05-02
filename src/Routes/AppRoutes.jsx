import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import React from "react";
import Login from "../Pages/Login/Login";
import Candidatos from "../Pages/Candidatos/Candidatos";
import Dashboard from "../Pages/Dash/Dash";

const AppRoutes = () => {

    return (
        <Router>
            <Routes>

                {/*Login*/}
                <Route path="/" element={<Login />} />

                {/*Candidatos*/}
                <Route path="/candidatos" element={<Candidatos />} />

                {/*Dash*/}
                <Route path="/dashboard" element={<Dashboard />} />

            </Routes>
        </Router>
    )
}

export default AppRoutes;