import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbarmenu = () => {
    return (
        <>
        <div className="navbar">
        <NavLink exact activeClassName="active_class" to = '/' > </NavLink>
        <NavLink exact activeClassName ="active_class" to = '/Piechart'></NavLink>
         </div>
        </>
    )
}

export default Navbarmenu
