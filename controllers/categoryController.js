/**importamos librerias a usar */
const { response } = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/**importamos los modelos */
const { productModel } = require('../database/db');
const { categorytModel } = require('../database/db');

/**funcion obtener las categorias */
const getCategories = (req, res = response) => {
  categorytModel.findAndCountAll()
  .then(data => {
    if(data.length == 0) {
      res.status(404).json({
        ok: false,
        message: 'No se encontraron registros.'
      })
    } else {
      res.json({
        ok: true,
        data
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      msg: 'Error en el servidor.'
    });
  });
}

/**exportamos fuera para usarlo */
module.exports = {
  getCategories
}