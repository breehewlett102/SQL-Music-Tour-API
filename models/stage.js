'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage.init({
    stage_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    stage_name: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    }
  }, {
    sequelize,
    modelName: 'Stage',
    tableName:'stages'
  });
  return Stage;
};
