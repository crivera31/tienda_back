/**importamos librerias a usar */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { DBconection } = require('./database/db');

const app = express();
app.use(cors()); /** acceder a los recursos en el cliente */

const port = process.env.PORT || 3000 /**como se deployo en heroku, ponemos el puerto por defecto 3000... sino usa usara el que declaramos en .env */

/**verificamos la conexion a la DB */
DBconection
.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

/**endpoints de la api */
app.use('/api/products', require('./routes/product.route'));
app.use('/api/category', require('./routes/category.route'));
app.use('/api/search', require('./routes/search.route'));

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto ' ,port, ' v1.0');
});