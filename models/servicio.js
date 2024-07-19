'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.servicio.belongsToMany(models.cliente, { through:'clientexservicios', foreignKey: "codigo_serv" } );
    }
  }
  servicio.init({
    descripcion: DataTypes.STRING,
    precio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'servicio',
    tableName: 'servicios',
  });
  return servicio;
};