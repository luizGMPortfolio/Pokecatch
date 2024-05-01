import './Location.css'
import { useEffect } from 'react'
import { Link } from "react-router-dom";

const Locations = ({ location, setMenu }) => {


  useEffect(() => {
    setMenu('location');
  }, []);


  return (
    <div className={`location ${location}`}>
      <header>
        <div className='ContagemLocation'>
          <span className='text'>Next update</span>
          <span className='time'>03:20:05</span>
        </div>
        <div className='back'>
          <Link to='/'><i class="fa-solid fa-arrow-turn-down fa-rotate-90"></i></Link>
        </div>
      </header>
      <div className='possibilities'>

        <div className="list">
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'></img>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png" alt="" />
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png" alt="" />
        </div>
      </div>
      <div className='enconter'>
        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png'></img>
      </div>

    </div>
  )
}

export default Locations