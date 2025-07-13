import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
    return (
        <div className='container-fluid text-center'>
            <Link to={'/'} ><img className="logo" src='public\img\Pt-logo.png' /></Link>
        </div>

    )
}

export default MainNav