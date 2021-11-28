import React from 'react';

import './styleAccomodation.scss';
import { Airbnb } from '../dtos/AirbnbDtos'
import { useState } from 'react';
type AccomodationProps = {

    airbnbAccomodation: Airbnb;
    
}

export function Accomodation(props: AccomodationProps) {

    const [dataCheckin, setDataCheckin] = useState('');
    const [dataCheckout, setDataCheckout] = useState('');
    const [menosDias, setMenosDias] = useState<number>(1);
    const dias = parseFloat(props.airbnbAccomodation.precoPorNoite);
    
    //const [valorTotal, setValorTotal] = useState();

    const checkinCheckout = (dataCheckin:string, dataCheckout:string) => {
        if(dataCheckin < dataCheckout){
            const dataUm = new Date(dataCheckout);
            const dataDois = new Date(dataCheckin);
            const auxiliar = ((dataUm.getTime() - dataDois.getTime()) / (24 * 3600 * 1000));
            if(auxiliar >= 0){
                setMenosDias(auxiliar);    
            }
            
            

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
                    
                    <button onClick={(e) => {e.preventDefault(); 
                        console.log(checkinCheckout(dataCheckin, dataCheckout)); console.log(dataCheckin); console.log(dataCheckout)}}>Pesquisar</button>
        
                </div>
                <footer>
                    <p>★{props.airbnbAccomodation.nota}</p>
                    <p><strong>R${( dias * menosDias)}</strong> / Noite(s)</p>
                </footer>
            </header>

        </div>
    );
}

