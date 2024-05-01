import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimateRoutes from './components/AnimateRoutes.jsx'
import Header from './pages/Header/Header.jsx'
import { useState } from 'react'

function App() {

  const [menu, setMenu] = useState('Home');
  return (
    <div className='App'>
      <Router>
      <Header menu={menu} setMenu={setMenu}/>
        <AnimateRoutes setMenu={setMenu}/>
      </Router>
    </div>
  )
}

export default App