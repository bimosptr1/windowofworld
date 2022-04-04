'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mybooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mybooks.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "userId",
        },
      });
      mybooks.belongsTo(models.books, {
        as: "books",
        foreignKey: {
          name: "booksId",
        },
      });
    }
  }
  mybooks.init({
    userId: DataTypes.INTEGER,
    booksId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mybooks',
  });
  return mybooks;
};