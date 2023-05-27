import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import React, { useContext } from "react";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dash/Dash";
import { AuthContext, AuthProvider } from "../Context/AuthContext";
import Produtos from "../Pages/Produtos/Produtos";
import Checkout from "../Pages/Checkout/Checkout";

const PrivateRoute = ({ element }) => {
    const { logged } = useContext(AuthContext);

    // Verifica o estado logged no contexto e no localStorage
    const isAuthenticated = logged || localStorage.getItem("logged") === "true";

    return isAuthenticated ? (
        element
    ) : (
        <Navigate to="/" replace />
    );
};

const AppRoutes = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Login */}
                    <Route path="/" element={<Login />} />

                    {/* Produtos */}
                    <Route
                        path="/produtos"
                        element={<PrivateRoute element={<Produtos />} />}
                    />

                    {/* Produtos - Checkout */}
                    <Route
                        path="/checkout"
                        element={<PrivateRoute element={<Checkout />} />}
                    />


                    {/* Dash */}
                    <Route
                        path="/dashboard"
                        element={<PrivateRoute element={<Dashboard />} />}
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default AppRoutes;