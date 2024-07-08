const express = require('express');
const { request } = require('http');
const app = express()
const path = require('path')
const port = process.env.PORT || 4000

//============== Middleware =============
app.use(express.static(path.join(__dirname, 'public'))); //acceso absoluto en cualquier sistema operativo 
//app.use(express.static(__dirname + '/public')); acceso absoluto al directorio
//app.use(express.static('public')); //directori standar para los archivos estaticos
app.use(express.json()); //Habilita el recibo de archivos json para su lectura en req.body

//============== Routes ==================
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get("/unirse", function(request, response){
    response.download(path.join(__dirname, 'apk', 'naturetrustbank.apk'))
});

app.get('/hola', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'hola.html'))
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`)
});