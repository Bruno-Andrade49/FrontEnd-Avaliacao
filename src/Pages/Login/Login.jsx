import React from 'react';
import "./Login.css"
import Logo from "../../Img/impulse.jpg"

function Login() {

    function handleSubmit(event) {
        event.preventDefault(); // previne que o formulário seja enviado normalmente
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        fetch('/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => response.json())
            .then(() => {
                window.location.href = '/minha-pagina';
            })
            .catch(error => {
                // lida com o erro e exibe uma mensagem de erro apropriada para o usuário
                console.error(error);
                alert('Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.');
            });
    }


    return (
        <>
            <div class="background"></div>
            <div class="backdrop"></div>

            <div class="page">
                <div class="container">
                    <div class="formulario">

                        <div class="header">
                            <div class="logo">
                                <div class="logo-area">
                                    <img src={Logo} className='logo-impulse' />
                                </div>
                            </div>
                            <h3>Acesse sua conta</h3>
                        </div>

                        <form method="post" action="" class="form" onSubmit={handleSubmit}>

                            <div class="input">
                                <i class="fa fa-envelope icone"></i>
                                <input type="email" name="email" placeholder="Email" />
                            </div>
                            <div class="input">
                                <i class="fa fa-lock icone"></i>
                                <input type="password" id="login-password" name="password" placeholder="Senha" />
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