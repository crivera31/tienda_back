# Tienda Online - Backend con NodeJs/Express, Sequelize & MySQL
Ejecutar el servidor

```
En desarrollo: `nodemon start:dev`
En producción: `npm run start`
```

Crear el archivo .env donde se declara las variables de entorno para conexión a la DB:

```
port=3005
host,usuario,password,database,dialect SEGUN CREDENCIALES PROPORCIONADAS.
```

# Librerias
- cors v2.8.5
- dotenv: v10.0.0
- express: v4.17.1"
- mysql2: v2.3.0"
- nodemon: v2.0.12"
- sequelize: v6.6.5"

# API Endpoints

### GET /api/products?desde={desde}

Obtener listado de productos por categoria paginados de 6 en 6.

Se recibe por request el dato DESDE, que traerá en este caso 6 registros y si no se envia
por default esta en 0 y va disminuyendo(-6) o sumando(+6) según se clickea en ANTERIOR o SIGUIENTE.
```json
{
  "message": "success",
  "data": [
    "count": 57,
    "rows": [
         {
            "id": 5,
            "name": "ENERGETICA MR BIG",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            "price": 1490,
            "discount": 20,
            "Category": {
               "id": 1,
               "name": "bebida energetica"
         }
       }] 
  ]
}
```

### GET /api/search?text={search}

Buscar productos por `name`.
Se recibe por request `search`.
```json
{
    "ok": true,
    "products": [
        {
            "id": 98,
            "name": "Cerveza Escudo Normal LATA 350CC",
            "url_image": "",
            "price": 600,
            "discount": 0,
            "Category": {
                "id": 6,
                "name": "cerveza"
            }
        },
        {
            "id": 99,
            "name": "Cerveza Escudo Sin Filtrar LATA 350CC",
            "url_image": "",
            "price": 800,
            "discount": 0,
            "Category": {
                "id": 6,
                "name": "cerveza"
            }
        }
    ]
}
```

### GET /api/category

Obtener listado de categorías.
```json
{
  "ok": true,
  "data": {
    "count": 7,
    "rows": [
      {
        "id": 1,
        "name": "bebida energetica"
      },
      {
        "id": 2,
        "name": "pisco"
      },
      {
        "id": 3,
        "name": "ron"
      },
      {
        "id": 4,
        "name": "bebida"
      },
      {
        "id": 5,
        "name": "snack"
      },
      {
        "id": 6,
        "name": "cerveza"
      },
      {
        "id": 7,
        "name": "vodka"
      }
    ]
  }
}
```

### GET /api/products/category?id={id}

Filtrar productos por la categoría.
Se recibe por request `id`.
```json
{
  "ok": true,
  "data": {
    "count": 21,
    "rows": [
      {
        "id": 8,
        "name": "PISCO ALTO DEL CARMEN 35º",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
        "price": 7990,
        "discount": 10,
        "Category": {
          "id": 2,
          "name": "pisco"
        }
      },
      {
        "id": 9,
        "name": "PISCO ALTO DEL CARMEN 40º ",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto408581.jpg",
        "price": 5990,
        "discount": 0,
        "Category": {
          "id": 2,
          "name": "pisco"
        }
      },
      {
        "id": 10,
        "name": "PISCO ARTESANOS 35º ",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/artesanos8818.jpg",
        "price": 3990,
        "discount": 0,
        "Category": {
          "id": 2,
          "name": "pisco"
        }
      }
    ]
  }
}
```

### GET /api/search/price?{desde=1400}&{hasta=25000}

Buscar productos por rango de `price`.
Se recibe por request `desde` y `hasta`.
```json
{
    "ok": true,
    "total_reg": 14,
    "products": [
        {
            "id": 5,
            "name": "ENERGETICA MR BIG",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            "price": 1490,
            "discount": 20,
            "Category": {
                "id": 1,
                "name": "bebida energetica"
            }
        },
         {
            "id": 6,
            "name": "ENERGETICA RED BULL",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
            "price": 1490,
            "discount": 0,
            "Category": {
                "id": 1,
                "name": "bebida energetica"
            }
        }
    ]
}
```
