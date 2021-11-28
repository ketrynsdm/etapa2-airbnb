import { Link } from 'react-router-dom';

import { Accomodation } from '../components/Accomodation';

import { Airbnb } from '../components/dtos/AirbnbDtos';
import { useEffect, useState } from "react";
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

import '../assets/styles/homeStyle.scss';


export function Home() {
    const [dados, setDados] = useState<Airbnb[]>();
    const [cidade, setCidade] = useState('');
    const [preco, setPreco] = useState('0');
    const [tipoDePropriedade, setTipoDePropriedade] = useState('');
    const [dadosBuscados, setDadosBuscados] = useState<Airbnb[]>();
    const url = 'http://localhost:1234/api/reserva/listar';
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(false);
    const api = axios.create({
        baseURL: 'http://localhost:1234/api',
        timeout: 1000,
    }
    );


    useEffect(() => {
        async function consultarAirbnb() {
            setErro(false);
            setCarregando(true);
            try {
                const resultado = await fetch(url);
                if (resultado.ok) {
                    const dados: Airbnb[] = await resultado.json();
                    setDados(dados);
                    setDadosBuscados(dados)
                } else {
                    setErro(true);
                }
            } catch (error) {
                setErro(true);
            }
            setCarregando(false);
        }
        consultarAirbnb();
    }, [url]);



    return (
        <div id="page-home">
            <header>
                <div className="content">
                    <img src={logo} alt="Logo" title="Airbnb" />
                    <nav className="nav-container">
                        <ul>
                            <li id="host">
                                <Link to="/registrationAirbnb">
                                    cadastrar airbnb
                                </Link>
                            </li>
                            <li id="search">
                                <Link to="#">
                                    <input type="text" value={cidade} onChange={
                                        (e) => {
                                            setCidade(e.target.value);
                                            if (cidade.length >= 1) {
                                                setDadosBuscados(dados);
                                            }
                                        }} placeholder="Pesquise o local" />
                                </Link>


                            </li>

                            <li id="searchButton" onClick={e => {
                                e.preventDefault();
                                api.get(`/buscar/cidade/${cidade}`).then(response => setDadosBuscados(response.data));
                            }}>

                                <FontAwesomeIcon className="icon"
                                    size='1x'
                                    color='#FF385C'
                                    icon={faSearch}
                                />

                            </li>
                            <li id="host">
                                <Link to="/registrationUser">
                                    Seja um anfitrião
                                </Link>
                            </li>
                            <li id="user">
                                <Link to="/auth">
                                    <FontAwesomeIcon
                                        size='2x'
                                        color='#B0B0B0'
                                        icon={faUserCircle}
                                    />
                                </Link>
                            </li>
                            <div></div>
                        </ul>

                    </nav>
                </div>
                <div className="content-filter">
                    <div className="div-filter">
                        <p><strong>Preço:</strong> R$0</p>
                        <input type="range" min="0" max="500" step="10" name="preco" id="preco" onChange={
                            e => {
                                setPreco(e.target.value);
                            }
                        } />
                        <p>R${preco}</p>
                        <p><strong>Tipo de imóvel:</strong></p>
                        <select name="tipoDePropriedade" id="tipoDePropriedade" onChange={
                            e => {
                                setTipoDePropriedade(e.target.value);
                            }
                        }>
                            <option value="---">---</option>
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>

                        </select>

                    </div>

                    <button onClick={
                        e => {
                            e.preventDefault();
                            console.log(tipoDePropriedade);
                            api.get(`/filtro/${preco}/${tipoDePropriedade}`).then(response => setDadosBuscados(response.data));
                        }
                    }>
                        Filtrar
                    </button>
                </div>
            </header>

            <main>
                <div className="home-title">
                    <h1>Acomodações</h1>
                </div>
                {erro && <div><h1>Ocorreu um erro!</h1></div>}
                {carregando ? (
                    <div><h1>Carregando...</h1></div>
                ) : (
                    dados && (
                        <>
                            <br />
                            <div>
                                {dadosBuscados!.map(airbnb => (<Accomodation airbnbAccomodation={airbnb} />))}
                            </div>

                        </>
                    )

                )}

            </main>
        </div>
    );
}
