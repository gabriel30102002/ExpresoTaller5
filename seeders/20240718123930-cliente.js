'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const clients = [];
    for (let i = 0; i < 10; i++) {
      clients.push({
        nombre: 'Nombre' + i,
        apellido: 'Apellido' + i,
        cedula: 'Cedula' + (10000000 + i),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('clientes', clients, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
