

import Login from '../pages/Login/Login.jsx'
import Home from '../pages/Home/Home.jsx'
import Location from '../pages/Home/Locations.jsx'
import How from '../pages/How/How.jsx'
import Pokedex from '../pages/Pokedex/Pokedex.jsx'
import Use from '../pages/Use/Use.jsx'

import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'



function AnimateRoutes({setMenu}) {

    const [change_page, setChange_page] = useState('');
    const [location, setLocation] = useState('');

    function Change_page(page) {
        setChange_page(page)
    }
    function Change_location(location) {
        setLocation(location)
    }

    return (

        <Routes>
            <Route path='/' exact element={<Login setMenu={setMenu}/>} />
            <Route path='/Home' exact element={<Home change_page={change_page} setMenu={setMenu} Change_location={Change_location}/>} />
            <Route path='/How' exact element={<How Change_page={Change_page} setMenu={setMenu}/>} />
            <Route path='/Pokedex' exact element={<Pokedex Change_page={Change_page} setMenu={setMenu}/>} />
            <Route path='/Use' element={<Use Change_page={Change_page} setMenu={setMenu}/>} />
            <Route path='/Location' element={<Location location={'bgfloresta'} setMenu={setMenu}/>} />
            <Route path='/Location1' element={<Location location={'bgcaverna'} setMenu={setMenu}/>} />
            <Route path='/Location2' element={<Location location={'bgpraia'} setMenu={setMenu}/>} />
            <Route path='/Location3' element={<Location location={'bgmontanha'} setMenu={setMenu}/>} />
            <Route path='/Location4' element={<Location location={'bgdeserto'} setMenu={setMenu}/>} />
            <Route path='/Location5' element={<Location location={'bgvulcão'} setMenu={setMenu}/>} />
            <Route path='/Location6' element={<Location location={'bgasombrado'} setMenu={setMenu}/>} />
        </Routes>

    )
}

export default AnimateRoutes