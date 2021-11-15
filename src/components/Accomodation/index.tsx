import React from 'react';

import './style.module.scss';

export interface Accomodation {
    id: string;
    nome: string;
    sumario: string;
    descricao: string;
    regrasDaCasa: string;
}

interface AccomodationProps {
    accomodation: Accomodation;
}

const AccomodationItem: React.FC<AccomodationProps> = ({ accomodation }) => {
    return (
        <article className="accomodation_item">
            <header>
                <div>
                    <strong>{accomodation.nome}</strong>
                    <span>{accomodation.sumario}</span>
                </div>
            </header>

            <p>{accomodation.descricao}</p>
        </article>    
    );
}

export default AccomodationItem;