import React from 'react';

import './styleAccomodation.scss';

type AccomodationProps = {
   
    nome: string;
    descricao: string;
    image: string;
    nota: string;
}

export function Accomodation(props: AccomodationProps) {
    return (
        <div className="accomodation">
            <header>
               <img src={props.image} alt="Foto da acomodação"/>
                <p>{props.nome}</p>
                <span>{props.descricao}</span>
            </header>    
              <footer>
                    <span>{props.nota}</span>
             </footer>   
        </div>    
    );
}

