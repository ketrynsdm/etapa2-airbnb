import React from 'react';

import './styleAccomodation.scss';
import { Airbnb } from '../dtos/AirbnbDtos'
type AccomodationProps = {

    airbnbAccomodation: Airbnb;
    
}

export function Accomodation(props: AccomodationProps) {
    return (
        
        <div className="accomodation">
            <div></div>
            <img src={props.airbnbAccomodation.imagem} alt="Foto da acomodação" />
            <header>
                <div>
                    <p>{props.airbnbAccomodation.tipoDePropriedade} in {props.airbnbAccomodation.cidade} </p>
                    <h2>{props.airbnbAccomodation.nome}</h2>
                    <span>{props.airbnbAccomodation.numDeHospedes} hóspede(s)•
                        {props.airbnbAccomodation.numDeQuartos} quarto(s)•
                        {props.airbnbAccomodation.numDeCamas} cama(s)•
                        {props.airbnbAccomodation.numDeBanheiros} banheiro(s)
                    </span>
                </div>
                <footer>
                    <p>★{props.airbnbAccomodation.nota}</p>
                    <p><strong>{props.airbnbAccomodation.precoPorNoite}</strong> / Noite</p>
                </footer>
            </header>

        </div>
    );
}

