import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Airbnb } from '../dtos/AirbnbDtos';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

export function Header() {
    const [dados, setDados] = useState<Airbnb[]>();
    const [dadosBuscados, setDadosBuscados] = useState<Airbnb[]>();
    const url = 'http://localhost:1234/api/reserva/listar';
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(false);

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

const buscarDados = (value: string) => {

    if (value) {
        const dadosEncontrados = dados!.filter(dados => dados.cidade === value);
        setDadosBuscados(dadosEncontrados);
    }
    else {
        setDadosBuscados(dados);
    }

}

    return (
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
                                    <input type="text" onChange={
                                        (e) => {
                                            const { value } = e.target;
                                            buscarDados(value);
                                        }} placeholder="Pesquise o local" />
                                    <FontAwesomeIcon className="icon"
                                        size='1x'
                                        color='#FF385C'
                                        icon={faSearch}
                                    />
                                </Link>
                            </li>
                            <li id="host">
                                <Link to="/registrationUser">
                                    Seja um anfitrição
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
            </header>
    );
}