'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientexservicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  clientexservicio.init({
    codigo_cli: DataTypes.INTEGER,
    codigo_serv: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'clientexservicio',
    tableName: 'clientexservicios',
  });
  return clientexservicio;
};