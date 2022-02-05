import Sequelize from 'sequelize'
import config from '../config/database'
import Aluno from '../app/models/Aluno'

const models = [Aluno]

class Database{
    constructor(){

        this.connection = new Sequelize(config)

        this.init()

    }

    init(){

        models.forEach(model => model.init(this.connection))

    }

}

export default new Database()