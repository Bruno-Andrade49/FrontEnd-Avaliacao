import React, { useContext } from 'react';
import "./Login.css"
import Logo from "../../Img/impulse.jpg"
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from 'react-router-dom';

function Login() {

    const { handleLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: e.target.elements.email.value,
            senha: e.target.elements.senha.value,
        }

        await handleLogin(data.email, data.senha)

        navigate("/produtos")
    }

    


    return (
        <>
            <div class="background"></div>
            <div class="backdrop"></div>

            <div class="page">
                <div class="container-login">
                    <div class="formulario">

                        <div class="header">
                            <div class="logo">
                                <div class="logo-area">
                                    <img src={Logo} className='logo-impulse' />
                                </div>
                            </div>
                            <h3>Acesse sua conta</h3>
                        </div>

                        <form method="post" action="" class="form" onSubmit={onSubmit}>

                            <div class="input">
                                <i class="fa fa-envelope icone"></i>
                                <input type="email" name="email" placeholder="Email" />
                            </div>
                            <div class="input">
                                <i class="fa fa-lock icone"></i>
                                <input type="password" id="login-password" name="senha" placeholder="Senha" />
                                <i id="show-password" class="fa fa-eye icone"></i>
                            </div>

                            <input type="submit" name="login" value="Login" class="btn btn-login" />
                        </form>

                    </div>
                    <p class="attrib">&copy; 2023 Impulse</p>
                </div>
            </div>
        </>
    )
}

export default Login;