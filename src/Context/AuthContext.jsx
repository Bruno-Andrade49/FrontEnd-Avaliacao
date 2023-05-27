import React, { createContext, useEffect, useState } from "react";
import api from "../services/API/Api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        const storedLogged = localStorage.getItem("logged");
        if (storedLogged === "true") {
            setLogged(true);
        }
    }, []);

    const handleLogin = async (email, senha) => {
        try {
            const response = await api.post("/login", {
                email: email,
                password: senha
            });

            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem("logged", "true");
                localStorage.setItem("token", token);
                setLogged(true);

                api.defaults.headers.Authorization = `Bearer ${token}`;
            } else {
                throw new Error("Falha na autenticação");
            }
        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro ao fazer login. Por favor, tente outra senha ou um novo login.");
        }
    };

    const logout = () => {
        localStorage.removeItem("logged");
        localStorage.removeItem("token");
        setLogged(false);
        console.log("Não está autenticado!");
    };

    return (
        <AuthContext.Provider value={{ handleLogin, logged, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
