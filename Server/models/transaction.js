'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "userid",
        },
      });
    }
  }
  transaction.init({
    phoneNumber: DataTypes.INTEGER,
    transferProof: DataTypes.STRING,
    remainingActive: DataTypes.INTEGER,
    userStatus: DataTypes.STRING,
    paymentStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};