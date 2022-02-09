/**importamos las variables de entorno desde un archivo .env */
require('dotenv').config();

/**obtenemos datos de las varibles de entorno(.env) */
const config = {
  host: process.env.host,
  usuario: process.env.usuario,
  password: process.env.password,
  database: process.env.database,
  dialect: process.env.dialect
};

/**exportamos para usarlo fuera */
module.exports = {
  config
}