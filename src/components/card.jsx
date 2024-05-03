import './card.css'
import backcard from '../assets/Backgrounds/backcard.png'

function card({ name, img, types, num, Style }) {
  return (
    <>
      {!Style &&
        <div className='card'>
          <div className='name'>
            <h3 style={{ fontSize: `${name > 12 ? '11px' : '15px'}` }}>{name}</h3>
          </div>
          <div className='img'>
            <img src={img} alt="" />
          </div>
          <div className='types'>
            {types && types.map(type => (
              <div className={`type1 ${type.type.name}`}>
                <span>{type.type.name}</span>
              </div>
            ))}
          </div>
          <div className='num'>
            <span>N°{num}</span>
          </div>
        </div>
      }
      {Style &&
        <div className='backcard'>
          <img src='https://lh5.googleusercontent.com/proxy/WthF44jrTiMwG3d5PGLmCsA_-EUHXiyfC0MYx5zPKqyqoNDBhSQm_iMaQNIbIAdBvvaj-002c71zlR8CDYnSY35MtU2XB9wct66pV9VNWSvjhIoXeVEBjYv3jMVOhropyAu87Bd5' alt="" />
        </div>
      }
    </>


  )
}

export default card