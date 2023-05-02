import React, { useState } from 'react';
import "./Candidatos.css"
import NavBar from '../../Componentes/Bootstrap/NavBar/NavBar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {FiSearch} from "react-icons/fi"


function Candidatos() {

    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };



    return (
        <>
            <NavBar />

            {/*MODAL PARA A CRIAÇÃO*/}


            <div className="candidatos-titulo-container">

                <div className="candidatos-titulo">
                    Candidatos
                </div>

                <div>
                    <Button onClick={handleModalOpen}>Cadastrar</Button>

                    <Modal show={showModal} onHide={handleModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Modal body text goes here.</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                            <Button variant="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>

            <div className="candidatos-titulo-container">

            <div className="search-pag-form">
                        <FiSearch />
                        <input type="text" /*value={pesquisaFuncionarios} onChange={(e) => setPesquisaFuncionarios(e.target.value)}*/ placeholder="Pesquisar por nome" />
                    </div>
            </div >
            <div className="container-form">

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Candidatos;