import { useState } from 'react';
import { Button } from '../components/Button';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';



import '../assets/styles/registrationAirbnbStyle.scss'

export function RegistrationAirbnb() {

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [sumario, setSumario] = useState('');
    const [espaco, setEspaco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [nota, setNota] = useState('');
    const [acesso, setAcesso] = useState('');
    const [regrasDaCasa, setRegrasDaCasa] = useState('');
    const [tipoDePropriedade, setTipoDePropriedade] = useState('');
    const [precoPorNoite, setPrecoPorNoite] = useState('');
    const [minimoDeNoites, setMinimoDeNoites] = useState('');
    const [maximoDeNoites, setMaximoDeNoites] = useState('');
    const [numDeBanheiros, setNumDeBanheiros] = useState('');
    const [numDeQuartos, setNumDeQuartos] = useState('');
    const [numDeHospedes, setNumDeHospedes] = useState('');
    const [numDeCamas, setNumDeCamas] = useState('');
    const [imagem, setImagem] = useState('');
    const [teste, setTeste] = useState('');










    const api = axios.create({
        baseURL: 'http://localhost:1234/api',
        timeout: 1000,
    }
    );
    // const cookies = new Cookies();
    const navigate = useNavigate();

    return (
        <div className="user-auth">

            <h1>Cadastre seu imovel</h1>
            <form autoComplete="nope">
                <div className="form-control">
                    <label htmlFor="id">Id</label>
                    <input id="id" type="text" name="id" autoComplete="off" value={id} onChange={e => {
                        setId(e.target.value);
                    }} placeholder="Informe seu nome de usuario" />

                    <label htmlFor="nome">Nome do imóvel</label>
                    <input id="nome" type="text" name="nome" autoComplete="off" value={nome} onChange={e => {
                        setNome(e.target.value);
                    }} placeholder="Ex: Apartamento 2 quartos em Copacabana" />

                    <label htmlFor="cidade">Cidade</label>
                    <input id="cidade" type="text" name="cidade" autoComplete="off" value={cidade} onChange={
                        e => setCidade(e.target.value)
                    } placeholder="Informe a cidade" />

                    <label htmlFor="sumario">Sumario</label>
                    <textarea name="sumario" id="sumario" cols={30} rows={10} value={sumario} onChange={
                        e => setSumario(e.target.value)
                    } placeholder="Escreva uma breve descrição do imóvel, seus itens e benefícios" />

                    <label htmlFor="descricao">Descrição</label>
                    <textarea name="descricao" id="descricao" cols={30} rows={10} value={descricao} onChange={
                        e => {
                            setDescricao(e.target.value);
                        }
                    } placeholder="Descreva em detalhes seu imoóvel, itens e benefícios" />

                    <label htmlFor="nota">Nota</label>
                    <input id="nota" type="text" name="nota" value={nota} onChange={
                        e => {
                            setNota(e.target.value);
                        }
                    } placeholder="Informe sua senha" />

                    <label htmlFor="acesso">Acesso</label>
                    <input id="acesso" type="text" name="acesso" value={acesso} onChange={
                        e => {
                            setAcesso(e.target.value);
                        }
                    } placeholder="Que compartimentos do imóvel seu(s) hóspede(s) terá(ão) acesso? " />

                    <label htmlFor="regrasDaCasa">Regras da casa</label>
                    <input id="regrasDaCasa" type="text" name="regrasDaCasa" value={regrasDaCasa} onChange={
                        e => {
                            setRegrasDaCasa(e.target.value);
                        }
                    } placeholder="Informe as regras da casa" />
                    <label htmlFor="tipoDePropriedade">Tipo de propriedade</label>
                    <div className="form-radio">
                        <input type="radio" id="Apartment" name="tipoDePropriedade" value="Apartment" onChange={
                            e => {
                                e.preventDefault();
                                setTipoDePropriedade(e.target.value);
                            }
                        } /><p>Apartament</p>

                        <input type="radio" id="House" name="tipoDePropriedade" value="House" onChange={
                            e => {
                                setTipoDePropriedade(e.target.value);
                            }
                        } /><p>House</p>
                    </div>



                    <label htmlFor="precoPorNoite">Preço por noite</label>
                    <input id="precoPorNoite" type="text" name="precoPorNoite" value={precoPorNoite} onChange={
                        e => {
                            setPrecoPorNoite(e.target.value);
                        }
                    } placeholder="R$" />

                    <label htmlFor="minimoDeNoites">Minimo de noites</label>
                    <input id="minimoDeNoites" type="text" name="minimoDeNoites" value={minimoDeNoites} onChange={
                        e => {
                            setMinimoDeNoites(e.target.value);
                        }
                    } />

                    <label htmlFor="maximoDeNoites">Máximo de noites</label>
                    <input id="maximoDeNoites" type="text" name="maximoDeNoites" value={maximoDeNoites} onChange={
                        e => {
                            setMaximoDeNoites(e.target.value);
                        }
                    } />

                    <label htmlFor="numDeBanheiros">Numero de banheiros</label>
                    <input id="numDeBanheiros" type="text" name="numDeBanheiros" value={numDeBanheiros} onChange={
                        e => {
                            setNumDeBanheiros(e.target.value);
                        }
                    } />

                    <label htmlFor="numDeQuartos">Numero de Quartos</label>
                    <input id="numDeQuartos" type="text" name="numDeQuartos" value={numDeQuartos} onChange={
                        e => {
                            setNumDeQuartos(e.target.value);
                        }
                    } />

                    <label htmlFor="numDeHospedes">Numero de Hóspedes</label>
                    <input id="numDeHospedes" type="text" name="numDeHospedes" value={numDeHospedes} onChange={
                        e => {
                            setNumDeHospedes(e.target.value);
                        }
                    } />

                    <label htmlFor="numDeCamas">Numero de Camas</label>
                    <input id="numDeCamas" type="text" name="numDeCamas" value={numDeCamas} onChange={
                        e => {
                            setNumDeCamas(e.target.value);
                        }
                    } />

                    <label htmlFor="imagem">Imagem</label>
                    <input id="imagem" type="text" name="imagem" value={imagem} onChange={
                        e => {
                            setImagem(e.target.value);
                        }
                    } />

                </div>

                <div className="button-auth">
                    <Button onClick={
                        e => {
                            e.preventDefault();
                            console.log(teste);
                            api.post('/reserva/cadastrar',
                                {
                                    id: id,
                                    nome: nome,
                                    cidade: cidade,
                                    sumario: sumario,
                                    espaco: espaco,
                                    descricao: descricao,
                                    nota: nota,
                                    acesso: acesso,
                                    regrasDaCasa: regrasDaCasa,
                                    tipoDePropriedade: tipoDePropriedade,
                                    precoPorNoite: precoPorNoite,
                                    minimoDeNoites: minimoDeNoites,
                                    maximoDeNoites: maximoDeNoites,
                                    numDeBanheiros: numDeBanheiros,
                                    numDeQuartos: numDeQuartos,
                                    numDeHospedes: numDeHospedes,
                                    numDeCamas: numDeCamas,
                                    imagem: imagem,
                                }
                            ).then(response => {
                                // cookies.set('authorization-token', response.data, { path: '/' })
                                if (response.status === 200) {
                                    navigate('/');
                                }

                            });
                        }
                    }>
                        Cadastrar Airbnb
                    </Button>

                </div>
            </form >
        </div >
    )
}
