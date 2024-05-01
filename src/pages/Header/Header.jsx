import { Link } from "react-router-dom";
import './Header.css'
import { useState, useEffect } from 'react';

import world from '../../assets/Icones/world.png'
import interrogação from '../../assets/Icones/interrogação.png'
import pokedex from '../../assets/Icones/pokedex.png'
import usuario from '../../assets/Icones/usuario.png'

import pokebola from '../../assets/pokebolas/padão.svg'
import great from '../../assets/pokebolas/greatBall.svg'
import ultra from '../../assets/pokebolas/ultraBall.svg'
import quick from '../../assets/pokebolas/quickBall.svg'
import timer from '../../assets/pokebolas/timerBall.svg'
import premium from '../../assets/pokebolas/premiumBall.svg'
import luxury from '../../assets/pokebolas/luxuryBall.svg'
import master from '../../assets/pokebolas/masterBall.svg'
import cards from '../../assets/Icones/cards.png'
import items from '../../assets/Icones/items.png'

const Header = ({ menu, setMenu }) => {

    const [Catchmenu, setCatchmenu] = useState('')


    return (
        <div className='header'>
            {menu != 'location' &&
                <menu className='main'>
                    <Link to='/' onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}><li><img src={world} alt="" /></li></Link>
                    <Link to='/How' onClick={() => setMenu('How')} className={menu === 'How' ? 'active' : ''}><li><img src={interrogação} alt="" /></li></Link>
                    <Link to='/Pokedex' onClick={() => setMenu('Pokedex')} className={menu === 'Pokedex' ? 'active' : ''}><li><img src={pokedex} alt="" /></li></Link>
                    <Link to='/Use' onClick={() => setMenu('Use')} className={menu === 'Use' ? 'active' : ''}><li><img src={usuario} alt="" /></li></Link>
                </menu>
            }
            {menu === 'location' &&
                <menu className={`catch ${Catchmenu != ''? 'catchback': ''}`}>
                    <li onClick={() => setCatchmenu(Catchmenu === 'pokebolas' ? '':'pokebolas')} className={`pokeball ${Catchmenu === 'pokebolas'? 'cliked': ''}`}>
                        <img src={pokebola} alt="" />
                    </li>
                    <li onClick={() => setCatchmenu(Catchmenu === 'cards' ? '':'cards')} className={`card ${Catchmenu === 'cards'? 'cliked': ''}`}>
                        <img src={cards} alt="" />
                    </li>
                    <li>
                        <img src={items} alt="" />
                    </li>
                </menu>
            }
            {Catchmenu === 'pokebolas' && 
                <div className="pokeballs">
                    <li><img src={pokebola} alt="" /></li>
                    <li><img src={great} alt="" /></li>
                    <li><img src={ultra} alt="" /></li>
                    <li><img src={quick} alt="" /></li>
                    <li><img src={timer} alt="" /></li>
                    <li><img src={premium} alt="" /></li>
                    <li><img src={luxury} alt="" /></li>
                    <li><img src={master} alt="" /></li>
                </div>
            }


        </div>
    )
}


export default Header
