import { Link } from 'react-router-dom';

import { Accomodation } from '../components/Accomodation';


import logo  from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

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
                            <Link to="#">
                                <input placeholder="Pesquise o local"/>
                                <FontAwesomeIcon
                                    size='1x'
                                    color='#FF385C'
                                    icon={faSearch}
                                />
                            </Link>
                         </li>
                         <li id="host">
                            <Link to="#">
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
                     </ul>
                     
                 </nav>
              </div>
            </header>

            <main>
                <div className="home-title">
                    <h1>Acomodações</h1>
                </div>
                <Accomodation
                    image=''
                    nome=''
                    descricao=''
                    nota=''
                />
                
            </main>
        </div>
    );
}