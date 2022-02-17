const { Router } = require('express');
const { getProducts,getProductByCategory,getProductsAll } = require('../controllers/productController');

const router = Router();

/**ruta para productos */
router.get("/all", getProductsAll);
router.get("/", getProducts);
router.get("/category", getProductByCategory);

module.exports = router;