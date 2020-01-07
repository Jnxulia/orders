
Este Proyecto contiene
- Backend en nestj y node 10

Simple crud usando nestj mongoose y MongoDB 4.0

## Pasos para la Instalacion
  ### Descargar el repositorio
  
  ````
 git clone https://github.com/Jnxulia/orders.git
  ````

### Ubiquese en la Raiz del proyecto y Ejecute el docker compose 
````
docker-compose up
````
<hr/>

> ### Si no desea instalarlo via docker debe hacer lo siguiente:


##  Backend
### Requisitos


- node 10
- nestjs  `npm install -g @nestjs/cli`
- Para desarrollo el puerto 3000 debe estar disponible

Ubicarse en la carpeta test-nestjs
````
cd test-nestjs
````


Para instalar dependencias ejecute:
````
npm install
```` 
Para iniciar el proyecto:
````
npm start
````
Ejecutar las pruebas unitarias
````
npm run test
````
Ejecutar las pruebas End to End (recuerde que el proyecto se debe encontrar habilitado)
- Configurar el endpoint(se encuentra en la carpeta test-nestjs/test/constants.ts)
- Ejecutar las pruebas
````
npm run test:e2e
````


<hr/>