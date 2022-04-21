'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      deck_id: {
        references: {
          model: 'Decks',
          key: 'id',
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      card_id: {
        references: {
          model: 'Cards',
          key: 'id',
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      result: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rounds');
  }
};