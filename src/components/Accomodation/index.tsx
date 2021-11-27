import React from 'react';

import './styleAccomodation.scss';
import { Airbnb } from '../dtos/AirbnbDtos'
import { useState } from 'react';
import { Button } from '../Button'
type AccomodationProps = {

    airbnbAccomodation: Airbnb;
    
}

export function Accomodation(props: AccomodationProps) {

    const [dataCheckin, setDataCheckin] = useState('');
    const [dataCheckout, setDataCheckout] = useState('');
    const [somaDias, setSomaDias] = useState(Number);
    //const [valorTotal, setValorTotal] = useState();

    const checkinCheckout = (dataCheckin:number, dataCheckout:number) => {
        if(dataCheckin < dataCheckout){
            const somaDias = dataCheckout - dataCheckin;
            setSomaDias(somaDias);
            alert(somaDias);
        }
    }
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
                    <label>Data de checkin:</label>
                    <input type="date" name="data" value={dataCheckin} onChange={
                        e => setDataCheckin(e.target.value)}/>
                    <label>Data de checkout:</label>
                    <input type="date" name="data" value={dataCheckout} onChange={
                        e => setDataCheckout(e.target.value)}/> 
                    
                    <Button onClick={() => checkinCheckout}>Pesquisar</Button>
                </div>
                <footer>
                    <p>★{props.airbnbAccomodation.nota}</p>
                    <p><strong>{props.airbnbAccomodation.precoPorNoite}</strong> / Noite</p>
                </footer>
            </header>

        </div>
    );
}

