import { Button } from '../components/Button/index';
import { Accomodation } from '../components/Accomodation';

import logo  from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import '../assets/styles/homeStyle.scss';


export function Home() {
    

    return (
        <div id="page-home">
            <header>
               <div className="content"> 
                 <img src={logo} alt="Logo" title="Airbnb"/>
                 <nav className="nav-container">
                     <ul>
                         <li id="search">
                            <a href="#">
                                <input placeholder="Pesquise o local"/>
                            </a>
                         </li>
                         <li id="host">
                            <a href="#">
                                Seja um anfitrição
                            </a>
                         </li>
                         <li id="user">
                            <a href="#">
                            <FontAwesomeIcon 
                                icon={faUserCircle}
                             />
                            </a>
                         </li>
                     </ul>
                     
                 </nav>
              </div>
            </header>

            <main>
                <div className="home-title">
                    <h1>Acomodações</h1>
                </div>
                <Accomodation
                    image='https://capricho.abril.com.br/wp-content/uploads/2017/12/airbnb.jpg?quality=85&strip=info&w=1024'
                    nome='Chalé'
                    descricao='Chalé na árvore'
                    nota='10'
                />
            </main>
        </div>
    );
}