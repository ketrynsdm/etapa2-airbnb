import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import logo  from '../../assets/images/logo.png';

import style from './style.module.scss';


function Header() {
    
    return (
        <div className={style.component_home}>
                <header>
                    <div className={style.content}>
                            <img src={logo} alt="Logo" title="Airbnb"/> 
                        <nav className={style.header_container}>
                            <ul>
                            <li id="search">
                                <a href="/search">
                                        <input placeholder="Pesquise o local"/>
                                </a>
                                </li>
                            <li>
                                <a href="/host">Seja um anfitrião
                                </a>
                            </li>
                            <li>
                                <a href="/user">
                                    <FontAwesomeIcon 
                                        icon={faUserCircle}
                                        className="user"
                                    ></FontAwesomeIcon>
                                </a>
                            </li>
                            
                            </ul>
                        </nav>
                     </div>
                </header>
        </div>
    );
}

export default Header;