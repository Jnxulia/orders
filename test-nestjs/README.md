## Ejecutar Pruebas
````
npm  test
````

## Ejecutar Pruebas E2E
````
npm run test:e2e
 ```` 


## Generar contenedor
````
docker build -t backend_fs:dev .

docker run -d --name backend_fs -p 3000:3000 backend_fs:dev 
  ````
## Servicios Disponibles:
````
http://localhost:3000/products
````
````
http://localhost:3000/orders
````
