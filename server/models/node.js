'use strict';
module.exports = function(sequelize, DataTypes) {
  const Node = sequelize.define('Node', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deviceId: {
      type: DataTypes.STRING,
      unique: true
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
  Node.associate = function (models) {
    Node.belongsTo(models.Location);
    Node.hasMany(models.Sensor, { as: 'sensors' })
  };
  return Node;
};