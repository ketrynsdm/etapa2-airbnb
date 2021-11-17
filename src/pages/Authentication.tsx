import React from 'react';
import { Button } from '../components/Button';

import '../assets/styles/authStyle.scss'

export function Authentication() {
    return (
        <div className="user-auth">
            <h1>Bem-vindo ao Airbnb</h1>
            <form autoComplete="nope">
                <div className="form-control">
                    <label htmlFor="nome">nome</label>
                    <input id="nome" type="text" name="nome" autoComplete="off" placeholder="Informe seu nome" />
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="text" name="email" autoComplete="off" placeholder="Informe seu email" />

                    <label htmlFor="senha">Senha</label>
                    <input id="senha" type="senha" name="senha" placeholder="Informe sua senha" />
                </div>

                <div className="button-auth">
                    <Button>
                        Entrar
                    </Button>
                </div>
            </form>
        </div>
    )
}
