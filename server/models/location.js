'use strict';
module.exports = function(sequelize, DataTypes) {
  const Location = sequelize.define('Location', {
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    getterMethods: {
      _type () {
        return this._modelOptions.name.singular.toLowerCase()
      }
    },
    classMethods: {
    }
  });
  Location.associate = (models) => {
    Location.hasMany(models.Node, { as: 'nodes' });
  };
  return Location;
};