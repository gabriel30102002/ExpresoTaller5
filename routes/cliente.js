var express = require('express');
var router = express.Router();
const {Sequelize, Op} = require('sequelize');
const Cliente = require('../models').cliente;
const Servicio = require('../models').servicio;

router.get('/findAll/json', function(req, res, next) {  
    Cliente.findAll({  
        attributes: { exclude: ["updatedAt"] },
        include: [{  
            model: Servicio,  
            attributes: ["descripcion", "precio"],  
            through: { attributes: [] }  
        }]  
    })  
    .then(clientes => {  
        res.json(clientes);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.get('/findAll/view', function(req, res, next) {
    Cliente.findAll({  
      attributes: { exclude: ["updatedAt"] },
      include: [{  
          model: Servicio,  
          attributes: ["descripcion", "precio"],  
          through: { attributes: [] }  
      }]  
    }) 
    .then(clientes => {
      res.render('cliente', { title: 'Clientes', arrClientes: clientes });
    })
    .catch(error => res.status(400).send(error));
  });
  
  
  router.get('/findAllByRate/json', function(req, res, next) {
    let lower = parseFloat(req.query.lower);
    let higher = parseFloat(req.query.higher);
    Servicio.findAll({
        attributes: ["id", "descripcion", "precio"],
        where: {
          precio: {
            [Op.between]: [lower, higher]
          }
        },
        include: [{
          model: Cliente,
          attributes: ["nombre", "apellido","cedula" ],
          through: { attributes: [] }
        }]
      })
      .then(servicios => {
        res.json(servicios);
      })
      .catch(error => res.status(400).send(error));
    });
  
  
  router.get('/findAllById/:id/json', function(req, res, next) {
    let id = parseInt(req.params.id);
    Cliente.findAll({
      attributes: { exclude: ["updatedAt"] },
      include: [{
        model: Servicio,
        attributes: ["descripcion", "precio"],
        through: { attributes: [] }
      }],
      where: {
        [Op.and]: [
          { id: id }
        ]
      }
    })
    .then(clientes => {
      res.json(clientes);
    })
    .catch(error => res.status(400).send(error));
  });
  
  
  router.get('/findAllById/:id/view', function(req, res, next) {
    let id = parseInt(req.params.id);
    Cliente.findAll({
      attributes: { exclude: ["updatedAt"] },
      include: [{
        model: Servicio,
        attributes: ["descripcion", "precio"],
        through: { attributes: [] }
      }],
      where: {
        id: id
      }
    })
    .then(clientes => {
      res.render('clientesid', { title: 'Clientes', arrClientes: clientes });
    })
    .catch(error => res.status(400).send(error));
  });
  
  
module.exports = router;