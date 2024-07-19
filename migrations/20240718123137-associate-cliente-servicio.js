'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('clientexservicios', {
      fields: ['codigo_cli'],
      name: 'codigo_cli_fk',
      type: 'foreign key',
      references: {
      table: 'clientes',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
      
      await queryInterface.addConstraint('clientexservicios', {
      fields: ['codigo_serv'],
      name: 'codigo_serv_fk',
      type: 'foreign key',
      references: {
      table: 'servicios',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('clientexservicios', 'codigo_cli_fk')
    await queryInterface.removeConstraint('clientexservicios', 'codigo_serv_fk')
  }
};
