'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    static associate(models) {
    }
  }
  Event.init({
    event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    name: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE,
        primaryKey: true,
        autoIncrement: true
    },
    start_time: {
        type: DataTypes.DATE,
        primaryKey: true,
        autoIncrement: true 
    },
    end_time: {
        type: DataTypes.DATE,
        primaryKey: true,
        autoIncrement: true 
    }
  }, {
    sequelize,
    modelName: 'Event',
    tableName:'events'
  });
  return Event;
};