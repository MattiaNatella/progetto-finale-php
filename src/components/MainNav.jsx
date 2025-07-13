import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
    return (
        <div className='container-fluid text-center'>
            <Link to={'/'} ><img className="logo" src='public\img\Pt-logo.png' /></Link>
            <a href="http://127.0.0.1:8000/" target="_blank" rel="noopener noreferrer">Vai al Back Office</a>
        </div>

    )
}

export default MainNav