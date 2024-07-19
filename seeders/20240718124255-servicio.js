'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const services = [];
    for (let i = 0; i < 10; i++) {
      services.push({
        descripcion: 'Servicio ' + i,
        precio: (Math.random() * 100).toFixed(2),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('servicios', services, {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicios', null, {});
  }
};
