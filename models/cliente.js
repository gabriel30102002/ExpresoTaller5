'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.cliente.belongsToMany(models.servicio, { through:'clientexservicios', foreignKey: "codigo_cli" } );
    }
  }
  cliente.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    cedula: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
    tableName: 'clientes',
  });
  return cliente;
};