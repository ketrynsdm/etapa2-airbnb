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
            <img src={props.image} alt="Foto da acomodação"/>
            <header>
              <div className="descriptionAccomodation">
                    <p>{props.nome}</p>
                    <span>{props.descricao}</span>
               </div>
            </header>    
            <footer>
               <span>{props.nota}</span>
            </footer>
        </div>    
    );
}

