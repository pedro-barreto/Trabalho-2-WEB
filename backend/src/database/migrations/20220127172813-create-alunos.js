'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('alunos', {

      id: {

        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true


      },

      nome: {

        type: Sequelize.STRING,
        allowNull: false

      },

      responsavel: {

        type: Sequelize.STRING,
        allowNull: false

      },

      sexo: {

        type: Sequelize.ENUM('M', 'F', 'O'),
        allowNull: false

      },

      nascimento: {

        type: Sequelize.STRING,
        allowNull: false

      },

      cpf: {

        type: Sequelize.STRING,
        allowNull: false,
        unique: true

      },

      rg: {

        type: Sequelize.STRING,
        allowNull: false,
        unique: true

      },

      serie: {

        type: Sequelize.INTEGER,
        allowNull: false

      },

      pais: {

        type: Sequelize.STRING,
        allowNull: false

      },

      estado: {

        type: Sequelize.STRING,
        allowNull: false

      },

      cidade: {

        type: Sequelize.STRING,
        allowNull: false

      },

      bairro: {

        type: Sequelize.STRING,
        allowNull: false

      },

      rua: {

        type: Sequelize.STRING,
        allowNull: false

      },

      n_casa: {

        type: Sequelize.STRING,
        allowNull: false

      },

      telefone: {

        type: Sequelize.STRING

      },

      celular: {

        type: Sequelize.STRING,
        allowNull: false

      },

      email: {

        type: Sequelize.STRING,
        allowNull: false

      },

      created_at: {

        type: Sequelize.DATE,
        allowNull: false

      },

      updated_at: {

        type: Sequelize.DATE,
        allowNull: false

      },

      status: {

        type: Sequelize.ENUM('ACTIVE', 'ARCHIVED'),
        allowNull: false,
        defaultValue: 'ACTIVE'

      }

    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
