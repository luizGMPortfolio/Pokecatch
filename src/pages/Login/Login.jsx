



import './Login.css'
import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/Icones/LogoPokecatch.png'

const Login = ({ setMenu }) => {

  const [change, setChange] = useState('cadastro');

  useEffect(() => {
    setMenu('')
  }, []);

  return (
    <div className='autentication'>
      {change === 'loading' &&
        <div className='loading'>
          <img src={logo} alt="" />
        </div>
      }
      {change === 'cadastro' &&
        <div className='cadastro'>
          <div className='login-img'>
            <img src={logo} alt="" />
          </div>
          <div className='login-inputs'>
            <input type="text" placeholder='Usuario' />
            <input type="text" placeholder='Senha' />
          </div>
          <div className='login-buttom'>
            <Link to='/Home'><button>Cadastrar</button></Link>
          </div>
          <div className='login-change'>
            <span onClick={() => setChange('login')}>Login</span>
          </div>
        </div>
      }
      {change === 'login' &&
        <div className='login'>
          <div className='login-img'>
            <img src={logo} alt="" />
          </div>
          <div className='login-inputs'>
            <input type="text" placeholder='Usuario' />
            <input type="text" placeholder='Senha' />
          </div>
          <div className='login-buttom'>
            <Link to='/Home'><button>Login</button></Link>
          </div>
          <div className='login-change'>
            <span onClick={() => setChange('cadastro')}>Cadastrar</span>
          </div>
        </div>

      }

    </div>



  )
}

export default Login