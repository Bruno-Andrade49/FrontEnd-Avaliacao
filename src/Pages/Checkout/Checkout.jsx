import React, { useState } from 'react';
import "./Checkout.css"
import NavBar from '../../Componentes/Bootstrap/NavBar/NavBar';

function Checkout() {

    const [produtos, setProdutos] = useState([]);

    return (
        <>
            <NavBar />
            <form>
                <div class="container-form">
                    <div style={{ display: "block", width: "500px", paddingTop: "50px" }}>
                        <label style={{fontSize: "22px"}}>Insira o códig do produto</label>
                        <div class="input-group mb-3">

                            <input type="text" class="form-control" placeholder="Cód prod" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">Procurar produto</button>
                            </div>
                        </div>
                    </div>

                </div>

            </form>

        </>
    )
}

export default Checkout;