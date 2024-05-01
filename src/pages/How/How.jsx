import './How.css'
import backcard from '../../assets/Backgrounds/backcard.png'
import { useEffect } from 'react'

const How = ({ setMenu }) => {


  useEffect(() => {
    setMenu('How')
  }, []);


  return (
    <div className='How'>
      <div className='title'>
        <h3>Quem é esse</h3>
        <h1>Pokemon?</h1>
      </div>
      <div className='cardHow'>
        <img src={backcard} alt="" />
      </div>
      <div className='choises'>
        <ul>
          <li>Pikachu</li>
          <li>Kadabra</li>
          <li>Sprigatito</li>
          <li>Banette</li>
        </ul>
      </div>
    </div>
  )
}

export default How