'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Deck,Card}) {
      Round.belongsTo(User, { foreignKey: 'user_id' });
      Round.belongsTo(Deck, { foreignKey: 'deck_id' });
      Round.belongsTo(Card, { foreignKey: 'card_id' });
    }
  }
  Round.init({
    user_id: {
      references: {
        model: 'User',
        key: 'id',
      },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    deck_id: {
      references: {
        model: 'Deck',
        key: 'id',
      },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    card_id: {
      references: {
        model: 'Card',
        key: 'id',
      },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    result: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
},
  {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};