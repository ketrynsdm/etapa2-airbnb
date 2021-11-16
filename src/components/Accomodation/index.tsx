import React from 'react';

import './styleAccomodation.scss';

type AccomodationProps = {
    id: string;
    nome: string;
    sumario: string;
    descricao: string;
    regrasDaCasa: string;
    image: string;
    nota: string;
}

export function Accomodation({
    image,
    nome,
    descricao,
    nota
    }: AccomodationProps) {
    return (
        <div className="accomodation">
            <header>
               <img src={image} alt="Foto da acomodação"/>
                <p>{nome}</p>
                <span>{descricao}</span>
            </header>    
              <footer>
                    <span>{nota}</span>
             </footer>   
        </div>    
    );
}

export default Accomodation;