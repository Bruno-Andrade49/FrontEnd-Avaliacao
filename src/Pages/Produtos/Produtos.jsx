import React, { useEffect, useState } from 'react';
import "./Produtos.css"
import NavBar from '../../Componentes/Bootstrap/NavBar/NavBar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiSearch } from "react-icons/fi"
import axios from 'axios';
import api from '../../services/API/Api';


function Produtos() {

    const [produtos, setProdutos] = useState([]);
    const [selectProduto, setselectProduto] = useState([]);



    useEffect(() => {
        // Faz a requisição para a API de produtos e atualiza o estado com os dados recebidos
        api.get('/product')
            .then(response => {
                setProdutos(response.data.products);
            })
            .catch(error => {
                console.error('Erro ao obter os produtos:', error);
            });
    }, []);

    const carregarProduto = (id) => {
        setShowModalEdit(true);

        api.get(`/product/${id}`)
            .then((response) =>
                setselectProduto(response.data))
            .catch((error) => {
                console.error("Ops, ocorreu um erro" + error)
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: e.target.elements.nome.value,
            description: e.target.elements.descricao.value,
            quantity: parseInt(e.target.elements.quantidade.value),
            price: e.target.elements.preco.value
        }

        // Verificar se o produto já está cadastrado
        const produtoJaCadastrado = produtos.some((produto) => produto.name === data.nome);
        if (produtoJaCadastrado) {
            setTimeout(() => {
            }, 2000);
            return;
        }

        try {
            // Enviar requisição para criar o novo produto
            api.post("/product", data)
                .then(() => {
                    setProdutos([...produtos, data])
                })

            // Exibir mensagem de sucesso por 2 segundos
        } catch (error) {
            console.error("Ocorreu um erro:", error);
        }
    };


    const handleCloseModal = () => {
        setShowModalEdit(false);

    };

    const submitEdit = (e) => {

        e.preventDefault();

        const data = {
            id: selectProduto.id,
            nome: e.target.elements.nome.value,
            descricao: e.target.elements.descricao.value
        }

        updateProduto(data)

        handleCloseModal();
    };

    const updateProduto = async (data) => {
        async function updateProdutoInteiro() {
            await api.put(`/product/${data.id}`, data)
                .then(() => console.log("Editado com sucesso!"))
                .catch(() => {
                    console.log("Ocorreu um erro")
                })
        }

        await updateProdutoInteiro();

        function handleUpdateItem(updatedItem) {
            const updatedItems = Produtos.map((item) => {
                if (item.id === updatedItem.id) {
                    return updatedItem;
                }
                return item;
            });
            setProdutos(updatedItems);
        }

        handleUpdateItem(data)

        //window.location.reload();
    }

    const deletarProduto = async (id) => {
        try {
            await api.delete(`/product/${id}`);
            console.log("Apagado com sucesso!");

            // Atualizar o estado dos produtos removendo o produto excluído
            setProdutos(produtos.filter((produto) => produto.id !== id));
        } catch (error) {
            console.log("Ocorreu um erro:", error);
        }
    };

    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalCreate, setShowModalCreate] = useState(false);


    const handleModalOpenEdit = () => {
        setShowModalEdit(true);
    };

    const handleModalOpenCreate = () => {
        setShowModalCreate(true);
    };

    const handleModalCloseEdit = () => {
        setShowModalEdit(false);

    };

    const handleModalCloseCreate = () => {
        setShowModalCreate(false);
    };



    return (
        <>
            <NavBar />

            {/*MODAL PARA A CRIAÇÃO*/}


            <div className="candidatos-titulo-container">

                <div className="candidatos-titulo">
                    Produtos
                </div>

                <div>
                    <Button onClick={handleModalOpenCreate}>Cadastrar</Button>

                    <Modal show={showModalEdit} onHide={handleModalCloseEdit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Modal body text goes here.</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalCloseEdit}>Close</Button>
                            <Button variant="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>

            <div className="candidatos-titulo-container">

                <div className="search-pag-form">
                    <FiSearch />
                    <input type="text" placeholder="Pesquisar por nome" />
                </div>
            </div >
            <div className="container-form">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Produto</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(produto => (
                            <tr key={produto.id}>
                                <td>{produto.name}</td>
                                <td>{produto.description}</td>
                                <td>{produto.quantity}</td>
                                <td>R$ {produto.price}</td>
                                <td>
                                    <button
                                        className="btn btn-primary me-2"
                                        onClick={() => carregarProduto(produto.id)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deletarProduto(produto.id)}
                                    >
                                        Deletar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/*Modal de EDIÇÃO */}


            <Modal show={showModalEdit} onHide={handleModalCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Produto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={submitEdit}>
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                value={selectProduto.name}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descricao" className="form-label">Descrição</label>
                            <input
                                type="text"
                                className="form-control"
                                id="descricao"
                                value={selectProduto.description}

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="preco" className="form-label">Preço</label>
                            <input
                                type="number"
                                className="form-control"
                                id="preco"
                                value={selectProduto.price}
                            />
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalCloseEdit}>Fechar</Button>
                    <Button variant="primary" type="submit">Salvar Alterações</Button>
                </Modal.Footer>
            </Modal>

            {/*Modal de CRIAÇÃO */}

            <Modal show={showModalCreate} onHide={handleModalCloseCreate}>
                <Modal.Header closeButton>
                    <Modal.Title>Criar novo produto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className="form-control" id="nome" name="nome" placeholder="Digite o nome do produto" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea className="form-control" id="descricao" name="descricao" placeholder="Digite a descrição do produto" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantidade">Quantidade</label>
                            <input type="number" className="form-control" id="quantidade" name="quantidade" placeholder="Digite a quantidade do produto" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="preco">Preço</label>
                            <input type="text" className="form-control" id="preco" name="preco" placeholder="Digite o preço do produto" />
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">Criar Produto</button>
                        <br/>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalCloseCreate}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Produtos;