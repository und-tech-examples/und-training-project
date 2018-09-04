# und-trainig-project

1. Use la imagen undcomercio/node:10
2. Instales las dependencias a travez de docker (use volumenes, entrypint, workdir, tty, interactive). Ejemplo: 
```
docker run --rm -ti -v $(pwd)/app:/app -w /app --entrypoint npm undcomercio/node:10 install
```
3. Ejecute la aplicacion a travez de docker (use volumenes, entrypint, workdir, puerto, tty, interactive)
```
docker run --rm -it -p 3000:3000 -v $(pwd)/app:/app -w /app --entrypoint yarn  undcomercio/node:10 server
```
