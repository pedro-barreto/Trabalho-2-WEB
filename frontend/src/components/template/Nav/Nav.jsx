import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

const props = () =>

    <aside className='menu-area'>

        <nav className='menu'>

            <Link to='/'>

                <i className='fa fa-home'> Inicio</i>

            </Link>
            <Link to='/cadastro-aluno'>

                <i className='fa fa-user'> Cadastrar Aluno</i>

            </Link>
            <Link to='/sobre-nos'>

                <i className='fa fa-info'> Sobre nós</i>

            </Link>

        </nav>

    </aside>

export default props