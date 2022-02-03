import React from 'react'
import {Route, Switch, Redirect} from 'react-router'

import Home from '../components/inicio/Inicio'
import AlunoCadastro from '../components/aluno/AlunoCadastro'
import SobreNos from '../components/sobre/SobreNos'

const props = () => 

    <Switch>

        <Route exact path='/inicio' component={Home}/>
        <Route path='/cadastro-aluno' component={AlunoCadastro}/>
        <Route path='/sobre-nos' component={SobreNos}/>
        <Redirect from='*' to='/inicio'/>

    </Switch>

export default props