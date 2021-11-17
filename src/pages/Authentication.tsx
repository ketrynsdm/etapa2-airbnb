import React from 'react';
import { Button } from '../components/Button';

import '../assets/styles/authStyle.scss'

export function Authentication() {
    return (
        <div className="user-auth">
            <h1>Bem-vindo ao Airbnb</h1>
            <form autoComplete="nope">
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="text" name="email" autoComplete="off" placeholder="Informe seu email"/>    
                    
                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" name="password" placeholder="Informe sua senha"/>
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