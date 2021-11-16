import { Button } from '../components/Button/index';

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
            </main>
        </div>
    );
}