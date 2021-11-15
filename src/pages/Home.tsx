import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import logo  from '../assets/images/logo.png';

import '../assets/styles/Home.module.scss';

 export function Home() {
    return (
       <div id="page-home">
          <header>
             <div className="content">
               <img src={logo} alt="Logo" title="Airbnb"/> 
               <nav className="header-container">
                  <ul>
                    <li id="search">
                      <a href="/search">
                        <input placeholder="Pesquise o local"/>
                      </a>
                    </li>
                    <li>
                      <a href="/host">Seja um anfitrião</a>
                    </li>
                    <li>
                      <a href="/user">
                        <FontAwesomeIcon 
                          icon={faUserCircle}
                          className="user"
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

