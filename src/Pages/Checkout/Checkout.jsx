import React, { useState } from 'react';
import "./Checkout.css"
import NavBar from '../../Componentes/Bootstrap/NavBar/NavBar';

function Checkout() {

    const [produtos, setProdutos] = useState([]);

    return (
        <>
            <NavBar />
            <h3 style={{ color: 'white' }}>
                Checkout
            </h3>

        </>
    )
}

export default Checkout;