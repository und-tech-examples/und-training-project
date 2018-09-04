# und-training-project

1. Use la imagen undcomercio/node:10
2. Instales las dependencias a travez de docker (use volumenes, entrypoint, workdir, tty, interactive). Ejemplo: 
```
docker run --rm -ti -v $(pwd)/app:/app -w /app --entrypoint npm undcomercio/node:10 install
```
3. Ejecute la aplicacion a travez de docker (use volumenes, entrypoint, workdir, puerto, tty, interactive)
```
docker run --rm -it -p 3000:3000 -v $(pwd)/app:/app -w /app --entrypoint yarn  undcomercio/node:10 server
```
4. Agregar recurso saludo:
```js
router.get('/saludo', (ctx, next) => {
    ctx.body = 'Hello friend!';
})
```
5. Agregar recurso despedida:
```js
router.get('/despedida', (ctx, next) => {
    ctx.body = 'Good bye friend!';
})
```