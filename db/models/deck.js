'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Round,Card}) {
      Deck.hasMany(Round, { foreignKey: 'deck_id' });
      Deck.hasMany(Card, { foreignKey: 'deck_id' });
    }
  }
  Deck.init({
    allowNull: false,
    theme: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};