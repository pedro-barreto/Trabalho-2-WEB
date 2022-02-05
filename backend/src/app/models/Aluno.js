import Sequelize, {Model} from 'sequelize'

class Aluno extends Model{

    static init(sequelize){

        super.init({

            nome: Sequelize.STRING,
            responsavel: Sequelize.STRING,
            sexo: Sequelize.ENUM('M','F','O'),
            nascimento: Sequelize.STRING,
            cpf: Sequelize.STRING,
            rg: Sequelize.STRING,
            serie: Sequelize.INTEGER,
            pais: Sequelize.STRING,
            estado: Sequelize.STRING,
            cidade: Sequelize.STRING,
            bairro: Sequelize.STRING,
            rua: Sequelize.STRING,
            n_casa: Sequelize.STRING,
            telefone: Sequelize.STRING,
            celular: Sequelize.STRING,
            email: Sequelize.STRING,
            status: Sequelize.ENUM('ACTIVE','ARCHIVED')

        },{

            sequelize

        })

    }
    
}

export default Aluno