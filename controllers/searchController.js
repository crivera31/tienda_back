/**importamos librerias a usar */
const { response } = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/**importamos los modelos */
const { productModel } = require('../database/db');
const { categorytModel } = require('../database/db');

/**funcion buscar productos por campo NAME */
const searchProduct = (req,  res = response) => {
  const buscar = req.query.text;
  productModel.findAll({
    where: {
      name: {
        [Op.like]: `%${buscar}%`
      }
    },
    attributes: ['id','name','url_image','price','discount'],
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
        total_reg: data.length,
        products: data
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      msg: 'Error en el servidor.'
    });
  });


  }
/**funcion filtrar productos por rango de precio */
const searchProductByPrice = (req,  res = response) => {
    const desde = req.query.desde;
    const hasta = req.query.hasta;

    productModel.findAll({
      where: {
        price: {
          [Op.between]: [desde, hasta]
        }
      },
      attributes: ['id','name','url_image','price','discount'],
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
          total_reg: data.length,
          products: data
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
  searchProduct,
  searchProductByPrice
}
