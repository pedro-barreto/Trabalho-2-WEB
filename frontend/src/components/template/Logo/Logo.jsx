import './Logo.css'
import React from 'react'
import logo from '../../../assets/images/logo.png'
import {Link} from 'react-router-dom'

const props = () =>

    <aside className='logo'>

        <Link to="/inicio" className='logo'>

            <img src={logo} alt="Imagem da logo" />

        </Link>

    </aside>

export default props