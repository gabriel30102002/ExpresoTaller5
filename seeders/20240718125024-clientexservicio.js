'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      // Obtener todos los IDs de clientes y servicios
      let [clientes, clientes_metadata] = await queryInterface.sequelize.query('SELECT id FROM clientes');
      let [servicios, servicios_metadata] = await queryInterface.sequelize.query('SELECT id FROM servicios');
  
      // Insertar datos en clientexservicio
      await queryInterface.bulkInsert('clientexservicios', [
        { codigo_cli: clientes[0].id, codigo_serv: servicios[0].id, createdAt: new Date(), updatedAt: new Date() },
        { codigo_cli: clientes[0].id, codigo_serv: servicios[1].id, createdAt: new Date(), updatedAt: new Date() },
        { codigo_cli: clientes[1].id, codigo_serv: servicios[0].id, createdAt: new Date(), updatedAt: new Date() },
        { codigo_cli: clientes[1].id, codigo_serv: servicios[1].id, createdAt: new Date(), updatedAt: new Date() }
        // Añadir más asociaciones según sea necesario
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientexservicios', null, {});
  }
};
