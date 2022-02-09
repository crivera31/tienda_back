const { Router } = require('express');
const { searchProduct,searchProductByPrice } = require('../controllers/searchController');

const router = Router();

/**ruta para la busqueda */
router.get("/", searchProduct);
router.get("/price", searchProductByPrice);

module.exports = router;