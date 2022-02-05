import Aluno from '../models/Aluno'

class AlunosController{

    async index(req, res){

        try{

            const data = await Aluno.findAll({

                limit: 1000

            })

            return res.json(data)

        }catch(e){

            console.log('Erro ao conectar: ' + e)

        }

    }

    async show(req, res){

        try{

            const id = parseInt(req.params.id)
            const aluno = await Aluno.findByPk(id)
            const  status = aluno ? 200:404

            return res.status(status).json(aluno)

        }catch(e){

            console.log('Erro ao exibir: ' + e)

        }


    }

    async create(req, res){

        try {
            
            const {nome, responsavel, sexo, nascimento, cpf, rg, serie, pais, estado, cidade, bairro, rua,n_casa, telefone, celular, email, status} = req.body
            const novoAluno = await Aluno.create({

                nome, responsavel, sexo, nascimento, cpf, rg, serie, pais, estado, cidade, bairro, rua, n_casa, telefone, celular, email, status

            })
            
            return res.status(201).json(novoAluno)

        } catch (e) {
            
            console.log('Erro ao criar: ' + e)

        }

    }

    async update(req, res){

        try {

            const id = parseInt(req.params.id)
            const {nome, responsavel, sexo, nascimento, cpf, rg, serie, pais, estado, cidade, bairro, rua,n_casa, telefone, celular, email, status} = req.body
            const novoStatus = id >= 0 ? 200:400

            const aluno = await Aluno.findByPk(id)
            const novoAluno = await aluno.update({

                nome, responsavel, sexo, nascimento, cpf, rg, serie, pais, estado, cidade, bairro, rua,n_casa, telefone, celular, email, status

            })

            return res.status(novoStatus).json(novoAluno)
            
        } catch (e) {
            
            console.log('Erro ao editar: ' + e)

        }

    }

    async destroy(req, res){

        try {

            const id = parseInt(req.params.id)
            const aluno = await Aluno.findByPk(id)
            const status = id >= 0 ? 200:404

            aluno.destroy()
            return res.status(status).json()
            
        } catch (e) {
            
            console.log('Erro ao excluir: ' + e)

        }

    }

}

export default new AlunosController()