# und-trainig-project

1. Use la imagen undcomercio/node:10
2. Instales las dependencias a travez de docker (use volumenes, entrypint, workdir). Ejemplo: 
```
docker run --rm -v $(pwd)/app:/app -w /app --entrypoint npm undcomercio/node:10 install
```
3. Ejecute la aplicacion a travez de docker 
```
docker run --rm -v $(pwd)/app:/app -w /app --entrypoint node undcomercio/node:10 index.js
```
