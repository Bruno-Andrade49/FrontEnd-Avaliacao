import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import React, { useContext } from "react";
import Login from "../Pages/Login/Login";
import Candidatos from "../Pages/Candidatos/Candidatos";
import Dashboard from "../Pages/Dash/Dash";
import { AuthContext } from "../Context/AuthContext";


const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);

    if (!logged) {
        return <Navigate to="/" replace />;
    }

    return children;
};

const AppRoutes = () => {


    return (
        <Router>
            <Routes>

                {/*Login*/}
                <Route element={<Login />} path="/" />


                {/*Candidatos*/}
                <Route exact path="/candidatos" element={<PrivateRoute><Candidatos /> </PrivateRoute>} />


                {/*Dash*/}
                <Route exact path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />


            </Routes>
        </Router>
    )
}

export default AppRoutes;