const { Router } = require('express');
const { getCategories } = require('../controllers/categoryController');

const router = Router();

/**ruta para categoria */
router.get("/", getCategories);

module.exports = router;