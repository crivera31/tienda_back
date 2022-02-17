/**importamos librerias a usar */
const { response } = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/**importamos los modelos */
const { productModel } = require('../database/db');
const { categorytModel } = require('../database/db');

/**funcion obtener productos paginados */
const getProductsAll = (req, res = response) => {
  productModel.findAndCountAll({
          attributes: ['id','name','url_image','price','discount'],
          where: {
            url_image: {
              [Op.ne]: ""
            }
          },
          include: {
            model: categorytModel,
            required: true
          }
  })
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

/**funcion obtener productos paginados */
const getProducts = (req, res = response) => {
  const desde = Number(req.query.desde || 0);
  productModel.findAndCountAll({
          attributes: ['id','name','url_image','price','discount'],
          include: {
            model: categorytModel,
            required: true
          },
          offset: desde,
          limit: 6
  })
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

/**funcion obtener productos por categoria */
const getProductByCategory = (req, res = response) => {
  const idCategoria = Number(req.query.id);
  productModel.findAndCountAll({
    attributes: ['id','name','url_image','price','discount'],
    where: {
      category: {
        [Op.eq]: idCategoria
      }
    },
    include: {
      model: categorytModel,
      required: true
    }
})
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
  getProductsAll,
  getProducts,
  getProductByCategory
}