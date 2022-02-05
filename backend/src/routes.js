import { Router } from 'express'

const routes = new Router()

import alunos from './app/controllers/AlunosController'

routes.get('/alunos', alunos.index)
routes.get('/alunos/:id', alunos.show)
routes.post('/alunos', alunos.create)
routes.put('/alunos/:id', alunos.update)
routes.delete('/alunos/:id', alunos.destroy)

export default routes