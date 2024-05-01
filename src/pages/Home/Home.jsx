import './Home.css'
import { useEffect } from 'react'
import { Link } from "react-router-dom";

import pinheiro from '../../assets/Icones/pinheiro.png'
import caverna from '../../assets/Icones/caverna.png'
import praia from '../../assets/Icones/praia.png'
import montanha from '../../assets/Icones/montanha.png'
import cacto from '../../assets/Icones/cacto.png'
import vulção from '../../assets/Icones/vulção.png'
import Hanted from '../../assets/Icones/Hanted.png'

const Home = ({ setMenu, Change_location }) => {


  useEffect(() => {
    setMenu('Home');
  }, []);


  return (
    <div className='Home'>
      <div className='Contagem'>
        <span className='text'>Next update</span>
        <span className='time'>03:20:05</span>
      </div>
      <div className='Locais'>
        <ul>
          <Link to='/Location'><li className='floresta' onClick={Change_location('bgfloresta')}> <img src={pinheiro} alt="" /> </li></Link>
          <Link to='/Location1'><li className='caverna' onClick={Change_location('bgcaverna')}><img src={caverna} alt="" /></li></Link>
          <Link to='/Location2'><li className='praia' onClick={Change_location('bgpraia')}><img src={praia} alt="" /></li></Link>
          <Link to='/Location3'><li className='montanha' onClick={Change_location('bgmontanha')}><img src={montanha} alt="" /></li></Link>
          <Link to='/Location4'><li className='deserto' onClick={Change_location('bgdeserto')}><img src={cacto} alt="" /></li></Link>
          <Link to='/Location5'><li className='vulção' onClick={Change_location('bgvulcão')}><img src={vulção} alt="" /></li></Link>
          <Link to='/Location6'><li className='asombrado' onClick={Change_location('bgasombrado')}><img src={Hanted} alt="" /></li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Home