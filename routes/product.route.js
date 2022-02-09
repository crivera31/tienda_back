const { Router } = require('express');
const { getProducts,getProductByCategory } = require('../controllers/productController');

const router = Router();

/**ruta para productos */
router.get("/", getProducts);
router.get("/category", getProductByCategory);

module.exports = router;