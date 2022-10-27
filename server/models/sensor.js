'use strict';
module.exports = function(sequelize, DataTypes) {
  const Sensor = sequelize.define('Sensor', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
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
  Sensor.associate = (models) => {
    Sensor.belongsTo(models.Node);
    Sensor.hasMany(models.SensorAction, { as: 'actions' })
  };
  return Sensor;
};