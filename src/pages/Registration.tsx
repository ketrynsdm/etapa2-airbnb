import React, { useState } from 'react';
import { Button } from '../components/Button';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



import '../assets/styles/authStyle.scss'

export function Registration() {
    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const api = axios.create({
        baseURL: 'http://localhost:1234/api',
        timeout: 1000,
    }
    );
    const cookies = new Cookies();
    const navigate = useNavigate();

    return (
        <div className="user-auth">

            <h1>Bem-vindo ao Airbnb</h1>
            <form autoComplete="nope">
                <div className="form-control">
                    <label htmlFor="nome">nome</label>
                    <input id="nome" type="text" name="nome" autoComplete="off" value={username} onChange={e => {
                        setusername(e.target.value);
                    }} placeholder="Informe seu nome de usuario" />
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="text" name="email" autoComplete="off" value={email} onChange={
                        e => setEmail(e.target.value)
                    } placeholder="Informe seu email" />

                    <label htmlFor="senha">Senha</label>
                    <input id="senha" type="password" name="senha" value={password} onChange={
                        e => {
                            setpassword(e.target.value);
                        }
                    } placeholder="Informe sua senha" />
                </div>

                <div className="button-auth">
                    <Button onClick={
                        e => {
                            e.preventDefault();
                            api.post('/usuario/cadastrar',
                                {
                                    nome: username,
                                    email: email,
                                    senha: password
                                }
                            ).then(response => {
                                cookies.set('authorization-token', response.data, { path: '/' })
                                if (response.status === 200) {
                                    navigate('/');
                                }

                            });
                        }
                    }>
                        Cadastrar
                    </Button>
                    <Button onClick={() => {
                        navigate('/auth');
                    }}>
                        Já é cadastrado? Faça login
                    </Button>
                </div>
            </form >
        </div >
    )
}
