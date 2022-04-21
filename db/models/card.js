'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Round, Deck}) {
      Card.hasMany(Round, { foreignKey: 'card_id' });
      Card.belongsTo(Deck, { foreignKey: 'deck_id' });
    }
  }
  Card.init({
    deck_id: {
      references: {
        model: 'Deck',
        key: 'id',
      },
    allowNull: false,
    type: DataTypes.INTEGER
  },
    question: {
    allowNull: false,
    type: DataTypes.TEXT
  },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    } }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};