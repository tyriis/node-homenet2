'use strict';
module.exports = function(sequelize, DataTypes) {
  const SensorAction = sequelize.define('SensorAction', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    getterMethods: {
      _type () {
        return this._modelOptions.name.singular.toLowerCase()
      }
    },
    classMethods: {
    }
  });
  SensorAction.associate = (models) => {
    SensorAction.belongsTo(models.Sensor);
  };
  return SensorAction;
};