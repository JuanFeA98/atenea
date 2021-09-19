import React from 'react'

import '../styles/header.css'
import Logo from '../images/partenon.svg' 

export default function Header() {
    return (
        <div className='Header'>
            <img src={Logo} />
            <h1>Atenea</h1>
        </div>
    )
}
